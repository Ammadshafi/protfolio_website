import React from 'react'
import {Grid,Typography,Box} from '@mui/material'
import profileimg from '../../assets/ammad2.png'
import './About.css'
const About = ({refs}) => {
  const Skills=['html','css','javascript','react','bootstrap',"material ui",'tailwind css','typescript','redux','react router','web animation api']
  return (
   
      <Grid container ref={refs} mt={20} className='About ' py={3} display={'flex'} alignItems='center'>
     
        <Grid item xs={12} lg={6} mt={6} data-aos="fade-top" data-aos-duration="1500" px={5}>
          <Typography variant='h2' className='third-color' textTransform={'capitalize'} borderBottom='solid' borderColor={'red'} paddingY={3}>
            about me
          </Typography>
          <Typography variant={'h5'} color='white' textTransform={'capitalize'} mt={5}>
            i am turk muhammad ammad living in karachi pakistan.i am 17 year old. i am metric pass student. I complete metric in naveed public
            sec school. i am a react developer i learn this skill from panacloud bootcamp 2020. I am searching jobs in karachi
            to inhance my skills level. i wish to work in panacloud because that was one of the best platform of learning.
          </Typography>
          <Typography variant='h3'className='third-color' textTransform='capitalize'>
          skills
          </Typography>
          <Box display={'flex'} flexWrap={'wrap'}>
            {
              Skills.map((ele)=>(
          <Typography key={ele} variant='h6' textTransform={'capitalize'} color='white' ml={1}>
            *{ele}
            </Typography>
              )
              )
            }
            
          </Box>
        </Grid>
        <Grid item xs={12} lg={5} mt={4} height={{sm:400,xs:200}} overflow={'hidden'} data-aos="fade-down" data-aos-duration="1500" textAlign={'center'}>
           <img src={profileimg} alt='profileimg' className='about-img'/>
         </Grid>
      </Grid>
  
  )
}

export default About