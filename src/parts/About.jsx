import React from 'react'
import {Typography,Grid} from '@mui/material';
import '../App.css';
import image from '../img/favicon.png';
const About = () => {
  return (
<div
display='flex'

>

         <Typography sx={{ mt:{sx:'14px',md:'19px',lg:'29px'},
         marginLeft:'auto',
            textAlign:'center',
          fontSize:{sx:'30px',md:'42px',lg:'50px'},
          fontFamily:'Montserrat'
        }}>About</Typography>

    <Typography sx={{
        fontSize:{sx:'20px',md:'28px',lg:'26px'},
        fontFamily:'Montserrat',
      position:'relative',
      float:'left',
      mt:{xs:'17px',md:'22px',lg:'105px'},
       marginLeft:{xs:'7px',md:'12px',lg:'45px'},
       padding:{xs:'0px',md:'9px',lg:'19px'}
    
    }}>
        Hi I am Shravani Nag,a prefinal year computer science student at IGDTUW Delhi.
        <br/>
        I am a passionate frontend web developer,UI/UX designer and AI researcher.
        <br/>
        I enjoy delving into new tech stacks and creating interesting user experiences.
        </Typography>
        <Grid item 
        sx={{
            marginTop: { xs: '20px', md: '30px', lg: '100px' },
            
          }} 
        >
        <img src={image} 
       
    float='left'
  

    ></img>
    </Grid>
       </div>
  )
}

export default About