import React from "react";
import classes from "./Info.module.css";
import ScrollToTop from "react-scroll-to-top";

const InfoPage = () => {
    return(
        <section className={classes.info} id="section_info">
            <ScrollToTop smooth />
            <div className={classes.container}>
                    <div>
                        <h4 >SITE LINKS</h4>
                        <div>
                                <p >CBD</p>
                                <p>No Card Fees</p>
                                <p>Consumer</p>
                                <p>Wholesale</p>
                                <p>Contact</p>

                        </div>
                    </div>

                    <div>
                        <h4 >ALL AMERICAN PAYMENT</h4>
                        <div>
                            <p >263 W Olive Ave, Ste 211</p>
                            <p>Burbank,CA 91502</p>
                            <p >818-979-9727</p>
                            <p >info@AllAmericanPayments.com</p>
                            <p >www.AllAmericanPayments.com</p>
                        </div>
                    </div>


            </div>
            <div className={classes.copyright}>
                <p>Copyright All American Payments 2022 | All Rights Reserved</p>
            </div>

        </section>
    )
}
export default InfoPage;

