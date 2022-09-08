import React from 'react'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <Typography variant='h2'>About this App</Typography>
      <Typography>This bookstore is a fullstack application made with MERN stack, I have used the MVC method as well as react router. I have implemented my own API using MongoDB and tested it using Postman. How to use this application: Clicking on the logo in the navigation bar will take you to the home page where there is a button that will take you to the index of all items. The 'Add Book' link in the nav will let you add any sample book of your choice to the index of items. The 'All Books' link shows you the index of all items available on the site. Each Item has a functional Update and Delete button. As you will see this app uses restful routes and CRUD actions. </Typography>
    </Box>
  )
}

export default About