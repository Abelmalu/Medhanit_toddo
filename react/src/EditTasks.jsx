import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

const EditTask = () => {

    const {id} = useParams()
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
       const navigate = useNavigate()


    const handleSubmit = (e)=>{
        e.preventDefault();
        const task = {
            title,description
        }

        fetch(`http://127.0.0.1:8000/api/update/todo/${id}`,{
            method:'PUT',
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(task)
        }).then(response => {
                if (!response.ok) {
                    throw new Error('Failed to UPDATE the task');
                }
                return response.json();
            })
            .then(data => {
                console.log('task updated:', data);
                setTitle(data.title)
                setDescription(data.description)
                navigate('/')

            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });

    }


    return (
        <div class="bg-white shadow-lg rounded-lg p-8 max-w-xl mx-auto mt-10">
  <h2 class="text-3xl font-semibold text-center text-gray-800 mb-6">Update the Task</h2>

  <form onSubmit={handleSubmit} class="space-y-6">

    <div class="flex flex-col space-y-2">
      <label htmlFor="title" class="text-gray-700 font-semibold">Task Title</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        class="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        placeholder="Enter task title"
        required
         pattern="[a-zA-Z]+"
      />
    </div>

    <div class="flex flex-col space-y-2">
      <label htmlFor="description" class="text-gray-700 font-semibold">Task Description</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        class="border border-gray-300 rounded-md px-4 py-3 w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        placeholder="Enter task description"
         pattern="[a-zA-Z]+"

      ></textarea>
    </div>

    <div class="flex justify-center mt-6">
      <button
        type="submit"
        class="px-6 py-3 text-white bg-blue-500 hover:bg-blue-700 rounded-md font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
      >
        Update
      </button>
    </div>
  </form>
</div>



     );
}

export default EditTask;
