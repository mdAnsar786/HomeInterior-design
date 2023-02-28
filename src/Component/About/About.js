import { Button, Grid } from '@mui/material';
import React from 'react';
import './About.css';
import { Toolbar } from '@mui/material/Toolbar';
import { margin } from '@mui/system';
import { Input } from '@mui/icons-material';





const About = () => {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{width:"70%",textAlign:"left",marginLeft:"20px",marginTop:"20px"}}>
                    <div >
                        <h2 style={{backgroundColor:"yellow",width:"150px",height:"40px"}}>About Us</h2>
                    </div>
                    <div>
                        <h4>we are interior design agency with a distinctive individual approach</h4>
                    </div>
                    <div>
                        <p>Furnka is a full range home interior design & Furniture
                            company focused in creating great adadsf
                            experience by a delicate balance of beauty,
                            comfort & efficiency. our philosophy is simple,no matter the size of the project
                            ,the goal is always the same:To make your personal style shine,we
                            provide new inspiration and ideas,while incorporating elements
                            of you into every concept we present. </p>
                    </div>
                    <div>
                        <p>Each  project is designed with a non=compromising attitude and a close attention to detail
                            achieving a seamless flow through design, materials, fittings and finishes that is timelessly
                            on-trend, embracing simplicity,minimalism & functionality,so dont worry if you are unsure of
                            what you want we are here to help find your style and develop your project into a space that are
                            understated yet sophisticated, straightforward,elegant,functional and fun.Balance light, space
                            and color factor into every design, creating a timeless effect that you utterly adore</p>
                    </div>
                    <div>
                        <h6>With highly experienced designers & craftsmen throught India,no project is too big or Toolbar
                            small, We welcome enquiries and would love to find out how we can help with your unique project
                        </h6>
                    </div>
                </div>
                <div style={{width:"20%",margin:"auto"}}>
                    <Grid  className='small-main-content'>
                        <div className="smallContainer"></div>
                        <div className="smallContainer"></div>
                        <div className="smallContainer"></div>
                        <div className="smallContainer"></div>
                      
                    </Grid>
                   
                </div>
            </div>
            <div style={{width:"60%",height:"150px",variant:"outlined",margin:"auto",marginBottom:"20px" ,border:"1px solid gray",marginTop:"20px",borderRadius:"50px"}}>
                <div style={{display:"flex",justifyContent:"space-between", marginTop:"20px"}}>
              <div style={{textAlign:"left",width:"220px",marginLeft:"40px"}}>
               <h4>
                Newsletter sign up
               </h4>
               <p>sign up and stay update on the letest in interior decor, events & discounts & offers</p>
              </div>
              <div >
           <input placeholder='Your Email ID' style={{width:"300px",height:"35px",border:"1 px solid gray",paddingLeft:"20px",marginTop:"30px",marginRight:"40px",borderRadius:"10px"}}/>
              </div>
              <div>
              <Button style={{borderRadius:"10px",color:"black",width:"100px",height:"35px",backgroundColor:"yellow",paddingLeft:"20px",marginTop:"30px",marginRight:"135px"}}>Subcribe</Button>
              </div>
              </div>
            </div>
        </div>
    );
};

export default About;
