import { Box } from '@mui/material';
import Bar from '../components/topbar'
import Editor from '../pages/texteditor'

const Temp = () => {
    return (
        <>
            <Box sx={{
                p: "20px",
            }}>
                {/* <Bar /> */}
                <Editor />
            </Box>
        </>
    )
}
export default Temp;