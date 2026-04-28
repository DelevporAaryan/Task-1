# AI CRM HCP Module with Groq API
# 🚀 AI-First CRM HCP Module – Log Interaction Screen

## 📌 Overview
This project is an AI-first CRM module designed for Healthcare Professional (HCP) interaction tracking. It enables field representatives to log interactions using either a structured interface or a conversational AI chat.

The system leverages LLM-powered extraction and an agent-based architecture inspired by LangGraph to manage CRM workflows efficiently.

---

## 🧠 Key Features

- 💬 Chat-based interaction logging (AI-assisted)
- 📝 Structured data extraction using LLM (Groq API)
- ✏️ Edit previously logged interactions
- 📊 Interaction history tracking
- 🤖 AI-powered suggestions for next actions
- 📈 Summary generation of interactions

---

## 🏗️ Tech Stack

### Frontend
- React.js
- Axios
- (Optional: Redux for scalability)

### Backend
- FastAPI (Python)
- Pydantic
- REST APIs

### AI Layer
- Groq API (LLM: gemma2-9b-it)
- Agent-style orchestration (LangGraph-inspired design)

### Database
- In-memory (for demo)
- Designed for PostgreSQL/MySQL integration

---

## 🤖 AI Agent (LangGraph Concept)

The system uses an agent-based architecture where an AI agent orchestrates multiple tools to handle CRM interactions.

### 🔧 Defined Tools

1. **Log Interaction Tool**
   - Converts unstructured chat input into structured data
   - Uses LLM for:
     - Entity extraction (Doctor, Product, Outcome)
     - Summarization

2. **Edit Interaction Tool**
   - Allows modification of stored interaction records

3. **Get Interaction History Tool**
   - Fetches all past interactions

4. **Suggest Next Action Tool**
   - Provides AI-driven follow-up recommendations

5. **Generate Summary Tool**
   - Generates aggregated insights from interactions

---

## 🔄 System Architectur
User (React UI)
↓
FastAPI Backend
↓
AI Agent Layer (Groq LLM)
↓
Tool Execution
↓
Database (In-memory / SQL)


---

## 📡 API Endpoints

| Method | Endpoint | Description |
|------|--------|------------|
| POST | `/log-interaction` | Log interaction via chat |
| PUT | `/edit-interaction/{id}` | Edit interaction |
| GET | `/interactions` | Fetch all interactions |
| GET | `/suggest/{id}` | Get next action suggestion |
| GET | `/summary` | Get summary |

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
git clone <your-repo-link>
cd ai-crm-hcp

---

### 2️⃣ Backend Setup
cd backend
pip install -r requirements.txt
uvicorn main:app --reload


---

### 3️⃣ Frontend Setup
cd frontend
npm install
npm start

---

## 🔑 Groq API Setup

1. Get API key from Groq Console
2. Add it in:backend/ai_agent.py

Replace:
GROQ_API_KEY = "YOUR_GROQ_API_KEY"

---

## 🧪 Sample Input (Chat)
Met Dr. Sharma today, discussed insulin, he seemed interested.

### Output (Structured)
Doctor: Dr. Sharma
Product: Insulin
Outcome: Interested


---

## 🎥 Demo Coverage (Video)

The demo includes:
- UI walkthrough (chat + interaction list)
- AI-based extraction flow
- Demonstration of all 5 tools
- Architecture explanation

---

## ⚠️ Notes

- AI extraction is implemented using Groq LLM
- Current implementation uses simplified parsing fallback for reliability
- Designed to be extended with:
  - LangGraph real implementation
  - PostgreSQL integration
  - Redux state management

---

## 🚀 Future Improvements

- Full LangGraph integration
- Advanced prompt engineering
- Authentication & user roles
- Deployment (Vercel + Render/AWS)
- Real-time interaction updates

---

## 👨‍💻 Author

Aaryan Gautam

---

## 💡 Key Insight

This project demonstrates how AI agents can transform traditional CRM systems into intelligent, conversational, and workflow-aware platforms.
