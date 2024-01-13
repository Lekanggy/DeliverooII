import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
    projectId: '5ua6m7z0',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-01-13'
})

const builder = imageUrlBuilder(client)

export const urlFor = (source)=> builder.image(source)

export default client