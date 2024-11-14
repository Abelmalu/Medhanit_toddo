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
       <div className="list">
      <h1>Your tasks</h1>
        <h3>Filter tasks</h3>
        <select name="" id="" onChange={(e)=>{

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

        }}>
            <option value="">filter</option>
            <option value={0}>pending</option>
            <option value={1}>completed</option>
        </select>

      {error && <div>{error}</div>}
      {isLoading && <p> Loading....</p>}

      {tasks && (
        tasks.map((task) => (
          <div key={task.id}>

            <h2>{task.title}</h2>
            <p>{task.description}</p>

            {task.status === 1 ? (
              <h5>completed</h5>
            ) : (
              <h5>pending</h5>
            )}
            <Link to={`/edit/${task.id}`}>edit</Link>
            <button onClick={()=>handleClick(task.id)}>Delete</button>

            {!task.status &&<button onClick={()=>changeStatus(task.id)}>complete</button>}




            <br></br>

            {/* <Lin to=""k>edit</Lin> */}
          </div>
        ))
      ) }
    </div>
      );
}

export default ListTask;
