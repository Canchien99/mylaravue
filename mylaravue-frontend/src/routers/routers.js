import routerAuth from './routerAuth'
import routerBackend from './routerBackend'
import routerFrontend from './routerFrontend'

const routes = [
    ...routerAuth,
    ...routerBackend,
    ...routerFrontend
];
export default routes