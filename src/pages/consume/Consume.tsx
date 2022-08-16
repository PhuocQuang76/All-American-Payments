import React from "react";
import classes from "./Consume.module.css";
import {Link} from "react-scroll";

const ConsumePage = () => {
    return(
        <section className={classes.consume} id="section_consumer">
            <div >
            <div className={classes.container}>
                <div className={classes.content_header}>
                    <h1>NO MORE</h1>
                    <h3 >CARD PROCESSING FEES</h3>
                </div>

                <div className={classes.content_detail}>
                    <p>Still paying credit card processing fees ?<br />We will eliminate them</p>

                    <p>It's quick, simple and fully compliant</p>
                </div>
                <div className={classes.content_button}>
                    <Link to="section_contact" type="button" spy={true} smooth={true} offset={-100} duration={500} >TELL ME MORE</Link>
                </div>
            </div>
            </div>
        </section>
    )
}
export default ConsumePage;