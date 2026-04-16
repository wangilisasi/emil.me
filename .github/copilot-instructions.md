# Copilot Repository Instructions

This is an Astro-based personal site with blog content under `src/content/blog/`.

## Guardrails

- Do not create a new blog post unless the user explicitly asks for it.
- If asked for a new blog post without a title/topic, ask for one first.
- In agent mode, do not run `npm run dev`; use `npm run build` to validate changes.
- When updating dependencies, prefer the latest stable versions and do not downgrade as a quick fix.
- Before dependency upgrades, check with `npm outdated` and `npm view <package> version`.
- If command-line stream editing is needed, prefer `gsed` over `sed` for compatibility.

## Common Paths

- Blog posts: `src/content/blog/`
- Site constants: `src/consts.ts`
- Layouts: `src/layouts/`
- Components: `src/components/`
- Global styles: `src/styles/`
