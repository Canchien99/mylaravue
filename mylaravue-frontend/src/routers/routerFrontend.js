const frontendRouter = [
    {
        path: '',
        component: () => import('../components/frontend/Layout'),
        name: 'fe',
        meta: {title: 'home'},
        children: [
      
        ]
    },
]
export default frontendRouter