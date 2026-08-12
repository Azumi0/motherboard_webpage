This is a [Next.js](https://nextjs.org) project configured to use **[pnpm](https://pnpm.io/)** as its package manager.

## Getting Started

### Prerequisites

Ensure you have [pnpm](https://pnpm.io/installation) installed on your system.

### Installation

Install dependencies:

```bash
pnpm install
```

### Running the Development Server

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

You can start editing the main page by modifying [`src/app/page.tsx`](src/app/page.tsx). The page auto-updates as you edit the file.

### Available Scripts

- `pnpm dev`: Starts the Next.js development server.
- `pnpm build`: Builds the application for production.
- `pnpm start`: Starts the production server after building.
- `pnpm lint`: Runs ESLint to check for code issues.

## Learn More

To learn more about Next.js and pnpm, check out the following resources:

- [pnpm Documentation](https://pnpm.io/documentation) - learn about pnpm features and CLI commands.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Netlify

The easiest way to deploy this Next.js app on Netlify is via continuous deployment with Git or using the Netlify CLI.

### Option 1: Netlify Web UI (Git Integration)

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Log in to [Netlify](https://app.netlify.com/).
3. Click **Add new site** > **Import an existing project**.
4. Connect your Git provider and select this repository.
5. Netlify will automatically detect Next.js and apply the settings from [`netlify.toml`](netlify.toml):
   - **Build command:** `pnpm build`
   - **Publish directory:** `.next`
6. Click **Deploy site**.

### Option 2: Netlify CLI

You can also deploy directly from the command line:

```bash
# Install Netlify CLI globally (optional) or run via npx
npx netlify-cli login
npx netlify-cli init
npx netlify-cli deploy --build --prod
```

### Configuration

This project includes a [`netlify.toml`](netlify.toml) file preconfigured with the `@netlify/plugin-nextjs` plugin for optimal Server-Side Rendering (SSR), Server Actions, and API route support.

For more details, check out the [Netlify Next.js Documentation](https://docs.netlify.com/integrations/frameworks/next-js/).
