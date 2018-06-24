import Lobby from '@/components/Lobby'
import Login from '@/components/LoginView'

const routers = [
    {
        path: '/',
        component: Lobby,
    },
    {
        path: '/Lobby',
        component: Lobby,
    },
    {
        path : '/login',
        component : Login,
        // children:[
        //     {
        //         path: 'login',
        //         component: Login
        //     },
        // ]
    }
]

export default routers
