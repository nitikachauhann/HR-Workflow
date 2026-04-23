import { Handle, Position } from "reactflow";

export default function EndNode({ data }: any) {
  return (
    <div style={box("#ef4444")}>
      {data?.message || "End"}

      {/* only input */}
      <Handle type="target" position={Position.Top} />
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