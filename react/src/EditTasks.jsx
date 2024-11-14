import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"

const EditTask = () => {

    const {id} = useParams()
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const create = ()=>{






    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const task = {
            title,description
        }
        console.log(task)
        fetch(`http://127.0.0.1:8000/api/update/todo/${id}`,{
            method:'PUT',
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(task)
        }).then(response => {
                if (!response.ok) {
                    throw new Error('Failed to UPDATE the task');
                }
                return response.json(); // Parse the JSON response if successful
            })
            .then(data => {
                console.log('task updated:', data);
                setTitle(data.title)
                setDescription(data.description)
                // Reset form or display a success message, etc.
            })
            .catch(error => {
                console.error(error);
                setError(error.message); // Set error message if the request fails
            });

    }


    return (
        <div>
            <h2>Update a  Task</h2>

<h1>{id}</h1>
    <form onSubmit={handleSubmit}>

        <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} />
        <textarea name="" id="" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea> <br />
        <button>Update</button>
    </form>



        </div>



     );
}

export default EditTask;
