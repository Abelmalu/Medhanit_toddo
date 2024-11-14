import { useState } from 'react'



function App() {
    // let name = 'mario'
    const [title,setTitle] = useState('mario')
    const [description,setDescription] = useState('do launary')
    const create = ()=>{






    }

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
                return response.json(); // Parse the JSON response if successful
            })
            .then(data => {
                console.log('New task added:', data);
                // Reset form or display a success message, etc.
            })
            .catch(error => {
                console.error(error);
                setError(error.message); // Set error message if the request fails
            });

    }




  return (
   <div className="App">
    <h3>Add Taks</h3>

    <form onSubmit={handleSubmit}>

        <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} />
        <textarea name="" id="" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea> <br />
        <button>Submit</button>
    </form>



   </div>
  )
}

export default App
