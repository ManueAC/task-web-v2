import { withStyles, Card } from '@material-ui/core';

export const CardGrey = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    boxShadow: '0px 5px 10px #ACC8D626',
  },
}))(Card);
