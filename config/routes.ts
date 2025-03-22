export const routes = {
  home: {
    title: "Home",
    pathname: "/",
  },
  about: {
    title: "About",
    pathname: "/about",
  },
  projects: {
    title: "Projects",
    pathname: "/projects",
  },
  contact: {
    title: "Contact",
    pathname: "/#contact",
  },
}

export const adminRoutes = {
  studio: "/studio",
}

export const apiRoutes = {
  revalidate: {
    studio: "/api/revalidate/studio",
    all: "/api/revalidate/all",
  },
}
