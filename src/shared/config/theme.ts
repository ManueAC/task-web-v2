import { createMuiTheme } from '@material-ui/core/styles';
import * as COLORS from './colors';


export const theme = createMuiTheme({
  palette: {
    primary: {
      main: COLORS.PRIMARY_MAIN,
    },
    secondary: {
      main: COLORS.SECONDARY_MAIN,
    },
    error: {
      main: COLORS.ERROR_MAIN,
    },
    common: {
      black: COLORS.COMMON_BLACK,
    },
  },
  props: {
    MuiButton: {
      variant: 'contained',
    },
    MuiTextField: {
      variant: 'outlined',
      size: 'small',
      fullWidth: true,
    },
    MuiDialog: {
      fullWidth: true,
    },
    MuiCheckbox: {
      color: 'primary',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
      outlined: {
        borderWidth: '2px !important',
      },
    },
    MuiTableCell: {
      head: {
        fontWeight: 'bold',
        fontSize: 20,
      },
      body: {
        fontSize: 16,
      },
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Sans-serif'].join(','),
  },
});
