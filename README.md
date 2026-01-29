# 🚀 CodeSage AI

**AI-Powered GitHub Code Review SaaS**

CodeSage AI is a production-grade, multi-tenant SaaS platform that automatically reviews GitHub pull requests using AI. It integrates deeply with GitHub Apps, processes PR diffs asynchronously, and posts intelligent review feedback directly on pull requests — similar to tools like CodeRabbit and Copilot Review.

---

## ✨ Features

* 🤖 **AI-Powered Code Review** – Automatically reviews pull requests using LLMs
* 🐙 **GitHub App Integration** – Secure, organization-level access
* 🏢 **Multi-Tenant SaaS Architecture** – Organizations, members, and roles
* 🔁 **Async Background Jobs** – Reliable processing using Inngest
* 💬 **Automatic PR Comments** – AI feedback posted directly on GitHub PRs
* 💳 **Billing-Ready Architecture** – Polar-based subscription model
* ⚡ **Prisma + PostgreSQL (Neon)** – Scalable cloud database
* ☁️ **Vercel Deployment Ready** – Production-grade setup

---

## 🧠 How It Works

```
Pull Request Opened
        ↓
GitHub Webhook
        ↓
Inngest Background Job
        ↓
Fetch PR Diff
        ↓
AI Analysis (LLM)
        ↓
Store Review in DB
        ↓
Post Comment on PR
```

---

## 🧱 Tech Stack

### Frontend

* **Next.js 16 (App Router)**
* **TypeScript**
* **Tailwind CSS + shadcn/ui**

### Backend

* **Prisma ORM (v7)**
* **PostgreSQL (Neon)**
* **Prisma Accelerate**
* **Inngest (background workflows)**

### Integrations

* **GitHub App + Octokit**
* **AI SDK (OpenAI)**
* **Polar (Billing & Subscriptions)**

### Deployment

* **Vercel**

---

## 🏗️ Database Design

### Core Models

* **User**
* **Organization**
* **Membership (Role-based access)**
* **Repository (GitHub repos)**
* **CodeReview (AI output)**

### Roles

* OWNER
* ADMIN
* MEMBER

---

## 🔐 Authentication

Authentication is handled using **BetterAuth** with GitHub OAuth.

* Secure cookie-based sessions
* Server-side session access
* App Router compatible

---

## 🐙 GitHub Integration

CodeSage AI uses a **GitHub App** (not OAuth apps) to ensure:

* Organization-level installations
* Secure repository access
* Webhook-based automation

### Webhook Events

* `pull_request.opened`
* `installation.created`
* `installation_repositories.added`

---

## 🤖 AI Code Review

AI reviews are generated using PR diffs only (not full repositories), ensuring:

* Faster execution
* Lower token usage
* Relevant feedback

### Review Focus Areas

* Bugs & logical issues
* Security vulnerabilities
* Performance concerns
* Code quality improvements

AI feedback is posted directly as a comment on the pull request.

---

## 🔁 Background Jobs (Inngest)

All heavy operations run asynchronously:

* PR diff fetching
* AI inference
* Database writes
* GitHub API calls

This ensures:

* Fast webhook responses
* Retry support
* Fault tolerance

---

## 💳 Billing Architecture

Billing is organization-based and powered by **Polar**.

### Plans

| Plan | Features             |
| ---- | -------------------- |
| Free | Limited AI reviews   |
| Pro  | Unlimited reviews    |
| Team | Multi-member support |

Billing logic is webhook-driven and production-ready.

---

## 🌍 Environment Variables

```env
DATABASE_URL=
PRISMA_ACCELERATE_URL=

GITHUB_APP_ID=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GITHUB_PRIVATE_KEY=
GITHUB_WEBHOOK_SECRET=

OPENAI_API_KEY=

POLAR_ACCESS_TOKEN=
POLAR_WEBHOOK_SECRET=
```

---

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## ☁️ Deployment

CodeSage AI is deployed on **Vercel**.

Steps:

1. Push to GitHub
2. Import project into Vercel
3. Configure environment variables
4. Deploy

Webhook URLs:

* GitHub: `/api/webhooks/github`
* Polar: `/api/webhooks/polar`

---

## 📸 Demo Flow

1. User signs in with GitHub
2. Creates or selects organization
3. Installs GitHub App
4. Opens a pull request
5. AI automatically reviews PR
6. Comment appears on GitHub

---

## 🧠 What This Project Demonstrates

* Real-world SaaS system design
* Multi-tenant architecture
* Async event-driven workflows
* AI integration in production
* GitHub App ecosystem knowledge
* Billing & subscription modeling


---

## ⭐ Acknowledgements

* GitHub Apps
* Prisma
* Inngest
* OpenAI AI SDK
* Polar
* Vercel

---

⭐ If you like this project, give it a star on GitHub!
