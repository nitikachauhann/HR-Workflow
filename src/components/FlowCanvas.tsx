import ReactFlow, {
  addEdge,
  Background,
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
  type Connection,
  type Edge,
  type NodeChange,
  type EdgeChange,
} from "reactflow";
import { useCallback } from "react";
import { useWorkflowStore } from "../store/useWorkflowStore";
import nodeTypes from "../nodes/nodeTypes";

export default function FlowCanvas() {
  const {
    nodes,
    edges,
    setNodes,
    setEdges,
    setSelectedNode,
  } = useWorkflowStore();

  // 🔥 FIX: use store state, not local state
  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      setNodes(applyNodeChanges(changes, nodes));
    },
    [nodes, setNodes]
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => {
      setEdges(applyEdgeChanges(changes, edges));
    },
    [edges, setEdges]
  );

  const onConnect = useCallback(
    (params: Connection | Edge) => {
      setEdges(addEdge(params, edges));
    },
    [edges, setEdges]
  );

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={(_, node) => setSelectedNode(node)}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}