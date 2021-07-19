import React from "react";
import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    background: theme.palette.background.default,
    height: "100vh",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: 0,
    overflow: "auto",
    background: "white",
  },
}));

export const Layout: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <main className={classes.content}>{children}</main>
    </div>
  );
};
