import { useState } from 'react';

const TaskForm = ({ addTask }) => {
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask.trim() !== '') {
            addTask(newTask);
            setNewTask('');
        }
    };

    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Nueva tarea"
                />
                <button type="submit" className='bg-green-500 m-2 rounded-md text-zinc-50 hover:bg-green-300 px-2'>Agregar</button>
            </form>
        </div>
    );
};

export default TaskForm;
