import { useWorkflowStore } from "../store/useWorkflowStore";
import { getAutomations } from "../api/mockApi";
import { useEffect, useState } from "react";

export default function NodePanel() {
  const { nodes, selectedNode, updateNodeData } = useWorkflowStore();
  const [actions, setActions] = useState<any[]>([]);

  useEffect(() => {
    getAutomations().then(setActions);
  }, []);

  if (!selectedNode) return <p>Select a node</p>;

  // ✅ ALWAYS use fresh node from store
  const currentNode = nodes.find((n) => n.id === selectedNode.id);

  const handleChange = (key: string, value: any) => {
    updateNodeData(selectedNode.id, key, value);
  };

  const selectedAction = actions.find(
    (a) => a.id === currentNode?.data?.action
  );

  return (
    <div>
      <h3>Node Config</h3>

      {/* TITLE */}
      <input
        placeholder="Title"
        value={currentNode?.data?.title || ""}
        onChange={(e) => handleChange("title", e.target.value)}
      />

      {/* TASK NODE */}
      {selectedNode.type === "task" && (
        <>
          <input
            placeholder="Assignee"
            value={currentNode?.data?.assignee || ""}
            onChange={(e) => handleChange("assignee", e.target.value)}
          />

          <input
            type="date"
            value={currentNode?.data?.due || ""}
            onChange={(e) => handleChange("due", e.target.value)}
          />
        </>
      )}

      {/* APPROVAL NODE */}
      {selectedNode.type === "approval" && (
        <>
          <input
            placeholder="Approver Role"
            value={currentNode?.data?.role || ""}
            onChange={(e) => handleChange("role", e.target.value)}
          />

          <input
            type="number"
            placeholder="Threshold"
            value={currentNode?.data?.threshold || ""}
            onChange={(e) =>
              handleChange("threshold", Number(e.target.value))
            }
          />
        </>
      )}

      {/* AUTOMATED NODE */}
      {selectedNode.type === "automated" && (
        <>
          <select
            value={currentNode?.data?.action || ""}
            onChange={(e) => handleChange("action", e.target.value)}
          >
            <option value="">Select Action</option>
            {actions.map((a) => (
              <option key={a.id} value={a.id}>
                {a.label}
              </option>
            ))}
          </select>

          {selectedAction?.params?.map((p: string) => (
            <input
              key={p}
              placeholder={p}
              value={currentNode?.data?.[p] || ""}
              onChange={(e) => handleChange(p, e.target.value)}
            />
          ))}
        </>
      )}

      {/* END NODE */}
      {selectedNode.type === "end" && (
        <>
          <input
            placeholder="End Message"
            value={currentNode?.data?.message || ""}
            onChange={(e) => handleChange("message", e.target.value)}
          />

          <label>
            <input
              type="checkbox"
              checked={currentNode?.data?.summary || false}
              onChange={(e) =>
                handleChange("summary", e.target.checked)
              }
            />
            Summary
          </label>
        </>
      )}
    </div>
  );
}