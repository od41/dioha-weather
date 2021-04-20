import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Splash from "../views/Splash.vue";
import InputLocation from "../views/InputLocation.vue";

const routes = [
    {
        path: "/",
        name: "Splash",
        component: Splash,
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        props: route => {
            const params = route.params.coords
            const props = params
            return props
        },
    },
    {
        path: "/inputlocation",
        name: "InputLocation",
        component: InputLocation,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;