import Vue from 'vue'

export default async (ctx, inject) => {
    const state = await import('~/state')
        .then(m => m.default)
        .catch(() => {
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
