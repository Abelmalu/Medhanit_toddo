import { Outlet,Link } from "react-router-dom";
import { useStateContext } from "../views/contexts/ContextProvider";
import {Navigate} from 'react-router-dom'

export default function DefaultLayout(){

const {user,token} = useStateContext()

 if (!token) {
    return <Navigate to="/login"/>
  }
    return(
        <div id="defaultLayout">

            <aside>
                <Link to="/dashboard">Dasboard</Link>
                <Link to="/todo">Todos</Link>
            </aside>
                <div className="content">
                    <header>
                         <div>header</div>
                    <div>user info</div>

            </header>

                </div>
                <main>
                    <Outlet/>

                </main>

        </div>




    );
}
