

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette:{
        primary:{
            main:"#3338FF",
            contrastText:"#fff"
        },
        secondary:{
            main:"#FF3396",
            contrastText:"#fff"

        },
    },
    typography:{
        fontFamily:"sans-serif",
        fontSize:14,
        fontWeightLight:300,
        fontWeightRegular:400,
        fontWeightMedium:500,

    },
});

export default theme;