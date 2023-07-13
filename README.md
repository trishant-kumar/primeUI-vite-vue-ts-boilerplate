![Logo](https://www.simform.com/wp-content/uploads/2022/12/logo.svg)

# Vue 3 + Ant Design + Storybook + Vite + Pinia Boilerplate

This template should help get you started developing with Vue 3 in Vite, Ant Design, Storybook, Vite, Pinia. You can directly start development without spending time on project setup.

The stack of this boilerplate is focused on web app front end, therefore I’ll keep it simple and mainly focuses on following technologies - Vue 3, Vite, Pinia, Ant Design, Storybook.

# Things to update before start

- update readme file to remove/add project related documenation.
- update `name` key in `package.json` file
- update git remote using `git remote set-url origin new.git.url/here` command
- remove unnecessary files.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Tech Stack

**Client:** [Vue3](https://vuejs.org/), [Javascript](https://www.javascript.com/), [Vite](https://vitejs.dev/), [Vuetify3](https://vuetifyjs.com/en/),  [Vue router](https://router.vuejs.org/), [Pinia](https://pinia.vuejs.org/),
 [Storybook](https://storybook.js.org/docs/vue/get-started/install), [Ant Design](https://antdv.com/docs/vue/introduce)

**Code Formatter** [Eslint](https://eslint.org/)

### Project Setup

`Clone URL : https://github.com/trishant-kumar/vuetify3-boilerplate.git`

Clone repo using HTTP or SSH method.

To use SSH method, please [Follow this tutorial](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

To use HTTP method, developer has to pass username in git clone url like this `https://{username}@github.com:trishant-kumar/vuetify3-boilerplate.git`
It will promte for application password that you can generate from [here](https://github.com/settings/tokens)

run `npm i` command

copy `.env.example` to `.env`. update `.env` file variables. make sure in this process you don't rename/delete `.env.example` file.

run `npm run dev` command to start development server.

### Other useful scripts

- `npm run build` to build a project
- `npm run preview` to run build preview
- `npm run lint` to check linting issues
- `npm run lint:fix` to fix linting issues
- `npm run storybook` to run storybook (To run storybook you need a node verion 16 or higher)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Author
Trishant Kumar (trishant.k@simformsolutions.com)
