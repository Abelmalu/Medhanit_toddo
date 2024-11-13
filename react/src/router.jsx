import SignUp from './views/signup';
import NotFound from './views/notFound';
import Login from './views/login';
import Todo from './views/Todo';
import {createBrowserRouter,Navigate} from 'react-router-dom'
import DefaultLayout from './components/DefaultLayout';
import GuestLayout from './components/GuestLayout';
import Dashboard from './views/Dashboard';



const router = createBrowserRouter( [

    {

        path:'/',
        element:<DefaultLayout/>,
        children:[
                    {
        path:'/',
    element:<Navigate to="/todo"/>

},
             {
        path:'/todo',
    element:<Todo/>

},
             {
        path:'/dashboard',
    element:<Dashboard/>

},

        ]
    },

    // Guest layout starts here
    {

        path:'/',
        element:<GuestLayout/>,
        children:[
               {
        path:'/login',
    element:<Login/>

},
    {
        path:'/SignUP',
    element:<SignUp/>

},

        ]
    },




{
    path:'*',
    element:<NotFound/>
},


]);




export default router;
