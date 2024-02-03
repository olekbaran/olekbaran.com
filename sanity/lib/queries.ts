import { groq } from "next-sanity"

export const ALL_PROJECTS_QUERY = groq`*[_type == "project" && defined(slug)] | order(date desc)`

export const SLICED_PROJECTS_QUERY = groq`*[_type == "project" && defined(slug)] | order(date desc) [0...$limit]`
