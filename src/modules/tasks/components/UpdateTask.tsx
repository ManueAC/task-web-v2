import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Box,
  Checkbox,
  Button,
} from "@material-ui/core";
import { initialTask } from "../tasks-models";
import { Task } from "../task-types";
import { useHistory, useParams } from "react-router-dom";
import { getTaskAction, updateTaskAction } from "../tasks-actions";

export const UpdateTask = () => {
  const [task, setTask] = useState<Task>(initialTask);

  const history = useHistory();
  const param: { id: string } = useParams();

  const setdata = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newTask = { ...task, [e.target.name]: e.target.value };
    setTask(newTask);
  };

  const backHome = () => {
    history.push("/");
  };

  const onSubmitTask = (): void => {
    updateTaskAction(param.id, task, backHome);
  };

  useEffect(() => {
    getTaskAction(param.id, setTask);
  }, [param]);

  return (
    <Grid container spacing={2} style={{ marginTop: "20px" }}>
      <Grid item md={2} />
      <Grid item md={8}>
        <Card>
          <CardContent>
            <Typography
              onClick={() => history.push("/")}
              style={{
                textAlign: "center",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Tasks registers
            </Typography>

            <br />
            <br />

            <Typography
              style={{
                textAlign: "center",
                fontWeight: 600,
              }}
            >
              Edit the task
            </Typography>
            <br />

            <Grid container spacing={2}>
              <Grid item md={3}>
                <TextField
                  label="Description"
                  name="description"
                  onChange={setdata}
                  value={task.description}
                />
              </Grid>

              <Grid item md={3}>
                <TextField
                  label="assignation"
                  name="assigned"
                  onChange={setdata}
                  value={task.assigned}
                />
              </Grid>

              <Grid item md={2}>
                <TextField
                  helperText="From"
                  name="from"
                  type="date"
                  onChange={setdata}
                  value={task.from}
                />
              </Grid>

              <Grid item md={2}>
                <TextField
                  helperText="To"
                  name="to"
                  type="date"
                  onChange={setdata}
                  value={task.to}
                />
              </Grid>

              <Grid item md={2}>
                <Box display="flex" alignItems="center">
                  <Typography>finished</Typography>
                  <Checkbox
                    checked={task.finished}
                    onChange={() =>
                      setTask({ ...task, finished: !task.finished })
                    }
                  />
                </Box>
              </Grid>

              <Grid item md={2} />

              <Grid item md={8}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={onSubmitTask}
                >
                  save
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={2} />
    </Grid>
  );
};
