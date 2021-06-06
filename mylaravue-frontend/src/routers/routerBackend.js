const backendRouter = [
    {
        path: '/admin',
        component: () => import('../components/backend/Layout'),
        name: 'admin',
        children: [
            {
                path: 'list-posts',
                component: () => import('../components/backend/posts/List'),
                name: 'listPosts',
            },
            {
                path: 'create-post',
                component: () => import('../components/backend/posts/Create'),
                name: 'createPost',
            },
            {
                path: 'edit-post/:id',
                component: () => import('../components/backend/posts/Edit'),
                name: 'editPost',
            },
            {
                path: 'dashboard',
                component: () => import('../components/backend/Dashboard'),
                name: 'dashboard',
            },
            {
                path: 'list-categories',
                component: () => import('../components/backend/categories/List'),
                name: 'listCategories',
            },
            {
                path: 'create-category',
                component: () => import('../components/backend/categories/Create'),
                name: 'createCategory',
            },
            {
                path: 'edit-category/:id',
                component: () => import('../components/backend/categories/Edit'),
                name: 'editCategory',
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