import { Handle, Position } from "reactflow";

export default function TaskNode({ data }: any) {
  return (
    <div style={box("#3b82f6")}>
      {data?.title || "Task"}

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

const box = (color: string) => ({
  background: color,
  padding: "10px 16px",
  borderRadius: 8,
  color: "white",
  minWidth: 120,
  textAlign: "center",
});