
const TaskItem = ({ task, onCompleteTask }) => {
    const completeTask = () => {
        onCompleteTask(task.id);
    };

    return (
        <div className="bg-yellow-300 m-2 p-1 rounded-md ">
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.name}
            </span>
            <button onClick={completeTask} className="bg-orange-500 m-2 rounded-md hover:bg-orange-300">
                Completar
            </button>
        </div>
    );
};

export default TaskItem;
