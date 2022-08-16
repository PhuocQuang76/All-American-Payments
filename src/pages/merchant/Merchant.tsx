import React from "react";
import classes from "./Merchant.module.css";
import {Link} from "react-scroll";

const MerchantPage = () => {
    return(
        <section className={classes.merchant} id="section_merchant">
            <div className={classes.container}>
                <div className={classes.content_header}>
                    <h1>MERCHANT</h1>
                    <h3>PAYMENT PROCESSING</h3>
                </div>

                <div className={classes.content_detail}>
                    <div >
                        <p >SMOKE SHOPS</p>
                        <p >RETAILERS</p>
                    </div>
                    <div >
                        <p>EATERIES</p>
                        <p >MARKETS</p>
                    </div>
                    <div >
                        <p>SERVICE</p>
                        <p >MEDICAL</p>
                    </div>
                </div>

                <div className={classes.content_detail}>
                    <p >...and many others</p>
                </div>

                <div className={classes.content_button}>
                    <Link to="section_contact" type="button"spy={true} smooth={true} offset={-100} duration={500} >TELL ME MORE</Link>
                </div>
                </div>
        </section>
    )
}
export default MerchantPage;