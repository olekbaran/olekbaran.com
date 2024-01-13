import createImageUrlBuilder from "@sanity/image-url"
import { type Image } from "sanity"

import { dataset, projectId } from "../env"

const imageBuilder = createImageUrlBuilder({
  projectId,
  dataset,
})

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto("format").fit("max").url()
}
