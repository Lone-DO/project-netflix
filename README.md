# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm dev
```

## Production

Build the application for production:

```bash
# pnpm
pnpm build
```

Locally preview production build:

```bash
# pnpm
pnpm preview
```

# References

- [Figma](https://www.figma.com/design/KfxFOu4ZogVfhE2rKZHtNK/Netflix-Design-System-2024--Website-ver.--%F0%9F%8E%A5--Community-?node-id=202-17497&t=v6zaK9JWF6g4sLng-0)

# Dependencies

## Nuxt Plugins

### @nuxt/icon

Extensive Icon Library, referenced via `<Icon name='host:iconName'`

### @nuxtjs/color-mode

Used for Toggling Page Theme automatically based on toggle state. Modifies root `HTML` attribute `data-theme`

## Tailwind/UI Libraries

### tailwind

`@tailwindcss`, `@tailwindcss/vite` are used for registering Tailwind with vscode intellisense and vite compiler.

```
  // .vscode/settings.json for tailwindcss extension
  "tailwindCSS.experimental.configFile": "./app/assets/css/main.css",
```

### daisyui

Tailwind UI Theme based library (Class based dumb components)

## Utilities

### Eslint

`eslint`, `eslint-plugin-format`, `@antfu/eslint-config`, `@nuxt/eslint`

### Husky

Git Hooks for validating code before allowing user to commit/push changes to server

### lint-staged

Hook to validate **only modified files** for linting problems
