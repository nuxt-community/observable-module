import Vue from 'vue'

export default async (ctx, inject) => {
    const state = await import('~/state')
        .then(m => m.default)
        .catch(_ => {
            consola.warn('No state.js file found in srcDir')
            return () => ({})
        })
    if (process.server) {
        ctx.$state = Vue.observable(state())
        ctx.ssrContext.nuxt.observable = ctx.$state
    } else {
        ctx.$state = Vue.observable(window.__NUXT__.observable)
    }    
    inject('state', ctx.$state)
}
