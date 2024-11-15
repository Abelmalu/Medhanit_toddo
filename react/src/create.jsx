import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const CreateTask = () => {

    
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const navigate = useNavigate()


    const handleSubmit = (e)=>{
        e.preventDefault();
        const task = {
            title,description
        }
        console.log(task)
        fetch('http://127.0.0.1:8000/api/create/todo',{
            method:'POST',
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(task)
        }).then(response => {
                if (!response.ok) {
                    throw new Error('Failed to create task');
                }
                return response.json();
            })
            .then(data => {
                console.log('New task added:', data);


                navigate('/')
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });

    }


    return (
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto mt-10">
  <h2 className="text-3xl font-semibold text-center mb-6">Create a New Task</h2>
  <form onSubmit={handleSubmit} className="space-y-6">
    <div className="mb-4">
      <label htmlFor="title" className="block text-sm font-medium mb-2">
        Title:
      </label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full px-4 py-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 bg-gray-700 text-white placeholder-gray-400"
        placeholder="Enter task title"
         pattern="[a-zA-Z]+"
      />
    </div>
    <div className="mb-6">
      <label htmlFor="description" className="block text-sm font-medium mb-2">
        Description:
      </label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}

        className="w-full h-32 px-4 py-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 bg-gray-700 text-white placeholder-gray-400"
        placeholder="Enter task description"
         pattern="[a-zA-Z]+"
      ></textarea>
    </div>
    <div className="flex justify-center">
      <button
        type="submit"
        className="px-6 py-3 rounded-md bg-green-500 hover:bg-green-700 text-white font-semibold shadow-md transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none"
      >
        Submit
      </button>
    </div>
  </form>
</div>





     );
}

export default CreateTask;
