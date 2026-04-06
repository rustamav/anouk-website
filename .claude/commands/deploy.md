Deploy all changes to the live website.

Steps:
1. Run `git status` and `git diff` to see what changed
2. If there are no changes, tell the user "Nothing to deploy — no changes since last deploy"
3. Stage all changed and new files (but never stage .DS_Store or files in .gitignore)
4. Create a commit with a short, descriptive message — do NOT add a co-author line
5. Push to origin main
6. Wait a few seconds for GitHub Pages to deploy, then open https://rustamav.github.io/anouk-website/ in Playwright and take a screenshot to show the user their live site
7. If there are any console errors or broken images, report them to the user

Keep all communication beginner-friendly. No jargon.
