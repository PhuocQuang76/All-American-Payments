import React from "react";
import classes from "./Wholesale.module.css";
import {Link} from "react-scroll";

const WholesalePage = () => {
    return(
        <section className={classes.wholesale} id="section_wholesale">
            <div className={classes.container}>

                    <div>
                        <div>
                            <div className={classes.content_header}>
                                <h1 >WHOLESALE</h1>
                                <h3 >PAYMENT
                                    PROCESSING</h3>
                            </div>
                            <div className={classes.content_detail}>
                                <div >
                                    <p >HIGH TICKET</p>
                                    <p >BUYER DATABASE</p>
                                </div>
                                <div >
                                    <p >HIGH VOLUME</p>
                                    <p >V-TERMINAL</p>
                                </div>
                            </div>
                        </div>

                            <div className={classes.content_button}>
                                <Link to="section_contact" type="button" spy={true} smooth={true} offset={-100} duration={500} >TELL ME MORE</Link>
                            </div>

                    </div>

            </div>
        </section>

    )
}
export default WholesalePage;