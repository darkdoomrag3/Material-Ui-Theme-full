import { createMuiTheme } from '@material-ui/core/styles';


const acrBlue = "#0b79B9"
const arcOrange = "#FFBA60"

export default createMuiTheme({
    palette: {
        common: {
            acrBlue: `${acrBlue}`,
            arcOrange: `${arcOrange}`
        },
        primary: {
            main: `${acrBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        }
    },
    typography: {
        tab: {
            fontFamily: 'Railway',
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '1rem',
        },
        estimate: {
            fontFamily: 'pacifico',
            fontSize: "1rem",
            textTransform: 'none',
            color: 'white'
        }
    }
})