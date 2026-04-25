# Google Experience Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the sparse single-bullet Google entry in the work timeline with a rich three-phase description showing level progression (L3→L6), real impact metrics, and current AI agent work.

**Architecture:** Two file edits — add CSS classes to `src/App.css`, then update the JSX in `src/Components/Work.js` to use those classes. No inline styles anywhere.

**Tech Stack:** React (JSX), CSS, no new dependencies

---

### Task 1: Add CSS classes for phase labels and tech tags

**Files:**
- Modify: `src/App.css`

- [ ] **Step 1: Append the following classes to the end of `src/App.css`**

```css
.work-phase-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #4285F4;
  text-transform: uppercase;
  margin-bottom: 6px;
  margin-top: 12px;
}

.work-tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
}

.work-tech-tag {
  background: #e8f0fe;
  color: #1a73e8;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
}
```

---

### Task 2: Update the Google timeline entry in Work.js

**Files:**
- Modify: `src/Components/Work.js:21-26`

- [ ] **Step 1: Replace the Google entry title and content**

Open `src/Components/Work.js`. Find the first `VerticalTimelineElement` (the Google one, lines 15–26). Replace the `<h3>`, `<h4>`, and `<p>` block with the following:

```jsx
<h3 className="vertical-timeline-element-title">Software Engineer (L3 → L6)</h3>
<h4 className="vertical-timeline-element-subtitle">Google</h4>
<div>
    <p className="work-phase-label">Full-Stack Engineering</p>
    <p>
        – Built and shipped multiple large-scale features for Google's internal contracting platform, impacting <strong>20,000+ sales people</strong> and reducing contract turnaround time from <strong>months to weeks</strong><br />
        – Promoted from L3 to L5 within 2.5 years; led a team of up to <strong>10 engineers</strong> at L5<br />
        – Owned end-to-end delivery across frontend and backend using Java, TypeScript, Spanner, RPC, and Borg
    </p>

    <p className="work-phase-label">LLM-Powered Data Extraction</p>
    <p>
        – Designed and built LLM-powered data extraction pipelines using Gemini and Vertex AI, saving the business <strong>$50M+ annually</strong> by automating contract data processing<br />
        – Promoted to <strong>L6</strong> in recognition of technical scope and business impact
    </p>

    <p className="work-phase-label">AI Agents</p>
    <p>
        – Building two AI agents with Google ADK: a contract drafting agent that guides non-experts through end-to-end contract creation, and a contract retrieval &amp; analysis agent for fast information lookup and insights<br />
        – Driving adoption of agentic workflows across Google's contracting organization
    </p>

    <div className="work-tech-tags">
        {['Java', 'TypeScript', 'Python', 'Gemini / Vertex AI', 'Google ADK', 'Spanner', 'RPC / Borg'].map(tag => (
            <span key={tag} className="work-tech-tag">{tag}</span>
        ))}
    </div>
</div>
```

- [ ] **Step 2: Verify the app renders without crashing**

Run:
```bash
npm test -- --watchAll=false
```
Expected output: `Tests: 1 passed`

- [ ] **Step 3: Commit both files**

```bash
git add src/App.css src/Components/Work.js
git commit -m "Update Google experience with full career arc, impact metrics, and AI agent work"
```
