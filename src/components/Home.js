import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Box display='flex' flexDirection='column' alignItems='center'>
                <Button 
                LinkComponent={Link} 
                to='./books' 
                sx={{marginTop: 15, backgroundColor: '#232F3D'}} 
                variant='contained'>
                    <Typography variant='h3'>
                        View All Books
                    </Typography>
                </Button>
            </Box>
        </div>
    )
}

export default Home;