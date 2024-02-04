type Base = {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
}

export interface Company extends Base {
  name: string
  website?: string
}

export interface Project extends Base {
  title: string
  slug: Slug
  description: string
  industry: string
  date: string
  isOpenSourceContribution: boolean
  repository?: string
  demo?: string
  technologies: string[]
  mainImage: Image
  images: Image[]
  overview: Block[]
}

export interface Technology extends Base {
  name: string
}

export interface WorkExperience extends Base {
  company: Company
  position: string
  startDate: string
  endDate?: string
}

interface Image {
  _type: "image"
  asset: Reference
}

interface Reference {
  _type: "reference"
  _ref: string
}

interface Slug {
  _type: "slug"
  current: string
}

interface Block {
  _type: "block"
  _key: string
  children: Span[]
  markDefs: any[]
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote"
}

interface Span {
  _type: "span"
  _key: string
  marks: string[]
  text: string
}
