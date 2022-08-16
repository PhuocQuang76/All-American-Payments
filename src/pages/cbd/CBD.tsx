import React from "react";
import classes from "./CBD.module.css";
import { Link } from "react-scroll";

export interface ICBDProps {};
const CBDPage:React.FunctionComponent<ICBDProps> = (props) => {
    return(
        <section className={classes.cbd} id="section_cbd">
            <div className={classes.container}>
                <div className={classes.content_header}>
                    <h1 >CBD</h1>
                    <h3>PAYMENT PROCESSING</h3>
                </div>

                <div className={classes.content_detail}>
                    <div>
                        <p >FLOWER</p>
                        <p >HEMP</p>
                        <p >D8 & D9</p>
                    </div>
                    <div >
                        <p></p>
                        <p>FULL SPECTRUM</p>
                        <p >EDIBLES</p>
                        <p >HHC</p>
                    </div>
                </div>
                <div className={classes.content_button}>
                    <Link to="section_contact" type="button"spy={true} smooth={true} offset={-100} duration={500} >TELL ME MORE</Link>
                </div>
            </div>
        </section>

    )
}
export default CBDPage;