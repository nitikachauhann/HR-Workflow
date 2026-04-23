import FlowCanvas from "./components/FlowCanvas";
import NodePanel from "./components/NodePanel";
import Sandbox from "./components/Sandbox";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
      
      <div style={{ width: 180, background: "#111827", color: "white", padding: 12 }}>
        <Sidebar />
      </div>

      <div style={{ flex: 1, height: "100%" }}>
        <FlowCanvas />
      </div>

      <div style={{ width: 260, borderLeft: "1px solid #e5e7eb", padding: 12 }}>
        <NodePanel />
      </div>

      <div style={{ width: 260, borderLeft: "1px solid #e5e7eb", padding: 12 }}>
        <Sandbox />
      </div>

    </div>
  );
}