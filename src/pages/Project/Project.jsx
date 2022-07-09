import { Grid, Typography, Button,Box,Stack } from "@mui/material";
import "./Project.css";
import {Link} from 'react-router-dom'
import img from "../../assets/ammad.jpeg";
import {LocalPlay,GitHub,Preview} from '@mui/icons-material';
import { projects } from "./ProjectService";

const Project = ({ refs }) => {

  
  return (
    <Grid container className="project" mt={10} paddingY={10} ref={refs}>
      <Grid item xs={12} display="flex" justifyContent={"center"}>
        <Typography
          variant="h3"
          color="white"
          textTransform={"capitalize"}
          borderBottom="solid"
          borderColor={"red"}
        >
          Our  Projects
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        display="flex"
        justifyContent={"space-around"}
      >
      {
        projects.map((ele)=>(
          <Grid
          key={ele.id}
          item
          ml={1}
          xs={10}
          paddingY={2}
          sm={5}
          lg={3}
          overflow="hidden"
          height={{md:400,sm:500,xs:550}}
          data-aos="fade-top"
          mt={10}
          backgroundColor={"white"}
        >
          <img src={ele.img} alt="" style={{ height: "60%", width: "100%" }} />
          <Box px={2}>
          <Typography variant="h5" className="third-color" textTransform={"capitalize"} fontWeight="bold">
            {ele.name}
          </Typography>
          <Typography textTransform={"capitalize"}>
           {ele.desc}
          </Typography>
          <Stack direction="row" spacing={2} mt={1}>
     <Button variant="container" href={ele.url} target={"_blank"} className='links' startIcon={<Preview />}>preview</Button>
    <Button variant="container" href={ele.github} target={"_blank"}  className='links' startIcon={<GitHub />}>github</Button> 

      
    </Stack>
          </Box>
       
        </Grid>
        ))
      }
       
        
      </Grid>
    </Grid>
  );
};

export default Project;
