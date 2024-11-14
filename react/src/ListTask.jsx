import { useEffect, useState } from "react";

const ListTask = () => {
    const [tasks, setTask]=useState(null)


    useEffect(()=>{

        fetch('http://127.0.0.1:8000/api/todo').then((res)=>{

            return res.json();
        })
        .then((data)=>{
            console.log(data)
            setTask(data);


        },[])

        console.log('useeffect in action')

    },[]);
    return (
       <div className="list">
      <h1>Your tasks</h1>
      {tasks ? (
        tasks.map((task) => (
          <div key={task.id}> {}
            <h3>{task.title}</h3>
            {task.status === 1 ? (
              <h5>completed</h5>
            ) : (
              <h5>pending</h5>
            )}
          </div>
        ))
      ) : (
        <p>Loading tasks...</p>
      )}
    </div>
      );
}

export default ListTask;
