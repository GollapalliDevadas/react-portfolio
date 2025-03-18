import   { TextField,  Button,Box, FormControl  }  from   "@mui/material";
import { useState } from "react";
import './contact.css';

export function Contact()
{
    const [phonenumber,setPhonenumber]=useState('');

    const handleclick=(e)=>{
        const value =e.target.value;
        setPhonenumber(value)
    }
    return(
        <div className="contact container-fluid" id='contact'>
            <div className="h1">
                 <h1 className=" text-center text-bg-primary fw-bold fst-italic">Contact Me</h1>

            </div>
            <div className="container-fluid d-flex flex-column justify-content-center align-items-center min-vh-100 px-2">
                <Box  sx={{
          width: "100%",
          maxWidth: 500, // Adjusts for larger screens but stays responsive
          p: 3,
          boxShadow: 3,
          borderRadius: 3,
          backgroundColor: "white",
        }}>
                
                    <form action="" >
                      <FormControl fullWidth sx={{gap:2}}>
                      <TextField  label='Enter Full Name' placeholder="Enter Full Name" fullWidth/> 
                      <TextField label='Email' type="email" placeholder="Enter your Email" fullWidth/> 
                      <TextField label= 'PhoneNumber' type="tel" placeholder="Enter a Valid 10-digits phone number" required pattern='[0-9]{10}' value={phonenumber} onChange={handleclick} fullWidth/>
                      <TextField
                                label="Message"
                                placeholder="Type your message here..."
                                multiline
                                rows={4} 
                                fullWidth
                                variant="outlined"/>

                 </FormControl> 
                      <Button variant="contained"  sx={{ mt: 2, height: "50px", width: "100%" }} color="warning">Send Message</Button>
                    </form>
                </Box>
            </div>

        </div>
    )
}