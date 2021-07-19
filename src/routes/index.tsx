import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Layout } from "../shared/layout/Layout";
import { useAuth0 } from "@auth0/auth0-react";
import { TaskView } from "../modules/tasks/TaskView";
import { NewTask } from "../modules/tasks/components/NewTask";
import { UpdateTask } from "../modules/tasks/components/UpdateTask";

export const Routes: React.FC = () => {
  const { logout } = useAuth0();
  return (
    <Switch>
      <Route exact path="/404" component={() => <p>page not found</p>} />
      <Route
        path="/auth/callback"
        component={() => {
          return <button onClick={() => logout()}>Log Out</button>;
        }}
      />

      <Switch>
        <Layout>
          <Switch>
            <Route exact path="/" component={() => <Redirect to="/home" />} />
            <Route exact path="/home" component={TaskView} />
            <Route exact path="/new-task" component={NewTask} />
            <Route exact path="/tasks/:id" component={UpdateTask} />

            <Redirect to="/404" />
          </Switch>
        </Layout>
      </Switch>

      <Redirect to="/404" />
    </Switch>
  );
};

export default Routes;
