import React from 'react';
import "./Menucard.css"
import Carousel from 'react-bootstrap/Carousel';
import Bedroom1 from "../../Assest/Images/Bedroom1.jpeg";
import kitchen1 from "../../Assest/Images/Kitchen1.jpeg";
import Bedroom2 from "../../Assest/Images/Bathroom2.jpeg";
import Leavingroom from "../../Assest/Images/Leaving-room.jpg"
import officespace from "../../Assest/Images/office-space.jpg"
import roundtable from "../../Assest/Images/roundtable.jpg"
import interiordesign from "../../Assest/Images/interior-design.jpg"
import { Grid } from '@mui/material';




const Menucard = () => {
  return (
    <Grid >
      <Grid container spacing={2} item xs={12}>
        <Grid item xs={6}>
          <Carousel variant="dark m">
            <Carousel.Item>
              <img
                src={Bedroom1}
                alt="First slide"
                className="d-block"
                style={{ width: "100%", height: "300px" }}
              />
              <Carousel.Caption>
                <h5>First slide label</h5>
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={kitchen1}
                alt="Second slide"
                className="d-block "
                style={{ width: "100%", height: "300px" }}
              />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={Bedroom2}
                alt="Third slide"
                className="d-block "
                style={{ width: "100%", height: "300px" }}
              />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                {/* <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Grid>
        <Grid item xs={6}>
          <Grid className="mainGrid">

            <Grid className="bigContain">
            <img src={Leavingroom} alt="" style={{width:"340px",height:"130px"}}/>
            </Grid>


            <Grid className="smallContain">
            <img src={roundtable} alt="" style={{width:"235px",height:"130px"}}/>
            </Grid>

          </Grid>
          <Grid className="mainGrid">

            <Grid className="smallContain">
              <img src={interiordesign} alt="" style={{width:"235px",height:"130px"}}/>
            </Grid>

            <Grid className="bigContain">
            <img src={officespace} alt="" style={{width:"340px",height:"130px"}}/>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Menucard;