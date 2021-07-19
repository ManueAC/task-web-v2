import { apolloClient } from "../../shared/api/apollo-client";
import { Task } from "./task-types";
import {
  CREATE_TASK_MUTATION,
  DELETE_TASK_MUTATION,
  GET_TASKS_QUERY,
  GET_TASK_QUERY,
  UPDATE_TASK_MUTATION,
} from "./tasks-querys";

type SetTasks = (tasks: Task[]) => void;
type SetTask = (task: Task) => void;

export const getTaskListAction = async (setTasks: SetTasks): Promise<void> => {
  try {
    const { data } = await apolloClient.query({
      query: GET_TASKS_QUERY,
      fetchPolicy: "network-only",
    });
    setTasks(data.getTasks);
  } catch (err) {
    console.log(err);
  }
};

export const getTaskAction = async (
  taskId: string,
  setTask: SetTask
): Promise<void> => {
  try {
    const { data } = await apolloClient.query({
      query: GET_TASK_QUERY,
      variables: { taskId },
    });
    setTask(data.getTask);
  } catch (err) {
    console.log(err);
  }
};

export const createTaskAction = async (
  taskInput: Task,
  pushHistory: () => void
): Promise<void> => {
  const { assigned, description, from, to, finished } = taskInput;
  const newTask = { assigned, description, from, to, finished };
  try {
    await apolloClient.mutate({
      mutation: CREATE_TASK_MUTATION,
      variables: {
        taskInput: newTask,
      },
    });
    pushHistory();
  } catch (err) {
    console.log(err);
  }
};

export const deleteTaskAction = async (
  taskId: string,
  setTasks: SetTasks
): Promise<void> => {
  try {
    await apolloClient.mutate({
      mutation: DELETE_TASK_MUTATION,
      variables: { taskId },
    });
    getTaskListAction(setTasks);
  } catch (err) {
    console.log(err.message);
  }
};

export const updateTaskAction = async (
  taskId: string,
  taskInput: Task,
  pushHistory: () => void
): Promise<void> => {
  const { assigned, description, from, to, finished } = taskInput;
  const newTask = { assigned, description, from, to, finished };
  try {
    await apolloClient.mutate({
      mutation: UPDATE_TASK_MUTATION,
      variables: { taskId, taskInput: newTask },
    });
    pushHistory();
  } catch (err) {
    console.log(err);
  }
};
