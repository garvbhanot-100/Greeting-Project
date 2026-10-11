import { useState, useEffect } from "react";

function Dash() {
  useEffect(() => {
    document.title = `DashBoard`;
  }, []);

useEffect(() => {
  const savedTasks = localStorage.getItem("studentTasks");

  if (savedTasks !== null) {
    try {
      const parsedTasks = JSON.parse(savedTasks);

      if (Array.isArray(parsedTasks)) {
        settasks(parsedTasks);
      }
    } catch {
      console.error("Could not load saved routines.");
    }
  }

  setTasksLoaded(true);
}, []);



  const [task, settask] = useState('');
  const [tasks, settasks] = useState([]);
  const [tasksLoaded,setTasksLoaded]=useState(false);

  useEffect(()=>{
    if(tasksLoaded){
        localStorage.setItem("studentTasks",  JSON.stringify(tasks))
    }
},[tasks,tasksLoaded])

  function handleTask() {
    if (task.trim() !== "") {
      settasks((previousTasks) => [...previousTasks, task]);
      settask("");
    }
  }

  function handleDelete(indexToDelete) {
    settasks((previousTasks) =>
      previousTasks.filter((item, index) => index !== indexToDelete),
    );
  }

  return (
    <>
      <div className="Dashboard">
        <h1>Welcome to the Student Routine Hub</h1>
        <p>
          Set your Routine,Built your goals and Achieve them.Apply for Course
          and set your timer Today <br /> No Excuses!
        </p>
      </div>
      <div className="input-task">
        <input
          type="text"
          placeholder="enter your routine"
          value={task}
          onChange={(e) => settask(e.target.value)}
        />

        <button onClick={handleTask}>Add Routine</button>
      </div>

      <div className="task-list">
        {tasks.map((item, index) => (
          <div key={index}>
            <p>{item}</p>

            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Dash;
