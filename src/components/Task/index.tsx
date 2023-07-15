import styles from './task.module.css';
import trashIcon from '../../assets/trash.svg';
import checkIcon from '../../assets/check.svg';
import { TaskProps } from '../../App';

interface TaskLocalProps {
    task: TaskProps;
    onComplete: (taskId: string) => void;
    onDelete: (taskId: string) => void;
}

const Task: React.FC<TaskLocalProps> = ({task, onComplete, onDelete}) => {
    const {id, title, isCompleted} = task;
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer} onClick={() => onComplete(id)}>
                {isCompleted ? <img src={checkIcon} alt="check" /> : <div/>}
            </button>
            <p className={isCompleted ? styles.textCompleted : ''}>{title}</p>
            <button className={styles.deleteButton} onClick={() => onDelete(id)}>
                <img src={trashIcon} alt="trash" />
            </button>
        </div>
    )
}

export default Task;