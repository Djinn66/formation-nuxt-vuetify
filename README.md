# Nuxt 3 with Vuetify Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) and [Vuetify documentation](https://vuetifyjs.com/en/) to learn more.

## How to init a new projet without clone repository

Start off creating a nuxt app by executing the following commands:

```bash
npx nuxi@latest init <project-name>
cd <project-name>
npm i
```

and then install the required Vuefity modules as dependencies:

```bash
npm i -D vuetify vite-plugin-vuetify
npm i @mdi/font
```

Next, integrate the following entries into your ```nuxt.config.ts``` file:

```nuxt.config.ts```
```ts
import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    //...
    srcDir: 'src/',
    ssr: false,
    css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.css'],
    devtools: {enabled: true},
    build: {
        transpile: ['vuetify'],
    },
    modules: [
        async (options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
                vuetify()
            ))
        },
        //...
    ],
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },
})
```

Nuxt allows you to change its Vite config by using its built-in hook ```vite:extendConfig```. In its callback function, add the Vuetify plugin to the array of Vite plugins. To resolve relative asset URLs that are passed to Vuetify components such as ```VImg``` (e.g. ```~/assets/img/some.png```) the ```transformAssetUrls``` function needs to be added in the ```vite``` entry .

In the next step, initialize Vuetify and add it to the main Vue app instance. This can be done in the ```plugins``` folder as any plugin that is placed in this folder will be automatically loaded by Nuxt at startup.

```~/plugins/vuetify.ts```
```ts
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as labsComponents from 'vuetify/labs/components'


export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
      components:labsComponents,
    // ... your configuration
  })
  app.vueApp.use(vuetify)
})
```

Finally, add Vuetify’s root ```VApp``` component either in ```~/app.vue``` or ```~/layouts/default.vue```, for example:

```~/layouts/default.vue```
```html
<template>
    <v-app>
        <!-- .... -->
    </v-app>
</template>
```

## Setup with repository

Make sure to install the dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

