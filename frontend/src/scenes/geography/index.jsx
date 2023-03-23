import { Box } from '@mui/material'
import Header from '../../components/Header';
import GeographyChart from '../../components/GeographyChart';
import { useTheme } from '@mui/material';
import { tokens } from '../../themes';



const Geo = ()=>
{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <Box m = "20px">
            <Header title = "Geography" subtitle={"Waste management outlets"} />
            <Box height='75vh' border={`1px solid ${colors.grey[100]}`} borderRadius = "4px">
                <GeographyChart/>
            </Box>
        </Box>
    )

}

export default Geo;