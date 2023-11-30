import { useState, useEffect } from 'react';

import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <main className='bg-zinc-900 h-screen m-auto'>
      <div className='container mx-auto'>
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} completeTask={completeTask} clearTasks={clearTasks} />
      </div>
    </main>
  );
};

export default App;
