# Next.js + RupoUI Boilerplate

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), pre-configured with [RupoUI](https://github.com/rupoui/rupoui) and Tailwind CSS v4.

## 🚀 Features

- **Next.js 15+**: App Router, Server Components, and more.
- **RupoUI**: A beautiful, accessible, and customizable UI library.
- **Tailwind CSS v4**: The latest version of the utility-first CSS framework.
- **Framer Motion**: Production-ready animation library for React.
- **TypeScript**: Static type checking for better developer experience.

## 📦 Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠 Project Structure

- `app/`: Contains the Next.js App Router application code.
- `app/providers.tsx`: Global providers wrapper including `RupoUIProvider`.
- `app/globals.css`: Global styles and RupoUI theme configuration.
- `public/`: Static assets.

## 🎨 Customization

You can customize the theme variables in `app/globals.css` to match your brand. RupoUI uses a semantic color system (e.g., `--rui-primary`, `--rui-background`).

## Learn More

To learn more about Next.js and RupoUI, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [RupoUI Documentation](https://www.npmjs.com/package/rupoui) - learn about RupoUI components and theming.
