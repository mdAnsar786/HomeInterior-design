import { Grid } from '@mui/material';
import CountertopsOutlinedIcon from '@mui/icons-material/CountertopsOutlined';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import LocalHotelOutlinedIcon from '@mui/icons-material/LocalHotelOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import AddHomeWorkOutlinedIcon from '@mui/icons-material/AddHomeWorkOutlined';
import architecture from "../../Assest/Images/architecture.jpg"
import hallway from "../../Assest/Images/hallway.jpg"
import React from 'react';
import './MegaPlateform.css'

const MegaPlateform = () => {
    return (
        <Grid>
            <Grid className="megafile">
                <div>
                    <h3 style={{ marginTop: "30px" }}>
                        Complete one stop full range home interior Solution Under one mega plateform
                    </h3>
                </div>
                <Grid container item xs={12}>
                <div className="onestep">
                    <div style={{fontSize:"90px",marginTop:"80px"}}>
                        360&deg;
                    </div>
                    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
                        <div className="mega-design">
                            <div>
                                <ChairOutlinedIcon  className="Icon-design"/>
                            </div>
                            <div className="text-design">
                                <h5 style={{ marginBottom: "auto" }}>Living/dining/Room</h5>
                                <p style={{ width: "150px", fontSize: "14px", marginTop: "0px",marginRight:
                            "10px",textAlign:"left" }}>Tv unit,Tv back paneling Bar unit,Book self, showcase</p>
                            </div>

                        </div>
                        <div className="mega-design">
                            <div>
                                <LocalHotelOutlinedIcon  className="Icon-design"/>
                            </div>
                            <div className="text-design">
                                <h5 style={{ marginBottom: "auto" ,textAlign:"left" }}>Bed Room</h5>
                                <p style={{ width: "180px", fontSize: "14px", marginTop: "0px",marginRight:
                            "10px",textAlign:"left"  }}>Wardrobes,Tv unit,Tv,storege Bed,Dressing unit, study unit,Kids bunkers beds</p>
                            </div>
                        </div>
                        <div className="mega-design">
                            <div>
                                <CottageOutlinedIcon  className="Icon-design"/>
                            </div>
                            <div className="text-design">
                                <h5 style={{ marginBottom: "auto" ,textAlign:"left"  }}>Interior design</h5>
                                <p style={{ width: "180px", fontSize: "14px", marginTop: "0px",marginRight:
                            "10px",textAlign:"left"  }}>Wall paneling,Lightning,False celling,civil works,Furnishing,Appliances</p>
                            </div>

                        </div>
                        <div className="mega-design">
                            <div>
                                <CountertopsOutlinedIcon  className="Icon-design" />
                            </div>
                            <div className="text-design">
                                <h5 style={{ marginBottom: "auto",textAlign:"left"  }}>Kitchen</h5>
                                <p style={{ width: "150px", fontSize: "14px", marginTop: "0px",marginRight:
                            "10px",textAlign:"left"  }}>CounterTop,stroges,paneling,
                                    accessories,
                                    Pantry pull out</p>
                            </div>
                        </div>
                        <div className="mega-design">
                            <div>
                                <AddHomeWorkOutlinedIcon className="Icon-design"/>
                            </div>
                            <div className="text-design">
                                <h5 style={{ marginBottom: "auto",textAlign:"left" }}>Home refurbish</h5>
                                <p style={{ width: "150px", fontSize: "14px", marginTop: "0px",marginRight:
                            "30px",textAlign:"left"  }}>Kitchen/Bathroom/Refurbish,Tilling,
                                    plumbing,Electrical,Painting,Deep cleaning</p>
                            </div>

                        </div>
                    </div>
                </div>
                </Grid>
            </Grid>
            <Grid className="display-img">
            <Grid className="FlexContainer">
            <img src={architecture} alt="" style={{width:"540px",height:"230px"}}/>
            </Grid>
            <Grid className="FlexContainer">
            <img src={hallway} alt="" style={{width:"540px",height:"230px"}}/>
            </Grid>
            </Grid>
        </Grid>
    );
};

export default MegaPlateform;