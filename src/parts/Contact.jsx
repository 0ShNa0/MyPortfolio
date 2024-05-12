import React from 'react'
import { Typography,Link,Box } from '@mui/material'
import '../App.css';
const Contact = () => {
  return (
    <div>
       
         <Typography sx={{ mt:{sx:'14px',md:'19px',lg:'29px'},
         marginLeft:'auto',
            textAlign:'center',
          fontSize:{sx:'30px',md:'42px',lg:'50px'},
          fontFamily:'Montserrat',
          mb:{sx:'5px',md:'9px',lg:'18px'}
        }}>Contact Me</Typography>
         <div style={{ alignItems: 'center' }}>
         <Box
        sx={{
          border: '1px solid black', 
          padding: '5px', 
          alignItems:'center',
          marginLeft:{sx:'5px',md:'9px',lg:'18px'},
         backgroundColor:'#673ab7',
         maxWidth:{sx:'60%',md:'80%',lg:'95%'},
         mb:{sx:'5px',md:'9px',lg:'18px'}
       
        }}
      >
          <Link
        href="https://www.linkedin.com/in/shravani-nag-402037235/"
        target="_blank"
        rel="noopener noreferrer"
        underline="none" 
        sx={{ position: 'relative',fontFamily:'Montserrat',marginLeft:{sx:'14px',md:'19px',lg:'29px'},
        fontSize:{sx:'12px',md:'18px',lg:'24px'},
        color:'white'
    }}
      >
       Click Here to access LinkedIn
      </Link>
      </Box>

      <Box
        sx={{
          border: '1px solid black', 
          padding: '5px', 
          alignItems:'center',
          marginLeft:{sx:'5px',md:'9px',lg:'18px'},
         backgroundColor:'#673ab7',
         maxWidth:{sx:'60%',md:'80%',lg:'95%'},
         mb:{sx:'5px',md:'9px',lg:'18px'}
       
        }}>
      <Link
        href="https://scholar.google.com/citations?user=5aimcMgAAAAJ&hl=en&oi=ao"
        target="_blank"
        rel="noopener noreferrer"
        underline="none" 
        sx={{ position: 'relative',fontFamily:'Montserrat',marginLeft:{sx:'14px',md:'19px',lg:'29px'},
        fontSize:{sx:'12px',md:'18px',lg:'24px'},
        color:'white'
    }}
      >
          
    
       Click Here to reach out on Google Scholar
      </Link>
      </Box>
      <Box
        sx={{
          border: '1px solid black', 
          padding: '5px', 
          alignItems:'center',
          marginLeft:{sx:'5px',md:'9px',lg:'18px'},
         backgroundColor:'#673ab7',
         maxWidth:{sx:'60%',md:'80%',lg:'95%'},
         mb:{sx:'5px',md:'9px',lg:'18px'}
       
        }}>
      <Link
        href="https://github.com/0ShNa0"
        target="_blank"
        rel="noopener noreferrer"
        underline="none" 
        sx={{ position: 'relative',fontFamily:'Montserrat',marginLeft:{sx:'14px',md:'19px',lg:'29px'},
        fontSize:{sx:'12px',md:'18px',lg:'24px'},
        color:'white'
    }}
      >
          
    
       Check Out My Github Profile
      </Link>
      </Box>
      <Box
        sx={{
          border: '1px solid black', 
          padding: '5px', 
          alignItems:'center',
          marginLeft:{sx:'5px',md:'9px',lg:'18px'},
         backgroundColor:'#673ab7',
         maxWidth:{sx:'60%',md:'80%',lg:'95%'},
         mb:{sx:'5px',md:'9px',lg:'18px'}
       
        }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>

      <Typography
      
            sx={{ position: 'relative',fontFamily:'Montserrat',marginLeft:{sx:'14px',md:'19px',lg:'29px'},
            fontSize:{sx:'12px',md:'18px',lg:'24px'},
            color:'white'
        }}
      >
        Email
      </Typography>
      <a
        href="mailto:your_email@example.com"
        style={{ marginLeft: '10px', position: 'relative', float: 'right' ,color:'white'}}
      >
        Send Email
      </a>
    </div>
      </Box>
        </div>
    </div>
  )
}

export default Contact