---
applyTo: "**/package*.json"
---

# Dependency Update Policy

- Always prefer latest stable dependency versions.
- Never downgrade dependencies as the default fix strategy.
- Before changing versions, inspect upgrade candidates with `npm outdated`.
- Verify latest versions with `npm view <package> version`.
- After dependency changes, validate with `npm run build` and fix compatibility issues in code.
