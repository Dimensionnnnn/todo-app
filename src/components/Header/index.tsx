import styles from './header.module.css';
import todoLogo from '../../assets/Logo.svg';
import { useState } from 'react';

interface HeaderProps {
    onAddTask: (taskTitle: string) => void
}

const Header: React.FC<HeaderProps> = ({ onAddTask }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onAddTask(title);
        setTitle('');
    }

    return (
        <header className={styles.header}>
            <img src={todoLogo} alt="logo" />

            <form onSubmit={handleSubmit} className={styles.newTaskForm}>
                <input placeholder='add a new task' type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
                <button>Create</button>
            </form>
        </header>
    )
}

export default Header;