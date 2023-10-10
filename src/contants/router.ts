export const ROUTES = {
    homepage: '/',
    blog: '/blogs',
}

export const routeTitleMapper = {
    [ROUTES.blog]: 'Blog',
}

export const defaultTitle = 'Default'

export const getRouteTitle = (route: string) => {
    return routeTitleMapper[route] ?? defaultTitle
}
