import React from 'react'
import {Grid,Typography,Stack} from '@mui/material';
const Experience = () => {
  return (
    <Grid position='relative'>
         <Typography sx={{ mt:{sx:'14px',md:'19px',lg:'29px'},
         marginLeft:'auto',
            textAlign:'center',
          fontSize:{sx:'30px',md:'42px',lg:'50px'},
          fontFamily:'Montserrat'
        }}>Experiences</Typography>
        <Stack>
        <Typography sx={{ mt:{sx:'10px',md:'14px',lg:'18px'},
         
         marginLeft:{sx:'8px',md:'20px',lg:'30px'},
          fontSize:{sx:'10px',md:'16px',lg:'20px'},
          fontFamily:'Montserrat',
          fontWeight:'bold'
        }}>Software Engineering Intern|Uber</Typography>
    <Typography sx={{
        fontSize:{sx:'5px',md:'12px',lg:'14px'},
        marginLeft:{sx:'10px',md:'25px',lg:'48px'},
        fontFamily:'Montserrat',
        fontStyle:'italic',
    }}>May 2024-Present|Bangalore,India</Typography>
     <Typography sx={{
        fontSize:{sx:'8px',md:'14px',lg:'18px'},
    
        marginLeft:{sx:'8px',md:'20px',lg:'30px'},
        fontFamily:'Montserrat'
    }}>Work In Progress
    <br/>
    Container Platform at Uber</Typography>
    </Stack>
    <Stack>
        <Typography sx={{ mt:{sx:'10px',md:'14px',lg:'18px'},
         marginLeft:{sx:'8px',md:'20px',lg:'30px'},
          fontSize:{sx:'10px',md:'16px',lg:'20px'},
          fontFamily:'Montserrat',
          fontWeight:'bold'
        }}>NLP Research Intern|AI Institute,University of South Carolina</Typography>
    <Typography sx={{
        fontSize:{sx:'5px',md:'12px',lg:'14px'},
        marginLeft:{sx:'10px',md:'25px',lg:'48px'},
        fontFamily:'Montserrat',
        fontStyle:'italic',
    }}>December 2023-April 2024|Remote</Typography>
     <Typography sx={{
        fontSize:{sx:'8px',md:'14px',lg:'18px'},
        marginLeft:{sx:'8px',md:'20px',lg:'30px'},
        fontFamily:'Montserrat'
    }}>
       Supervised by Prof Amitava Das, on creation of a novel Hallucination Detection Method for LLMS.
       <br/>
     Worked on creating a supervised multitask learning framework called Factual Entailment.
 
    Involved in dataset creation based upon the HILT dataset.
    
    Leveraged paraphrasing language models,textual entailment,prompt engineering for development and curation of dataset.
   <br/>
    Achieved 40 percent better outcomes than standard TE menthods.
    
    Coauthored paper detailing all findings.
    </Typography>
    <Grid Item
    sx={{marginLeft:{sx:'10px',md:'25px',lg:'48px'}}}>
    <a href="https://arxiv.org/abs/2403.19113" target="_blank" rel="noopener noreferrer" >ArXiv Link</a>
    </Grid>
    </Stack>
    <Stack>
        <Typography sx={{ mt:{sx:'10px',md:'14px',lg:'18px'},
         marginLeft:{sx:'8px',md:'20px',lg:'30px'},
          fontSize:{sx:'10px',md:'16px',lg:'20px'},
          fontFamily:'Montserrat',
          fontWeight:'bold'
        }}>Microsoft Student Developer Program</Typography>
    <Typography sx={{
        fontSize:{sx:'5px',md:'12px',lg:'14px'},
        marginLeft:{sx:'10px',md:'25px',lg:'48px'},
        fontFamily:'Montserrat',
        fontStyle:'italic',
    }}>June 2023-August 2023|Remote</Typography>
     <Typography sx={{
        fontSize:{sx:'8px',md:'14px',lg:'18px'},
        marginLeft:{sx:'8px',md:'20px',lg:'30px'},
        fontFamily:'Montserrat'}}>
             Worked on a generative AI use case.
             <br/>
    Creating a chatbot that will act as a financial advisor,leveraging microsoft bot framework
     Involved in creation of a backend plugin that will use langchain to query a SQL database that to recommend suitable investments according to user inputs based on a mathematical model.
     <br/>
 Navigated end to end deployment on Azure.
        </Typography>
        </Stack>
        </Grid>
  )
}

export default Experience