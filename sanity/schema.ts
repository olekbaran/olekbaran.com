import { type SchemaTypeDefinition } from "sanity"

import { author } from "./schemas/author"
import { blockContent } from "./schemas/blockContent"
import { category } from "./schemas/category"
import { post } from "./schemas/post"

interface Schema {
  types: SchemaTypeDefinition[]
}

export const schema: Schema = {
  types: [post, author, category, blockContent],
}
