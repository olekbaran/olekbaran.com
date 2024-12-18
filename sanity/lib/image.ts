import createImageUrlBuilder from "@sanity/image-url"
import { type SanityImageSource } from "@sanity/image-url/lib/types/types"

import { dataset, projectId } from "../env"

const imageBuilder = createImageUrlBuilder({
  projectId,
  dataset,
})

export function urlForImage(source: SanityImageSource) {
  return imageBuilder?.image(source).auto("format").fit("max").url()
}
