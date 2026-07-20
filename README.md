# Simran Khurmi — Portfolio

Personal portfolio site built with [Create React App](https://create-react-app.dev/) and deployed to [GitHub Pages](https://simrankhurmi.github.io/portfolio/).

## Live site

https://simrankhurmi.github.io/portfolio/

## Local development

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Run the app in development mode |
| `npm run build` | Create a production build in `build/` |
| `npm test` | Run tests once in CI mode |
| `npm run deploy` | Build and publish to the `gh-pages` branch manually |

## Deploying to GitHub Pages

This repo is configured for GitHub Pages with a project base path of `/portfolio` (see `homepage` in `package.json`).

### Option 1: GitHub Actions (recommended)

1. Push to the `main` branch.
2. In GitHub: **Settings → Pages → Build and deployment → Source** → choose **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push to `main`.

### Option 2: Manual deploy

```bash
npm run deploy
```

Then in **Settings → Pages**, set the source to the `gh-pages` branch.

## Git setup

The repo already tracks source files and ignores build output, dependencies, and local env files via `.gitignore`.

After making changes:

```bash
git add .
git commit -m "Describe your changes"
git push origin main
```

Remote: `https://github.com/simrankhurmi/portfolio.git`

## Project structure

```
src/
  components/   # Nav, hero content, social links
  images/       # Background and profile assets
public/         # Static HTML shell and icons
```

## Tech stack

- React 18
- Create React App
- Font Awesome (CDN)
- GitHub Pages
