type Base = {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
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
