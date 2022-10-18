const Mostrar = () => import('./Pages/Mostrar.vue')
const Crear = () => import('./Pages/Crear.vue')
const Editar = () => import('./Pages/Editar.vue')

export const routes = [
    {
        name: 'mostrarBlogs',
        path: '/Blogs',
        component: Mostrar
    },
    {
        name: 'crearBlog',
        path: '/crear',
        component: Crear
    },
    {
        name: 'editarBlog',
        path: '/editar/:id',
        component: Editar
    },
]