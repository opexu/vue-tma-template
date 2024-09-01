import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import WebApp from '@twa-dev/sdk'

export const useTWAStore = defineStore( 'twa', () => {
    
    WebApp.ready();
    
    const webApp = WebApp;

    return { webApp }
} )
