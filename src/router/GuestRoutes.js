const routes = [
    {
        path: "/login",
        name: "login",
        meta: { layout: 'LayoutGuest' },
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
    }
]

export default routes