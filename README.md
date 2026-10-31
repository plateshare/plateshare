# PlateShare: CS 410 / CS 411W Team Website

Static team website (plain HTML + CSS) hosted on GitHub Pages. It serves as the team's electronic portfolio.

## Structure

```
index.html          Home page
about.html          Project overview
team.html           Team members
deliverables.html   CS 410 / CS 411W deliverables
css/style.css       Shared styles
docs/               Put PDFs/slides here and link them from deliverables.html
```

## Publishing on GitHub Pages

1. Create a new **public** repo on GitHub (e.g. `plateshare`). Leave "Add a README" unchecked.
2. Upload these files: on the repo page, click **uploading an existing file**, drag in everything from this folder (including the `css` and `docs` folders), and click **Commit changes**.
   Or from a terminal:
   ```bash
   cd plateshare-site
   git init
   git add .
   git commit -m "Initial team website"
   git branch -M main
   git remote add origin git@github.com:<username>/plateshare.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**. Under **Build and deployment**, set Source to **Deploy from a branch**, Branch to **main** and folder **/ (root)**, then click **Save**.
4. Wait 1–2 minutes and refresh. The site will be live at
   `https://<username>.github.io/plateshare/`
5. Add teammates as collaborators: **Settings → Collaborators → Add people**.

## Editing

- **Team members:** edit the cards in `team.html`.
- **Adding a deliverable:** drop the file in `docs/`, then in `deliverables.html` replace "Coming soon" with
  `<a href="docs/filename.pdf">View (PDF)</a>` and change the badge class to `badge-done`.
