import { useEffect, useState } from 'react';
import Header from './components/Header/index';
import Tasks from './components/Tasks/index';

export interface TaskProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

const LOCAL_STORAGE_KEY = 'todo:savedTasks';

const App = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  
  const loadSavedTasks = () => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      const parsedTasks: TaskProps[] = JSON.parse(saved) as TaskProps[];
      setTasksAndSave(parsedTasks);
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, [])

  const setTasksAndSave = (newTasks: TaskProps[]) => {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  const addTask = (taskTitle: string) => {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ]);
  }

  const toggleTaskCompletedById = (taskId: string) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  const deleteTaskById = (taskId: string) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  return (
    <>
      <Header onAddTask={ addTask }/>
      <Tasks
        tasks={ tasks }
        onComplete = {toggleTaskCompletedById}
        onDelete = {deleteTaskById}
      />
    </>
  )
}

export default App
