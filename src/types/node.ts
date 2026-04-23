export type WorkflowNode = {
  id: string;
  position: { x: number; y: number };
  data: { label: string };
  type: "start" | "task" | "approval" | "automated" | "end";
};