import {defineStore} from "pinia";

export const useSnackbarStore = defineStore('snackbar', () => {

    interface Snackbar {
        open: boolean
        message: string
        color: 'success' | 'error'
        timeout: number
    }

    const snackbar = ref<Snackbar>({
        open: false,
        message: '',
        color: 'success',
        timeout: 3000,
    })

    const icon = computed(() => {
        switch (snackbar.value.color) {
            case 'success':
                return 'mdi-check-circle-outline'
            case 'error':
                return 'mdi-alert-circle-outline'
        }
    })

    const openSnackbar = (
        message: string,
        options: { color?: 'success' | 'error', timeout?: number } = {
            color: 'success',
            timeout: 3000
        }) => {
        snackbar.value = {
            open: true,
            message,
            color: options.color || 'success',
            timeout: options.timeout || 3000
        }
    }

    return {snackbar, icon, openSnackbar}
})