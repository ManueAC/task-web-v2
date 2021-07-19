import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Checkbox,
  Container,
  Table,
  TableHead,
  TableRow,
  TableCell,
  makeStyles,
  TableBody,
  IconButton,
  withStyles,
} from "@material-ui/core";
import { Edit as EditIcon, Delete as DeleteIcon } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { Task } from "./task-types";
import { initialTask } from "./tasks-models";
import { useEffect } from "react";
import { deleteTaskAction, getTaskListAction } from "./tasks-actions";

export const IconButtonDanger = withStyles((theme) => ({
  root: {
    color: theme.palette.error.main,
  },
}))(IconButton);

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    background: "#F4F9FD",
    border: "1px solid #ACC8D6",
    borderRadius: 10,
    paddingBottom: theme.spacing(2),
  },
  optionsButton: {
    position: "absolute",
    top: -15,
    left: -15,
  },
}));

export const TaskView = () => {
  const classes = useStyles();
  const history = useHistory();

  const [tasks, setTasks] = useState<Task[]>([initialTask]);

  useEffect(() => {
    getTaskListAction(setTasks);
  }, []);

  const tablaData = tasks.map((task, i) => {
    return (
      <TableRow key={i}>
        <TableCell align="center">
          <Typography>{task.description}</Typography>
        </TableCell>
        <TableCell align="center">
          <Typography>{task.assigned}</Typography>
        </TableCell>
        <TableCell align="center">
          <Typography>{task.from}</Typography>
        </TableCell>
        <TableCell align="center">
          <Typography>{task.to}</Typography>
        </TableCell>
        <TableCell align="center">
          <Checkbox checked={task.finished} />
        </TableCell>

        <TableCell align="center">
          <Box display="flex" justifyContent="space-between">
            <IconButtonDanger
              size="small"
              onClick={() => {
                if (task._id) deleteTaskAction(task._id,setTasks);
              }}
            >
              <DeleteIcon />
            </IconButtonDanger>

            <IconButton
              size="small"
              onClick={() => {
                if (task._id) history.push(`/tasks/${task._id}`);
              }}
            >
              <EditIcon />
            </IconButton>
          </Box>
        </TableCell>
      </TableRow>
    );
  });

  return (
    <Grid container spacing={2} style={{ marginTop: "20px" }}>
      <Grid item md={2} />
      <Grid item md={8}>
        <Card>
          <CardContent>
            <Box display="flex" justifyContent="space-around">
              <Typography style={{ textAlign: "center", fontWeight: 600 }}>
                Tasks registers
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => history.push("/new-task")}
              >
                New Task
              </Button>
            </Box>
          </CardContent>

          <Container className={classes.container}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Description</TableCell>
                  <TableCell align="center">Assignated</TableCell>
                  <TableCell align="center">From</TableCell>
                  <TableCell align="center">To</TableCell>
                  <TableCell align="center">Finished</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{tablaData}</TableBody>
            </Table>
          </Container>
        </Card>
      </Grid>
      <Grid item md={2} />
    </Grid>
  );
};
