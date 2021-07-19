import { gql } from "@apollo/client";

export const FRAGMENT_TASK = gql`
  fragment task on TaskType {
    description
    assigned
    finished
    from
    to
    _id
  }
`;

export const GET_TASKS_QUERY = gql`
  ${FRAGMENT_TASK}
  query getTasks {
    getTasks {
      ...task
    }
  }
`;

export const GET_TASK_QUERY = gql`
  ${FRAGMENT_TASK}
  query getTask($taskId: String!) {
    getTask(id: $taskId) {
      ...task
    }
  }
`;

export const CREATE_TASK_MUTATION = gql`
  ${FRAGMENT_TASK}
  mutation createTask($taskInput: TaskInput!) {
    createTask(input: $taskInput) {
      ...task
    }
  }
`;

export const DELETE_TASK_MUTATION = gql`
  ${FRAGMENT_TASK}
  mutation deleteTask($taskId: String!){
    deleteTask(id: $taskId){
      ...task
    }
  }
`;

export const UPDATE_TASK_MUTATION = gql`
  ${FRAGMENT_TASK}
  mutation updateTask($taskId: String!, $taskInput: TaskInput!){
    updateTask(id:$taskId,input:$taskInput){
      ...task
    }
  }
`;
