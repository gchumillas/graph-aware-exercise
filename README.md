GraphAware exercise.

The app was made in React and TypeScript.

## Install and run the app

```bash
# download and install libraries
git clone https://github.com/gchumillas/graph-aware-exercise
cd graph-aware-exercise
yarn

# run the app and open http://localhost:3000 in your browser
yarn start
```

## Relevant libraries

- [TailwindCSS](https://tailwindcss.com/docs/installation): It is basically a collection of CSS acronyms to speed up the design process.
- [Styled Components](https://styled-components.com/): Used in combination with TailwindCSS to create custom CSS classes.
- [React Router v6](https://reactrouter.com/en/v6.3.0/getting-started/overview): A library for routing capabilities.
- [ESLint](https://www.npmjs.com/package/eslint): A tool to ensure that the source code conforms to the Style Guide.
- [TypeScript](https://www.typescriptlang.org/): A super-set of JavaScript, of course.

## Application structure

```
src/
  components/ -- list of reusable components
  layouts/    -- common app layouts (PageLayout, DialogLayout, etc.)
  libs/       -- common libraries
  pages/      -- app pages
  providers/  -- list of "end-point" functions
  store/      -- redux store and hooks to access the store
```