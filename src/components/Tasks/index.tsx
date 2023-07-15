import styles from './tasks.module.css';
import Task from '../Task/index';
import { TaskProps } from '../../App';

interface Tasks {
    tasks: TaskProps[];
    onComplete: (taskId: string) => void;
    onDelete: (taskId: string) => void;
}

const Tasks: React.FC<Tasks> = ({tasks, onComplete, onDelete}) => {
    const tasksQuantity = tasks.length;
    const completedTasksLength = tasks.filter(task => task.isCompleted).length;

    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Created tasks</p>
                    <span>{tasksQuantity}</span>
                </div>
                <div>
                    <p className={styles.textPurple}>Completed</p>
                    <span>{completedTasksLength} of {tasksQuantity}</span>
                </div>
            </header>
            <div className={styles.list}>
                {tasks.map(task => {
                    return <Task key={task.id} task={task} onComplete={onComplete} onDelete={onDelete}/>
                })}
            </div>
        </section>
    )
}

export default Tasks;