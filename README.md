# HR Workflow Automation System (React + React Flow)

A visual workflow builder for HR automation processes such as onboarding, approvals, and task orchestration. Built using React, TypeScript, and React Flow, this system enables users to design workflows visually without writing code.

---

## Features

- Drag & drop workflow builder  
- Custom node types (Start, Task, Approval, Automated, End)  
- Dynamic node configuration panel  
- Visual edge-based workflow connections  
- Workflow simulation (execution logs)  
- Centralized state management using Zustand  
- Modular and scalable architecture  

---

## Architecture

### Frontend Structure

src/

components/ → UI building blocks  
- FlowCanvas.tsx → React Flow workspace  
- Sidebar.tsx → Node creation panel  
- NodePanel.tsx → Node configuration UI  
- Sandbox.tsx → Workflow execution panel  

nodes/ → Custom workflow nodes  
- StartNode.tsx  
- TaskNode.tsx  
- ApprovalNode.tsx  
- AutomatedNode.tsx  
- EndNode.tsx  

store/  
- useWorkflowStore.ts → Zustand state management  

api/  
- mockApi.ts → Simulated backend  

types/  
- node.ts → Type definitions  

App.tsx → Layout  
main.tsx → Entry point  
styles.css → UI styling  
index.css → base styling  

---

## Data Flow

1. User adds node from Sidebar  
2. Node appears on canvas (React Flow)  
3. Zustand updates nodes/edges  
4. Selecting node opens configuration panel  
5. Node data updates in real-time  
6. Edges define workflow structure  
7. Sandbox simulates execution  

---

## State Management

- Implemented using Zustand  
- Central store maintains:
  - Nodes  
  - Edges  
  - Selected node  

- Provides functions for:
  - Updating nodes  
  - Updating edges  
  - Updating node configuration  

---

## How to Run

1. Clone repository  
git clone https://github.com/YOUR_USERNAME/hr-workflow.git  
cd hr-workflow  

2. Install dependencies  
npm install  

3. Start development server  
npm run dev  

4. Open browser  
http://localhost:5173  

---

## Design Decisions

1. React Flow  
Used for building node-based UI with built-in support for edges, zoom, and layout.

2. Zustand  
Chosen for lightweight global state management with minimal boilerplate.

3. Component-Based Design  
Separated into Sidebar, Canvas, NodePanel, and Sandbox for better scalability.

4. Dynamic Forms  
Node configuration changes based on node type for flexibility.

5. Mock API  
Simulates backend functionality and enables testing without real APIs.

---

## What is Completed

- Functional workflow builder UI  
- Node creation system  
- Multiple node types  
- Node configuration panel  
- Edge-based connections  
- Workflow simulation (logs output)  
- Centralized state management  
- Modular architecture  

---

## Future Improvements

- Backend integration (Node.js, APIs, database)  
- Authentication and role-based access  
- Real workflow execution engine  
- Workflow validation and rules engine  
- Import/export workflows  
- Real-time collaboration  
- UI/UX enhancements (drag snapping, better styling, dark mode)  

---

## Tech Stack

- React (TypeScript)  
- React Flow  
- Zustand  
- Vite  
- CSS  

---

## Author

Nisha  

---

## If you like this project

Give it a star on GitHub ⭐
