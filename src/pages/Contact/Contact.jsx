import React, { useEffect, useRef, useState } from "react";
import { Grid, Box, Button, TextField} from "@mui/material";
import emailjs from "emailjs-com";
import {
  Facebook,
  GitHub,
  WhatsApp,
  Email,
  Phone,
  Contacts,
} from "@mui/icons-material";

const Contact = ({ refs }) => {
  const initialState = {
    email: "",
    fullname: "",
    phone: "",
    message: "",
  };
  const [sendmessage, setsendmessage] = useState(initialState);
  useEffect(() => {
    emailjs.init("3x0RM7jXYSQZzxaqk");
  }, []);
  const form = useRef();
  const sendMessage = (e) => {
   
    const {email,fullname,phone,message}=sendmessage
    e.preventDefault();
    if(email|fullname|phone|message!==''){
      emailjs
      .sendForm("service_vvsqwuq", "template_qdwkgq2", form.current)
      .then((res) => {setsendmessage(initialState); alert('your message was sended')})
      .catch((error) => console.log(error));
    }
    else{
      alert('please fill the full content form')
     
    }

  };
  const onchange = (e) => {
    setsendmessage({
      ...sendmessage,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Grid container ref={refs} bgcolor="black" padding={5}>
      <Grid item container xs={12} sm={10}>
        <Grid
          item
          xs={12}
          md={5}
          color="white"
          className="third-back"
          display={"flex"}
          flexDirection="column"
          alignItems={"center"}
          justifyContent="center"
          p={5}
        >
          <Contacts style={{ fontSize: "100px" }} />
          <Box
            display={"flex"}
            flexDirection={{ md: "row", xs: "column" }}
            alignItems="center"
            justifyContent={"center"}
            fontSize={{xs:15,sm:20}}
            mt={2}
          >
            <Phone />
            +92 3194091501
          </Box>
          <Box
            display={"flex"}
            flexDirection={{ md: "row", xs: "column" }}
            alignItems="center"
            fontSize={{xs:15,sm:20}}
            justifyContent={"center"}
            mt={2}
          >
            <Email />
            ammaddev2@gmail.com
          </Box>
          <Box
            display={"flex"}
            flexDirection={{ md: "row", xs: "column" }}
            alignItems="center"
            justifyContent={"center"}
            fontSize={{xs:15,sm:20}}
            mt={2}
          >
            <WhatsApp />
            +92 3194091501
          </Box>
        </Grid>
        <Grid item xs={12} md={5} bgcolor={"white"} p={2}>
          <form ref={form}>
            <Box
              display="flex"
              flexDirection={"column"}
              textTransform={"capitalize"}
            >
              <TextField
                id="outlined-basic"
                color="secondary"
                label="full name"
                onChange={onchange}
                name="fullname"
                variant="outlined"
                margin="normal"
                value={sendmessage.fullname}
              />

              <TextField
                id="outlined-basic"
                color="secondary"
                label="Email"
                name="email"
                onChange={onchange}
                value={sendmessage.email}
                variant="outlined"
                margin="normal"
              />
              <TextField
                id="outlined-basic"
                color="secondary"
                label="phone"
                name="phone"
                onChange={onchange}
                value={sendmessage.phone}
                variant="outlined"
                margin="normal"
              />
              <TextField
                id="outlined-basic"
                color="secondary"
                label="Message"
                name="message"
                onChange={onchange}
                value={sendmessage.message}
                variant="outlined"
                margin="normal"
              />
              <Button className="links" type="submit" onClick={sendMessage}>
                submit
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={2}
        display="flex"
        flexDirection={{ sm: "column", xs: "row" }}
        alignItems="end"
        justifyContent={"center"}
      >
        <Button className="contact-link" href="https://github.com/Ammadshafi" target={"_blank"}>
          <GitHub  fontSize={'large'}/>
        </Button>
        <Button className="contact-link" href="https://www.facebook.com/profile.php?id=100074581591039"  target={"_blank"}>
          <Facebook fontSize={'large'} />
        </Button>
      </Grid>
    </Grid>
  );
};

export default Contact;
