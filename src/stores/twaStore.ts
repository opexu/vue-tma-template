import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import WebApp from '@twa-dev/sdk'

export const useTWAStore = defineStore( 'twa', () => {
    
    const webApp = WebApp;

    return { webApp }
} )
