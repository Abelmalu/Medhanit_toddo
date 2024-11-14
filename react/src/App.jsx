import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateTask from './create'
import Login from './views/login'



function App() {



  return (

    <Router>
         <div className="App">
            <div className="content">

                <Routes>
                     <Route path="/add" element={<CreateTask />} />
                    


                </Routes>
            </div>



   </div>


    </Router>

  )
}

export default App
