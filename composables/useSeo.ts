import {useRuntimeConfig} from 'nuxt/app'

export function useSeo(title, description, image) {
    const config = useRuntimeConfig()
    const route = useRoute()
    const trimmedDescription = description ? description.slice(0, 400) : ''
    useHead({
        title: title ? `${title} - Road Price` : 'Road Price',
        meta: [
            {
                name: 'description',
                content: trimmedDescription
            },
            {
                property: 'og:title',
                content: title || ''
            },
            {
                property: 'og:description',
                content: trimmedDescription
            },
            {
                property: 'og:image',
                content: image || ''
            },
            {
                property: 'og:url',
                content: config.public.appUrl + route.fullPath
            },
            {
                property: 'og:type',
                content: 'website'
            }
        ]
    })
}
