import UnauthenticatedLayout from "./unauthenticated"
import AuthenticatedLayout from "./authenticated"

const pageRoutes = [
    // unAuthenticated
    {
        pageName: "/",
        Layout: UnauthenticatedLayout
    },
    {
        pageName: "/auth",
        Layout: UnauthenticatedLayout
    },
    {
        pageName: "/auth/verify",
        Layout: UnauthenticatedLayout
    },
    // Authenticated
    {
        pageName: "/dashboard",
        Layout: AuthenticatedLayout
    }
]

export default pageRoutes