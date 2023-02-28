import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import "./HomeInterior.css";
import { Grid, Paper } from '@mui/material';
import house from "../../Assest/Images/house.jpg"
import { styled } from '@mui/system';



const HomeInterior = () => {
    return (
        <Grid>
        <Grid container item xs={12}>
            <Grid className="maindiv">
                <div className="Interior-design">
                    <div className="text-design">
                        <h3 style={{ marginBottom: "auto" }}>Home Interior</h3>
                        <p style={{ width: "150px", fontSize: "14px", marginTop: "0px" }}>Elegant affordable Home interior solution</p>
                    </div>
                    <div className="arrow">
                        <ArrowForwardIcon />
                    </div>
                </div>
                <div className="Interior-design">
                    <div className="text-design">
                        <h3 style={{  marginBottom: "auto" }}>Home Interior</h3>
                        <p style={{ width: "150px", fontSize: "14px", marginTop: "0px" }}>Elegant affordable Home interior solution</p>
                    </div>
                    <div className="arrow">
                        <ArrowForwardIcon />
                    </div>
                </div>
                <div className="Interior-design">
                    <div className="text-design">
                        <h3 style={{  marginBottom: "auto" }}>Home Interior</h3>
                        <p style={{ width: "150px", fontSize: "14px", marginTop: "0px" }}>Elegant affordable Home interior solution</p>
                    </div>
                    <div className="arrow">
                        <ArrowForwardIcon />
                    </div>
                </div>
                <div className="Interior-design">
                    <div className="text-design">
                        <h3 style={{ marginBottom: "auto" }}>Home Interior</h3>
                        <p style={{ width: "150px", fontSize: "14px", marginTop: "0px" }}>Elegant affordable Home interior solution</p>
                    </div>
                    <div className="arrow">
                        <ArrowForwardIcon />
                    </div>
                </div>
            </Grid>
        </Grid>
        <Grid xs={12}>
        <div  style={{
             backgroundColor: "gray", height: "150px"
            ,marginTop: "20px", marginBottom: "20px"
        }}>
            
            <img src={house} alt="" style={{width:"100%",height:"150px"}}/>
        </div>
    </Grid>
    </Grid>
    );
};

export default HomeInterior;