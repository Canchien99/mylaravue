const frontendRouter = [
    {
        path: '',
        component: () => import('../components/frontend/Layout'),
        children: [
            {
                path: '',
                component: () => import('../components/frontend/page/Home'),
                name: 'home',
            }
        ]
    },
]
export default frontendRouter