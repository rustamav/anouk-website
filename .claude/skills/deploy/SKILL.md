---
name: deploy
description: Deploy website changes to GitHub Pages. Use this skill whenever the user wants to publish, deploy, push changes live, update the website, go live, or make their changes visible online. Also trigger when they say "deploy", "publish", "push to live", or "update the site".
---

# Deploy to GitHub Pages

Deploy all changes to the live website at https://rustamav.github.io/anouk-website/.

## Steps

1. Run `git status` and `git diff` to see what changed
2. If there are no changes, tell the user "Nothing to deploy — no changes since last deploy" and stop
3. Show the user a brief summary of what changed in plain language
4. Stage all changed and new files — never stage `.DS_Store` or files listed in `.gitignore`
5. Create a commit with a short, descriptive message — do NOT add a co-author line
6. Push to `origin main`
7. Wait 5 seconds for GitHub Pages to deploy, then open https://rustamav.github.io/anouk-website/ in Playwright and take a screenshot to show the user their live site
8. Check for console errors or broken images and report any issues

## Important

- Keep all communication beginner-friendly — no jargon
- The commit message should describe what changed, not how (e.g. "Update about section text" not "Modify innerHTML of about-content div")
- Never add a Co-Authored-By line to commits
