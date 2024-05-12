import About from './parts/About';
import Contact from './parts/Contact';
import Experience from './parts/Experience';
import Projects from './parts/Projects';
import './App.css';
import { AppBar,Tab,Tabs } from '@mui/material';
import React,{useState} from 'react';
function App() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
  <div>
     <AppBar position="static" 
     sx={{backgroundColor: '#673ab7',
     minHeight:{sx:'15px',md:'30px',lg:'30px'},
     padding:{sx:'5px',md:'8px',lg:'10px'}
     
     }}>
       <Tabs value={selectedTab} onChange={handleTabChange}
        textColor="black" 
        indicatorColor="black" 
        sx={{ typography: 'Montserrat',
        justifyContent:'center'}}>
         <Tab label="About"  sx={{ textTransform: 'none',
          fontSize: '25px' ,  textColor:"black" ,
          fontFamily:'Montserrat'}}/>
         <Tab label="Experiences"  sx={{ textTransform: 'none' ,textColor:"black" ,
          fontSize: '25px',
          fontFamily:'Montserrat'}}/>
         <Tab label="Projects"  sx={{ textTransform: 'none',textColor:"black" ,
          fontSize: '25px',
          fontFamily:'Montserrat' }}/>
           <Tab label="Contact"  sx={{ textTransform: 'none',textColor:"black" ,
          fontSize: '25px',
          fontFamily:'Montserrat' }}/>
       </Tabs>
     </AppBar>
     {selectedTab === 0 && <About />}
     {selectedTab === 1 && <Experience />}
     {selectedTab === 2 && <Projects />}
     {selectedTab === 3 && <Contact />}

   </div>
 );

}

export default App;
