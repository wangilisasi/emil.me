---
applyTo: "src/content/blog/**/*.md"
---

# Blog Content Workflow

- Never create a new blog post unless explicitly requested by the user.
- If a new post is requested without a title/topic, ask for a title/topic first.
- For a new post scaffold, use `src/content/blog/<year>/<slug>.md`.
- Keep frontmatter minimal unless the user asks for more fields:
  - `title`: from user input
  - `description: "TBD"`
  - `draft: true`
  - `pubDatetime`: current date-time in ISO-8601 format
- Do not invent body content or outlines unless requested.
- When fixing image references in posts, ensure assets exist under matching paths in `public/assets/img/`.
