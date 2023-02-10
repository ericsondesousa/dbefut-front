const routes = [
    {
        path: "/dashboard",
        name: "dashboard",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/DashboardView.vue"),
    },
]

routes.forEach(route => {
    Object.assign(route, { meta: { auth: true } })
});

export default routes