import { Grid } from '@mui/material';
import React from 'react';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Bedroom from "../../Assest/Images/Bedroom.jpeg"
import Bedroom1 from "../../Assest/Images/Bedroom1.jpeg"
import kitchen2 from "../../Assest/Images/Kitchen2.jpeg"
import kitchen1 from "../../Assest/Images/Kitchen1.jpeg"
import Bathroom from "../../Assest/Images/Bathroom.jpeg"
import Bathroom1 from "../../Assest/Images/Bathroom1.jpeg"
import Bathroom2 from "../../Assest/Images/Bathroom2.jpeg"
import Kitchen from "../../Assest/Images/Kitchen.jpeg"
import './Catlogdesign.css';

const Catlogdesign = () => {
    return (
        <Grid>
            <Grid container item sx={12} style={{marginLeft:"90px",rowGap:"20px"}}>
                <Grid className="image-card">
                    <div style={{display:"flex",marginLeft:"50px"}}>
                    <div>Futuristic Leaving room</div> 
                    <div>
                    <KeyboardDoubleArrowRightIcon/>
                    </div>
                    </div>
                <img src={Bedroom} alt="" style={{width:"318px",height:"200px"}}/>
                </Grid>
                <Grid className="image-card">
                    <div style={{display:"flex",gap:"10px",marginLeft:"50px"}}>
                    <div>Futuristic Leaving room</div> 
                    <div>
                    <KeyboardDoubleArrowRightIcon/>
                    </div>
                    </div>
                <img src={Bedroom1} alt="" style={{width:"318px",height:"200px"}}/>
                </Grid>
                <Grid className="image-card">
                    <div style={{display:"flex",gap:"10px",marginLeft:"50px"}}>
                    <div>Futuristic Leaving room</div> 
                    <div>
                    <KeyboardDoubleArrowRightIcon/>
                    </div>
                    </div>
                <img src={kitchen2} alt="" style={{width:"318px",height:"200px"}}/>
                </Grid>
                <Grid className="image-card">
                    <div style={{display:"flex",gap:"10px",marginLeft:"50px"}}>
                    <div>Futuristic Leaving room</div> 
                    <div>
                    <KeyboardDoubleArrowRightIcon/>
                    </div>
                    </div>
                <img src={kitchen1} alt="" style={{width:"318px",height:"200px"}}/>
                </Grid>
                <Grid className="image-card">
                    <div style={{display:"flex",gap:"10px",marginLeft:"50px"}}>
                    <div>Futuristic Leaving room</div> 
                    <div>
                    <KeyboardDoubleArrowRightIcon/>
                    </div>
                    </div>
                <img src={Bathroom} alt="" style={{width:"318px",height:"200px"}}/>
                </Grid>
                <Grid className="image-card">
                    <div style={{display:"flex",gap:"10px",marginLeft:"50px"}}>
                    <div>Futuristic Leaving room</div> 
                    <div>
                    <KeyboardDoubleArrowRightIcon/>
                    </div>
                    </div>
                <img src={Bathroom1} alt="" style={{width:"318px",height:"200px"}}/>
                </Grid>
                <Grid className="image-card">
                    <div style={{display:"flex",gap:"10px",marginLeft:"50px"}}>
                    <div>Futuristic Leaving room</div> 
                    <div>
                    <KeyboardDoubleArrowRightIcon/>
                    </div>
                    </div>
                <img src={Bathroom2} alt="" style={{width:"318px",height:"200px"}}/>
                </Grid>
                <Grid className="image-card">
                    <div style={{display:"flex",gap:"10px",marginLeft:"50px"}}>
                    <div>Futuristic Leaving room</div> 
                    <div>
                    <KeyboardDoubleArrowRightIcon/>
                    </div>
                    </div>
                <img src={Kitchen} alt="" style={{width:"318px",height:"200px"}}/>
                </Grid>
            </Grid>
            <Grid className="Round-card">
                    <div style={{display:"flex",marginLeft:"50px"}}>
                    <div>Explores 100 of possibilities! Schedule a call back</div> 
                    <div>
                    <KeyboardDoubleArrowRightIcon/>
                    </div>
                    </div>
                
                </Grid>
        </Grid>
    );
};

export default Catlogdesign;