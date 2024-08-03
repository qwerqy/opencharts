# Dashboard kit

Tukang Dev's dashboard kit to start a new project.

This project comes built-in with a monorepo, incase the project gets bigger.

## What's inside?

This monorepo includes the following packages/apps:

### Apps and Packages

- `web`: the dashboard web application
- `@opencharts/ui`: a React component library built with `tailwind`
- `@opencharts/eslint-config`: `eslint` configurations (includes
  `eslint-config-next` and `eslint-config-prettier`)
- `@opencharts/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@opencharts/tailwind-config`: Config for tailwind to be used in the project

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd dashboard-kit
yarn build
```

### Develop

To develop all apps and packages, run the following command:

```
cd dashboard-kit
yarn dev
```

### Remote Caching

Turborepo can use a technique known as
[Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to
share cache artifacts across machines, enabling you to share build caches with
your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need
an account with Vercel. If you don't have an account you can
[create one](https://vercel.com/signup), then enter the following commands:

```
cd dashbord-kit
npx turbo login
```

This will authenticate the Turborepo CLI with your
[Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following
command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
