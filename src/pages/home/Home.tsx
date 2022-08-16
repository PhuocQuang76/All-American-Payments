import React, { Fragment } from "react";
import classes from "./Home.module.css";
import HeaderBar from "../header/Header";

export interface FunctionComponent {}

const HomePage:React.FunctionComponent<FunctionComponent> = (props) => {
    return(


            <section className={classes.home} id="section_home">
                <div className={classes.container}>

                        <h1> CREDIT & DEBIT CARD PAYMENT PROCESSING</h1>
                        <div className={classes.content_group}>
                            <h3 className={classes.content_group}>IN YOUR STORE</h3>
                            <h3 className={classes.content_group}>ON THE INTERNET</h3>
                            <h3 className={classes.content_group}>OVER THE PHONE</h3>
                        </div>


                </div>
            </section>



    )

}
export default HomePage;
