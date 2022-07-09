import React,{useState,useEffect} from 'react'
import { Grid, Typography,Button} from '@mui/material'
import ammad from '../../assets/ammad.jpeg'
import './Home.css'
const Home = ({refs,Contact,scroll}) => {
  const [text,settext]=useState('')

  const [textData, setTextData] = useState(["Turk Ammad",'a react developer'])
  const [arrind,setarrind]=useState(0)
  const [strind,setstrind]=useState(0)
  if(arrind==textData.length){
setarrind(0)
  }
  const WritingText=()=>{
    if (text.length<textData[arrind].length) {
      setstrind(strind+1)
      settext(text+textData[arrind][strind])
    
    }
 else { 
      setarrind(arrind+1)
      setstrind(0)
      settext('')
    }
  }

  useEffect(() => {
setTimeout(WritingText,100)

   
 
  }, [text])
  
  
 



  return (
  <Grid container   ref={refs}mt={12} >
<Grid item lg={5} xs={10} height={{xs:300,sm:400}} className="animate__animated animate__fadeInDown" textAlign={'center'} mt={5}>
<img src={ammad} alt="ammad" style={{height:"90%",width:'60%'}} className='ammad-img'/>
</Grid>
<Grid item lg={7} className="animate__animated animate__fadeInRight" mt={3} paddingX={{xs:2,md:0}}>
<Typography fontSize={{xs:40,sm:60}} color={'white'} textTransform='uppercase' fontWeight={'bold'}>
welcome!

</Typography>
<Typography fontSize={{xs:25,sm:70}}  color={'white'} textTransform='capitalize' fontWeight={'bold'} >
 i am <span className='third-color writing-text'>{text}</span>
</Typography>
<Typography variant='h6' color={'white'} textTransform='capitalize' mt={3}>
  i am turk ammad and i am a react developer. i can build website front end part with react. i am capable to build responsive ui design for good user experiense. I can convert design to responsive web app  

</Typography>
<Button className='contact-btn' onClick={()=>scroll(Contact)}>Contact us</Button>
</Grid>
  </Grid>
  )
}

export default Home