import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const routes = [
    {
        path: "/",
        name: "home",
        component: () => import( /* webpackChunkName: "index" */ "../pages/index.vue").then(m => m.default)
    },
    {
        path: "/about",
        name: "about",
        component: () => import( /* webpackChunkName: "about" */ "../pages/about.vue").then(m => m.default)
    },
    {
        path: "/users",
        children: [{
                path: "/",
                name: "users",
                component: () => import( /* webpackChunkName: "users_index" */ "../pages/users/index.vue").then(m => m.default)
            },
            {
                path: ":uid",
                component: () => import( /* webpackChunkName: "users_uid" */ "../pages/users/_uid.vue").then(m => m.default)
            }
        ],
        component: () => import( /* webpackChunkName: "users" */ "../pages/users.vue").then(m => m.default)
    },
    {
        path: "*",
        redirect: "/"
    }
];

export function createRouter() {
    return new VueRouter({
        mode: "history",
        routes
    });
}