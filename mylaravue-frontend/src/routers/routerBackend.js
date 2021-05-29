const backendRouter = [
    {
        path: '/admin',
        component: () => import('../components/backend/Layout'),
        name: 'admin',
        children: [
            {
                path: 'list',
                component: () => import('../components/backend/posts/List'),
                name: 'listpost',
            },
            {
                path: 'create',
                component: () => import('../components/backend/posts/Create'),
                name: 'createpost',
            },
            {
                path: 'dashboard',
                component: () => import('../components/backend/Dashboard'),
                name: 'dashboard',
            },
        ],
        beforeEnter(to, from, next) {
            if (localStorage.getItem("token") == null) {
                next("/login");
            } else {
                next();
            }    
        },
    },
]
export default backendRouter