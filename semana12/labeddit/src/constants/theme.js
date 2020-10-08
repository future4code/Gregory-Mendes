import { createMuiTheme } from '@material-ui/core';
import { primaryColor, secondaryColor } from './colors';

const theme = createMuiTheme({
    pallete: {
        primary: {
            main: primaryColor,
            contrastText: "black"
        },
    
        text: {
            primary: secondaryColor
        }
    }
});

export default theme;
