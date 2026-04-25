# Google Work Experience — Website Update

## Summary

Update the Google timeline entry in `src/Components/Work.js` from a single vague bullet to a rich, three-phase description that reflects 5+ years of growth from L3 to L6, real business impact numbers, and current AI agent work.

## Current State

The existing Google entry contains one line:
> "Working on AI agents for internal contracting applications, building intelligent systems to streamline procurement and contracting workflows"

It has no level progression, no metrics, no tech stack, and no structure.

## Design

### Structure: Single timeline entry, three labeled phases

Keep one `VerticalTimelineElement` for Google. Organize content into three phase sections with small uppercase labels. Tech stack tags rendered as inline styled spans at the bottom.

### Content

**Header**
- Title: `Software Engineer (L3 → L6)`
- Subtitle: `Google`
- Date: `February 2020 – Present`

**Phase 1 — Full-Stack Engineering**
- Built and shipped multiple large-scale features for Google's internal contracting platform, impacting 20,000+ sales people and reducing contract turnaround time from months to weeks
- Promoted from L3 to L5 within 2.5 years; led a team of up to 10 engineers at L5
- Owned end-to-end delivery across frontend and backend using Java, TypeScript, Spanner, RPC, and Borg

**Phase 2 — LLM-Powered Data Extraction**
- Designed and built LLM-powered data extraction pipelines using Gemini and Vertex AI, saving the business $50M+ annually by automating contract data processing
- Promoted to L6 in recognition of technical scope and business impact

**Phase 3 — AI Agents**
- Building two AI agents with Google ADK: a contract drafting agent that guides non-experts through end-to-end contract creation, and a contract retrieval & analysis agent for fast information lookup and insights
- Driving adoption of agentic workflows across Google's contracting organization

**Tech Tags**
Java · TypeScript · Python · Gemini / Vertex AI · Google ADK · Spanner · RPC / Borg

## Implementation

- Edit `src/Components/Work.js`: replace the single `<p>` inside the Google `VerticalTimelineElement` with the three-phase structure
- Add inline styles for phase labels (small uppercase, Google blue `#4285F4`) and tech tag spans (blue pill style matching the mockup)
- No new dependencies required
- No changes to any other file
