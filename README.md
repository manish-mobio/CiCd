# Basic Node.js App

A minimal Node.js HTTP server with no external dependencies.

## Run

```bash
npm start
```

Open http://localhost:3000 in a browser. Set `PORT` to use a different port.

## Vercel CI/CD

The GitHub Actions workflow in `.github/workflows/vercel.yml` deploys to Vercel
automatically whenever a commit is pushed to `main`.

The `api/index.js` function serves the app on Vercel, while `index.js` remains
the local development server.

Add these repository secrets in GitHub under **Settings > Secrets and variables > Actions**:

- `VERCEL_TOKEN`: a Vercel access token
- `VERCEL_ORG_ID`: the Vercel team or account ID
- `VERCEL_PROJECT_ID`: the Vercel project ID

Get the project and organization IDs by running `vercel link` locally and
checking `.vercel/project.json`.
