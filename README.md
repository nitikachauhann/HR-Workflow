# 🚀 HR Workflow Automation System (React + React Flow)

A visual workflow builder for HR automation processes such as onboarding, approvals, and task orchestration. Built using **React, TypeScript, React Flow, and Zustand**, this system enables users to design workflows visually without writing code.

---

## ✨ Features

- 🎯 Drag & drop workflow builder  
- 🧩 Custom node types (Start, Task, Approval, Automated, End)  
- ⚙️ Dynamic node configuration panel  
- 🔗 Visual edge-based workflow connections  
- ▶️ Workflow simulation (execution logs)  
- 🧠 Centralized state management using Zustand  
- 🏗️ Modular and scalable architecture  

---

## 🧱 Architecture

### 📂 Project Structure

```bash
src/
├── components/
│   ├── FlowCanvas.tsx
│   ├── Sidebar.tsx
│   ├── NodePanel.tsx
│   ├── Sandbox.tsx
│
├── nodes/
│   ├── StartNode.tsx
│   ├── TaskNode.tsx
│   ├── ApprovalNode.tsx
│   ├── AutomatedNode.tsx
│   ├── EndNode.tsx
│
├── store/
│   └── useWorkflowStore.ts
│
├── api/
│   └── mockApi.ts
│
├── types/
│   └── node.ts
│
├── App.tsx
├── main.tsx
├── styles.css
└── index.css

Alright — here’s your **entire README in ONE single Markdown file**, clean and properly formatted. Just copy everything below and paste into `README.md`.

```md
# HR Workflow Designer (React + React Flow)

A visual workflow builder for HR automation processes such as onboarding, approvals, and task orchestration. This application allows users to design, configure, and simulate workflows through an interactive node-based interface without writing code.

---

## 🚀 Features

- Drag & drop workflow builder  
- Custom node types (Start, Task, Approval, Automated, End)  
- Dynamic node configuration panel  
- Visual edge-based connections  
- Workflow simulation (sandbox execution)  
- Clean modular architecture  

---

## 🧱 Architecture

### 📦 Frontend Structure

```

src/
│
├── components/
│   ├── FlowCanvas.tsx
│   ├── Sidebar.tsx
│   ├── NodePanel.tsx
│   ├── Sandbox.tsx
│
├── nodes/
│   ├── StartNode.tsx
│   ├── TaskNode.tsx
│   ├── ApprovalNode.tsx
│   ├── AutomatedNode.tsx
│   ├── EndNode.tsx
│
├── store/
│   └── useWorkflowStore.ts
│
├── api/
│   └── mockApi.ts
│
├── types/
│   └── node.ts
│
├── App.tsx
├── main.tsx
└── styles.css

````

---

## 🔄 Data Flow

- User adds node from Sidebar  
- Node appears on canvas (React Flow)  
- Zustand updates nodes and edges  
- Selecting node opens configuration panel  
- Node data updates in real-time  
- Edges define workflow structure  
- Sandbox simulates workflow execution  

---

## ⚙️ State Management

Managed using **Zustand**

Central store maintains:
- Nodes  
- Edges  
- Selected node  

Supports:
- Updating nodes  
- Updating edges  
- Updating node configuration  

---

## ▶️ How to Run

### 1️⃣ Clone the repository
```bash
git clone https://github.com/nitikachauhann/hr-workflow.git
cd hr-workflow
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start development server

```bash
npm run dev
```

### 4️⃣ Open in browser

[http://localhost:5173](http://localhost:5173)

---

## 🎨 Design Decisions

### 1. React Flow

* Provides built-in graph visualization
* Handles node positioning and edges
* Simplifies complex UI implementation

### 2. Zustand

* Lightweight and minimal boilerplate
* Faster and simpler than Redux for this use case

### 3. Modular Components

* Sidebar → Node creation
* FlowCanvas → Workflow builder
* NodePanel → Configuration
* Sandbox → Execution

Improves scalability, maintainability, and readability.

### 4. Dynamic Node Configuration

* UI adapts based on node type
* Enables flexible workflow customization

### 5. Mock API Layer

* Simulates backend functionality
* Enables testing without real APIs
* Prepares system for real integration

---

## ✅ What is Completed

* Workflow builder UI
* Node creation system
* Multiple node types
* Node configuration panel
* Edge-based connections
* Workflow simulation
* Zustand state management
* Clean modular structure

---

## 🚧 Future Improvements

* Authentication & role-based access
* Backend integration (Node.js + database)
* Real workflow execution engine
* Workflow validation rules
* Import / Export workflows
* Real-time collaboration
* UI/UX improvements (dark mode, auto layout, better drag experience)

---

## 🧠 Key Learnings

* Building graph-based UI using React Flow
* Managing complex state using Zustand
* Designing scalable frontend architecture
* Handling dynamic forms and interactions
* Creating simulation-based systems

---

## 🛠️ Tech Stack

* React (TypeScript)
* React Flow
* Zustand
* Vite
* CSS

---

## 👩‍💻 Author

**Nisha**
