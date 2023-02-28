import { Grid } from '@mui/material';
import React from 'react';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import HistoryToggleOffOutlinedIcon from '@mui/icons-material/HistoryToggleOffOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import './Carddesign.css'
import { width } from '@mui/system';

const steps = [
  'meet designer',
  'confirm order',
  'virtul design',
  'installation begins',
  'Move in',
];


const Carddesign = () => {
    return (
        <div>
           <div style={{background:"black",borderRadius:"50px", width:"150px",height:"36px",margin:"auto"}}>
            <h5 style={{color:"white",marginTop:"40px"}}>Why US</h5>
           </div>
             <Grid className="customizedDiv">
                <div className="customized-design">
                <div className="Icon">
                        <DesignServicesOutlinedIcon />
                    </div>
                    <div className="text-design">
                        <h5 style={{ marginTop: "15px"   }}>Customized design</h5>
                        <p style={{ width: "150px", fontSize: "14px", marginLeft:"20px" }}>Elegant affordable Home interior solution</p>
                    </div>
                    </div>
                <div className="customized-design">
                <div className="Icon">
                        <StarBorderPurple500OutlinedIcon  />
                    </div>
                    <div className="text-design">
                        <h5 style={{ marginTop: "15px"   }}>Qulity material</h5>
                        <p style={{ width: "150px", fontSize: "14px", marginLeft:"20px"}}>Elegant affordable Home interior solution</p>
                    </div>
                   </div>
                <div className="customized-design">
                <div className="Icon">
                        <HistoryToggleOffOutlinedIcon/>
                    </div>
                    <div className="text-design">
                        <h5 style={{ marginTop: "15px"   }}>one-time-completion</h5>
                        <p style={{ width: "150px", fontSize: "14px", marginLeft:"20px" }}>Elegant affordable Home interior solution</p>
                    </div>
                    </div>
                <div className="customized-design">
                <div className="Icon">
                        <SellOutlinedIcon style={{margin:"auto"}}/>
                    </div>
                    <div className="text-design">
                        <h5 style={{ marginTop: "15px"  }}>Transparent pricing</h5>
                        <p style={{ width: "150px", fontSize: "14px",marginLeft:"20px"  }}>Elegant affordable Home interior solution</p>
                    </div>
                   </div>
            </Grid>
            <Grid className="stopper">
              <h5 style={{textAlign:"center", marginTop:"20px",}}>Wondaring how its works?</h5>
            <Box sx={{ width: '100%',}} style={{display:"flex",justifyContent:"center"}}>
      <Stepper activeStep={1} alternativeLabel style={{marginTop:"50px"}}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
            </Grid>
        </div>
    );
};

export default Carddesign;