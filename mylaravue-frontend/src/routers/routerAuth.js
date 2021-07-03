const authRouter = [
    {
        path: '/login',
        component: () => import('../components/auth/Login'),
        meta: {title: 'Login'},
        name: 'login',
    },
    {
        path: '/register',
        component: () => import('../components/auth/Register'),
        name: 'register',
        meta: {title: 'Register'},
    }
]

export default authRouter