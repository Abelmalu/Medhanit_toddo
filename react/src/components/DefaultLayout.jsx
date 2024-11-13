import { Outlet } from "react-router-dom";
import { useStateContext } from "../views/contexts/ContextProvider";
import {Navigate} from 'react-router-dom'

export default function DefaultLayout(){

const {user,token} = useStateContext()

 if (!token) {
    return <Navigate to="/login"/>
  }
    return(


            <Outlet/>


    );
}
