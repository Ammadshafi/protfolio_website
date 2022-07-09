import { Grid, Typography,IconButton} from '@mui/material'
import { Menu } from '@mui/icons-material';
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import React,{useEffect, useState} from 'react'

const Navbar = ({scroll,Home,About,Project,Contact}) => {
  const [mobile,setmobile]= useState(false)
  useEffect(()=>{
    if (window.screen.width<425) {
      setmobile(true)
     }
  },[])
 
  return (
    <Grid container padding={5} >
   <Grid item xs={12} md={6} textAlign={{xs:'center',md:"start"}}>
   <Typography variant='h3' fontSize={{sm:50,xs:20}}  textTransform='uppercase' color={'white'}  fontWeight='bold'>
   tu
    <span className='third-color'>
    rk Am
    </span>
    mad
   </Typography>
   </Grid>
   <Grid item md={6} xs={12} flexWrap='wrap' display={'flex'} justifyContent={'space-around'} color={"white"} style={{listStyleType:"none"}} textTransform='capitalize' fontWeight={'bold'}>

    <li onClick={()=>scroll(Home)}>Home</li>
    <li onClick={()=>scroll(About)}>About</li>
    <li onClick={()=>scroll(Project)}>Projects</li>
    <li onClick={()=>scroll(Contact)}>Contact us</li>
    </Grid>
  </Grid>
  
  )
}

export default Navbar