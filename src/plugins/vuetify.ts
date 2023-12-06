import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as labsComponents from 'vuetify/labs/components'

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        // ... your configuration
        components:labsComponents,
        theme: {
            themes: {
                light: {
                    colors: {
                        drawer: '#2B2A39'
                    },
                },
            },
        },
    })
    app.vueApp.use(vuetify)
})