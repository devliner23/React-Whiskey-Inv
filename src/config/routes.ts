import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home",
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard",
    },
    {
      path: "/profile",
      component: Profile,
      name: "Profile",
    }
];

export default routes