import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateTask from './create'

import ListTask from './ListTask';
import Navbar from './Navigation';
import EditTask from './EditTasks';



function App() {



  return (

    <Router>
         <div className="App">
            <Navbar/>
            <div className="content">

                <Routes>
                    <Route path="/" element={<ListTask/>}></Route>
                     <Route path="/add" element={<CreateTask />} />
                     <Route path="/edit/:id" element={<EditTask />} />
                     



                </Routes>
            </div>



   </div>


    </Router>

  )
}

export default App
