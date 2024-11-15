import { useEffect, useState  } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const ListTask = () => {
    const [tasks, setTask]=useState(null)
    const [error, setError]=useState(null)
    const [isLoading,setLoading] = useState(true)
    const [reload, setReload] = useState(null)
    const navigate = useNavigate();

    useEffect(()=>{

        fetch('http://127.0.0.1:8000/api/todo').then((res)=>{
            if(!res.ok){
                throw Error('Could not get the data')

            }

            return res.json();
        })
        .then((data)=>{
            console.log(data)
            setTask(data);
             setError(null)
             setLoading(false)


        },[reload]).catch(err=>{
            console.log(err.message)
            setError(err.message)
            setLoading(false)
        })



    },[reload]);

    const handleClick = (id)=>{

        setReload('reload');
        fetch(`http://127.0.0.1:8000/api/delete/todo/${id}`,{

            method:'DELETE'

        }).then((res)=>{
            return res.json();

        }).then((data)=>{
            console.log(data)
            setTask(data)
        })



    }
    const changeStatus = (id)=>{

        fetch(`http://127.0.0.1:8000/api/changeStatus/${id}`,{
            method:'GET'
        }).then((res)=>{
            return res.json();

        }).then((data)=>{
            console.log(data)
            setTask(data)
        })

    }


    return (
   <div class="list bg-gray-100 shadow-md rounded-lg px-6 py-8 max-w-4xl mx-auto">
  <h1 class="text-3xl font-semibold mb-6 text-center text-gray-800">Your tasks</h1>
  <div class="flex flex-col sm:flex-row justify-between items-center mb-6">
    <h3 class="text-xl font-semibold text-gray-700">Filter tasks</h3>
    <select
      name=""
      id=""
      onChange={(e) => {
        console.log(e.target.value)

        const id = e.target.value;

        fetch(`http://127.0.0.1:8000/api/search/todo/${id}`,{
          method:'GET'
        }).then((res)=>{
          return res.json();
        }).then((data)=>{
          console.log(data)
          setTask(data)
        })
      }}
      class="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-full sm:w-auto mb-4 sm:mb-0"
    >
      <option value="">Filter</option>
      <option value={0}>Pending</option>
      <option value={1}>Completed</option>
    </select>
  </div>

  {error && <div class="text-red-500 mb-4 text-center">{error}</div>}
  {isLoading && <p class="text-gray-500 mb-4 text-center">Loading...</p>}

  {tasks && (
    <ul class="space-y-6">
      {tasks.map((task) => (
        <li key={task.id} class="bg-white shadow-lg rounded-lg p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div class="flex flex-col sm:flex-row sm:space-x-6 items-start sm:items-center w-full">
            <div class="flex flex-col sm:w-1/2 space-y-2">
              <h2 class="text-xl font-bold text-gray-800">{task.title}</h2>
              <p class="text-gray-600">{task.description}</p>
              <div class="flex items-center text-sm mt-3 sm:mt-0">
                {task.status === 1 ? (
                  <h5 class="text-green-500 mr-2">Completed</h5>
                ) : (
                  <h5 class="text-orange-500 mr-2">Pending</h5>
                )}
              </div>
            </div>
            <div class="flex space-x-4 mt-4 sm:mt-0">
              <Link to={`/edit/${task.id}`} class="text-blue-500 hover:underline">
                Edit
              </Link>
            </div>
          </div>
          <div class="flex space-x-4 mt-4 sm:mt-0">
             {!task.status && (
              <button
                onClick={() => changeStatus(task.id)}
                class="px-4 py-2 text-white bg-green-500 hover:bg-green-700 rounded-md font-semibold shadow-md"
              >
                Complete
              </button>
            )}
            <button
              onClick={() => handleClick(task.id)}
              class="px-4 py-2 text-white bg-red-500 hover:bg-red-700 rounded-md font-semibold shadow-md"
            >
              Delete
            </button>

          </div>
        </li>
      ))}
    </ul>
  )}
</div>



      );
}

export default ListTask;
