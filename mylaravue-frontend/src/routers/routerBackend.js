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
                meta: {title: 'List Post'},
            },
            {
                path: 'create-post',
                component: () => import('../components/backend/posts/Create'),
                name: 'createPost',
                meta: {title: 'Create Post'},
            },
            {
                path: 'edit-post/:id',
                component: () => import('../components/backend/posts/Edit'),
                name: 'editPost',
                meta: {title: 'Update Post'},
            },
            {
                path: 'dashboard',
                component: () => import('../components/backend/Dashboard'),
                name: 'dashboard',
                meta: {title: 'Dashboard'},
            },
            {
                path: 'list-categories',
                component: () => import('../components/backend/categories/List'),
                name: 'listCategories',
                meta: {title: 'List Categories'},
            },
            {
                path: 'create-category',
                component: () => import('../components/backend/categories/Create'),
                name: 'createCategory',
                meta: {title: 'Create Category'},
            },
            {
                path: 'edit-category/:id',
                component: () => import('../components/backend/categories/Edit'),
                name: 'editCategory',
                meta: {title: 'Update Category'},
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