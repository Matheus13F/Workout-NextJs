import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import { FiTrash, FiCheckSquare } from "react-icons/fi";
import { ChallengesContext } from "../context/ChallengesContext";
import styles from "../styles/components/Tasklist.module.scss";

export function TaskList() {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const { tasks, setTasks } = useContext(ChallengesContext);

  function handleCreateNewTask() {
    if (!newTaskTitle) return;

    const newTask = {
      id: Math.random(),
      title: newTaskTitle,
      isComplete: false,
    };

    setTasks((oldTask) => [...oldTask, newTask]);
    setNewTaskTitle("");
  }

  function handleToggleTaskCompletion(id: number) {
    const filteredTask = tasks.map((taskItems) =>
      taskItems.id === id
        ? {
            ...taskItems,
            isComplete: !taskItems.isComplete,
          }
        : taskItems
    );

    setTasks(filteredTask);
  }

  function handleRemoveTask(id: number) {
    const removedTask = tasks.filter((taskItems) => taskItems.id !== id);
    setTasks(removedTask);
  }

  return (
    <div className={styles.taskListContainer}>
      <header>
        <h2>Minhas Tarefas</h2>

        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Nova Tarefa"
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
            maxLength={25}
          />
          <button
            type="submit"
            data-testid="add-task-button"
            onClick={handleCreateNewTask}
          >
            <FiCheckSquare size={16} color="#fff" />
          </button>
          {newTaskTitle.length > 24 && (
            <span className={styles.maxCaracter}>Maximo 25 caracteres.</span>
          )}
        </div>
      </header>

      {tasks.length !== 0 ? (
        <main className={styles.contentContainer}>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <div data-testid="task">
                  <label className={styles.checkboxContainer}>
                    <input
                      type="checkbox"
                      readOnly
                      checked={task.isComplete}
                      onClick={() => handleToggleTaskCompletion(task.id)}
                    />
                    <span className={styles.checkmark}></span>
                  </label>

                  <p className={task.isComplete ? styles.completed : ""}>
                    {task.title}
                  </p>
                </div>

                <button
                  type="button"
                  data-testid="remove-task-button"
                  onClick={() => handleRemoveTask(task.id)}
                >
                  <FiTrash size={16} />
                </button>
              </li>
            ))}
          </ul>
        </main>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong> Crie a sua lista de tarefas </strong>
          <p>Adicione um novo item</p>
        </div>
      )}
    </div>
  );
}
