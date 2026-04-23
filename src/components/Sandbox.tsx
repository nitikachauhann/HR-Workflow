import { useWorkflowStore } from "../store/useWorkflowStore";
import { simulateWorkflow } from "../api/mockApi";
import { useState } from "react";

export default function Sandbox() {
  const { nodes, edges } = useWorkflowStore();
  const [logs, setLogs] = useState<string[]>([]);

  const run = async () => {
    const res = await simulateWorkflow({ nodes, edges });
    setLogs(res.steps);
  };

  return (
    <div>
      <h3>Workflow Runner</h3>
      <button onClick={run}>Run Workflow</button>

      {logs.map((log, i) => (
        <div key={i} style={{ padding: 6, borderBottom: "1px solid #eee" }}>
          {log}
        </div>
      ))}
    </div>
  );
}