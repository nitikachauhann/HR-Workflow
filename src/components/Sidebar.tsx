import { useWorkflowStore } from "../store/useWorkflowStore";

export default function Sidebar() {
  const { nodes, setNodes } = useWorkflowStore();

const addNode = (type: string) => {
  setNodes([
    ...nodes,
    {
      id: Date.now().toString(),
      type,
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: {},
    },
  ]);
};

  return (
    <>
      <button onClick={() => addNode("start")}>Start</button>
      <button onClick={() => addNode("task")}>Task</button>
      <button onClick={() => addNode("approval")}>Approval</button>
      <button onClick={() => addNode("automated")}>Automated</button>
      <button onClick={() => addNode("end")}>End</button>
    </>
  );
}