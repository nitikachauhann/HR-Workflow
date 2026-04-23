import { Handle, Position } from "reactflow";

export default function StartNode({ data }: any) {
  return (
    <div style={box("#22c55e")}>
      {data?.title || "Start"}

      {/* only output */}
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