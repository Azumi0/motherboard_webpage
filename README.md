This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Netlify

The easiest way to deploy this Next.js app on Netlify is via continuous deployment with Git or using the Netlify CLI.

### Option 1: Netlify Web UI (Git Integration)

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Log in to [Netlify](https://app.netlify.com/).
3. Click **Add new site** > **Import an existing project**.
4. Connect your Git provider and select this repository.
5. Netlify will automatically detect Next.js and apply the settings from [`netlify.toml`](file:///home/przemek/work/priv/motherboard_webpage/netlify.toml):
   - **Build command:** `npm run build`
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

This project includes a [`netlify.toml`](file:///home/przemek/work/priv/motherboard_webpage/netlify.toml) file preconfigured with the `@netlify/plugin-nextjs` plugin for optimal Server-Side Rendering (SSR), Server Actions, and API route support.

For more details, check out the [Netlify Next.js Documentation](https://docs.netlify.com/integrations/frameworks/next-js/).
