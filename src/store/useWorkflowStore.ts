import { create } from "zustand";
import type { Node, Edge } from "reactflow";

interface WorkflowState {
  nodes: Node[];
  edges: Edge[];
  selectedNode: Node | null;

  setNodes: (nodes: Node[]) => void;
  setEdges: (edges: Edge[]) => void;
  setSelectedNode: (node: Node | null) => void;

  updateNodeData: (nodeId: string, key: string, value: any) => void;
}

export const useWorkflowStore = create<WorkflowState>((set) => ({
  nodes: [
    {
      id: "1",
      type: "start",
      position: { x: 250, y: 50 },
      data: { title: "Start" },
    },
  ],
  edges: [],
  selectedNode: null,

  setNodes: (nodes) => set({ nodes }),
  setEdges: (edges) => set({ edges }),
  setSelectedNode: (node) => set({ selectedNode: node }),

  updateNodeData: (nodeId, key, value) =>
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === nodeId
          ? {
              ...node,
              data: {
                ...node.data,
                [key]: value,
              },
            }
          : node
      ),
    })),
}));