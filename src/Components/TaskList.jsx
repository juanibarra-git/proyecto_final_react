
import TaskItem from './TaskItem';

const TaskList = ({ tasks, completeTask, clearTasks }) => {
    return (
        <div>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} onCompleteTask={completeTask} />
            ))}
            {tasks.length > 0 && (
                <button onClick={clearTasks} className='bg-red-500 p-1 rounded-md hover:bg-red-400 mx-2'>Borrar tareas</button>
            )}
        </div>
    );
};

export default TaskList;
