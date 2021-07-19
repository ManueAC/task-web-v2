import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  MenuItem,
  Box,
  Checkbox,
  Button,
} from "@material-ui/core";
import { initialTask } from "../tasks-models";
import { Task } from "../task-types";
import { useHistory } from "react-router-dom";
import { createTaskAction } from "../tasks-actions";

export const NewTask = () => {
  const [task, setTask] = useState<Task>(initialTask);

  const history = useHistory();

  const setdata = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newTask = { ...task, [e.target.name]: e.target.value };
    setTask(newTask);
  };

  const backHome = () => {
    history.push("/");
  };

  const onSubmitTask = (): void => {
    createTaskAction(task, backHome);
  };

  return (
    <Grid container spacing={2} style={{ marginTop: "20px" }}>
      <Grid item md={2} />
      <Grid item md={8}>
        <Card>
          <CardContent>
            <Typography
              onClick={backHome}
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
              Create a task
            </Typography>
            <br />

            <Grid container spacing={2}>
              <Grid item md={3}>
                <TextField
                  label="Description"
                  name="description"
                  onChange={setdata}
                />
              </Grid>

              <Grid item md={3}>
                <TextField
                  select
                  label="assignation"
                  name="assigned"
                  onChange={setdata}
                >
                  <MenuItem value="joc">joc</MenuItem>
                </TextField>
              </Grid>

              <Grid item md={2}>
                <TextField
                  helperText="From"
                  name="from"
                  type="date"
                  onChange={setdata}
                />
              </Grid>

              <Grid item md={2}>
                <TextField
                  helperText="To"
                  name="to"
                  type="date"
                  onChange={setdata}
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
