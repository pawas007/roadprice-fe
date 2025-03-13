import {useRuntimeConfig} from 'nuxt/app'

export function useSeo(title, image, description) {
    const config = useRuntimeConfig()
    const route = useRoute()
    useHead({
        title: title + ' - Site name' || 'Site name',
        meta: [
            {
                name: 'description',
                content: description || ''
            },
            {
              property: 'og:title',
              content: title || ''
            },
            {
                property: 'og:description',
                content: description || ''
            },
            {
                property: 'og:image',
                content: image || ''
            },
            {property: 'og:url', content: config.public.appUrl + route.fullPath},
            {property: 'og:type', content: 'website'}
        ]
    })
}
