import { Toolbar } from '@material-ui/core';
import { styled } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

export const ToolbarContainer = styled(Toolbar)({
    display: "flex",
    justifyContent: "center"
})

export const ToolbarItem = styled(Typography)({
    cursor: "pointer",
    margin: "0 5vw"
});