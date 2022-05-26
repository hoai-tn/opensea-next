import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'xp38pcf6',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skogJCjawLiBKHyWe8CKUZfr7cMlrXcc9w2PeCKhdvxZc9J0FEvyPtjSQyAPL0Bf47SeMTivKM2nAbDaCocXLUCj9151jV0h68NVhvR2EVROSKVWYuu1zIVv4JIrEFw83bzSdPpctu7TkJ1OVD563c3UWPCuUv1nnTX146tlrbpx97ixKMhu', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true,
})
