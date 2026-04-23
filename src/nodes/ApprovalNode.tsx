import { Handle, Position } from "reactflow";

export default function ApprovalNode({ data }: any) {
  return (
    <div style={box("#f59e0b")}>
      {data?.title || "Approval"}

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