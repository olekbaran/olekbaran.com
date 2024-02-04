import { groq } from "next-sanity"

export const ALL_PROJECTS_QUERY = groq`
  *[_type == "project" && defined(slug)] {
    ...
  } | order(date desc)
`

export const SLICED_PROJECTS_QUERY = groq`
  *[_type == "project" && defined(slug)] {
    ...
  } | order(date desc) [0...$limit]
`

export const TECHNOLOGIES_QUERY = groq`
  *[_type == "technology"] {
    ...
  } | order(_createdAt asc)
`

export const WORK_EXPERIENCE_QUERY = groq`
  *[_type == "workExperience"] {
    ...,
    company->
  } | order(startDate desc)
`
