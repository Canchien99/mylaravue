const authRouter = [
    {
        path: '/login',
        component: () => import('../components/auth/Login'),
        meta: {title: 'login'},
        name: 'login',
    },
    {
        path: '/register',
        component: () => import('../components/auth/Register'),
        name: 'login',
    }
]

export default authRouter