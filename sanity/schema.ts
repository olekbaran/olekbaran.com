import { type SchemaTypeDefinition } from "sanity"

import { blockContent } from "./schemas/block-content"
import { company } from "./schemas/company"
import { project } from "./schemas/project"
import { technology } from "./schemas/technology"
import { workExperience } from "./schemas/work-experience"

interface Schema {
  types: SchemaTypeDefinition[]
}

export const schema: Schema = {
  types: [company, project, technology, workExperience, blockContent],
}
