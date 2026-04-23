// Simulate small network delay
const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * GET /automations
 * Returns available automated actions and their params
 */
export const getAutomations = async () => {
  await delay(300);

  return [
    {
      id: "send_email",
      label: "Send Email",
      params: ["to", "subject"],
    },
    {
      id: "generate_doc",
      label: "Generate Document",
      params: ["template", "recipient"],
    },
  ];
};

/**
 * POST /simulate
 * Accepts workflow graph and returns execution steps
 */
export const simulateWorkflow = async (workflow: any) => {
  await delay(500);

  const { nodes, edges } = workflow;

  // Basic validation
  if (!nodes || nodes.length === 0) {
    return { steps: ["❌ No workflow nodes found"] };
  }

  // Very simple execution order (not full DAG logic)
  const steps: string[] = [];

  nodes.forEach((node: any, index: number) => {
    let message = `Step ${index + 1}: ${node.type.toUpperCase()}`;

    if (node.type === "task") {
      message += ` → Assigned to ${node.data?.assignee || "N/A"}`;
    }

    if (node.type === "approval") {
      message += ` → Role: ${node.data?.role || "N/A"}`;
    }

    if (node.type === "automated") {
      message += ` → Action: ${node.data?.action || "N/A"}`;
    }

    if (node.type === "end") {
      message += ` → ${node.data?.message || "Workflow completed"}`;
    }

    steps.push(message);
  });

  return { steps };
};