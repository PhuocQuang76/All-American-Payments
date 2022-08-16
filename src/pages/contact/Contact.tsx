import React, {useState} from "react";
import classes from "./Contact.module.css";
import * as FaIcons from 'react-icons/fa';
import useInput from "../../hooks/use-input";
import RestClient from "./RestClient";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {formActions} from "../../store/slices/openCloseFormSlice";
import Confirm from "./Confirm";

type Profile = {
    name:string,
    email:string,
    phone:number,
    businessType:string,
    service:string

}
const ContactPage:React.FunctionComponent = (props) => {
    const isSend = useSelector((state:RootState) => state.closeOpenForm.isSend);


    const dispatch = useDispatch();
    const emailRegex = /\S+@\S+\.\S+/;

    const{
        value:enteredName,
        isValid:enteredNameIsValid,
        hasError: nameInputHasError,
        reset:resetName,
        valueChangeHandler:nameInputChangeHandler,
        valueBlurHandler:nameInputBlurHandler,

    } = useInput((value:string) => value.trim() !== "");
    const{
        value:enteredEmail,
        isValid:enteredEmailIsValid,
        hasError: emailInputHasError,
        reset:resetEmail,
        valueChangeHandler:emailInputChangeHandler,
        valueBlurHandler:emailInputBlurHandler,

    } = useInput((value:string) => emailRegex.test(value));
    const{
        value:enteredPhone,
        isValid:enteredPhoneIsValid,
        hasError: phoneInputHasError,
        reset:resetPhone,
        valueChangeHandler:phoneInputChangeHandler,
        valueBlurHandler:phoneInputBlurHandler,

    }  = useInput((value:string) => value.trim().length > 9);
    const{
        value:enteredBusinessType,
        isValid:enteredBusinessTypeIsValid,
        hasError: businessTypeInputHasError,
        reset:resetBusinessType,
        valueChangeHandler:businessTypeInputChangeHandler,
        valueBlurHandler:businessTypeInputBlurHandler,

    }= useInput((value:string) => value.trim() !== "");
    const{
        value:enteredService,
        isValid:enteredServiceIsValid,
        hasError: serviceInputHasError,
        reset:resetService,
        valueChangeHandler:serviceInputChangeHandler,
        valueBlurHandler:serviceInputBlurHandler,

    } = useInput((value:string) => value.trim() !== "");



    const onsubmitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!enteredNameIsValid || !enteredEmailIsValid || !enteredPhoneIsValid ||
            !enteredBusinessTypeIsValid || !enteredServiceIsValid) {
            return;
        }
        const formData = {
            name: enteredName,
            email: enteredEmail,
            phone: enteredPhone,
            businessType: enteredBusinessType,
            service: enteredService,
        }


        // dispatch(formActions.openForm());

        const sendFormDataResponse = await RestClient.sendFormData(formData);

        if (sendFormDataResponse) {
            dispatch(formActions.openForm({
                isOpen:true,
                status:"Success",
                message: 'Thank you very much for your message.I will contact you soon!',
                isSend:true,
            }))
        } else {
            dispatch(formActions.openForm({
                isOpen:true,
                status:"Error",
                message: 'Sending form data error !',
                isSend:true,
            }))
        }
        resetName();
        resetEmail();
        resetPhone();
        resetBusinessType();
        resetService();

    }

    let formIsValid = false;
    if(enteredNameIsValid && enteredEmailIsValid && enteredPhoneIsValid && enteredBusinessType && enteredServiceIsValid){
        formIsValid = true;
    }

    // if(!nameInputHasError && !emailInputHasError && !phoneInputHasError && !businessTypeInputHasError && !serviceInputHasError){
    //     formIsValid = true;
    // }


    return(


        <section className={classes.contact} id="section_contact">
            {isSend && <Confirm />}
            <div >
                <div className={classes.form_title}>
                    <h1>ALL American Payments</h1>
                    <h3>Payment Processing Your Business Can Depend ON!</h3>
                    <h3>818.979.9727</h3>
                </div>

                <div className={classes.formGroup}>
                    <form onSubmit={onsubmitHandler} >
                        <div className={classes.flex_container}>
                            <div >
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Name"
                                    onChange={nameInputChangeHandler}
                                    onBlur={nameInputBlurHandler}
                                    value={enteredName}
                                />
                                {nameInputHasError && <p className={classes.error_text}>Name must not be empty!</p>}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    id="email"
                                    placeholder="Email Address"
                                    onChange={emailInputChangeHandler}
                                    onBlur={emailInputBlurHandler}
                                    value={enteredEmail}
                                />
                                {emailInputHasError && <p className={classes.error_text}>Email is not correct!</p>}
                            </div>
                        </div>


                        <div className={classes.flex_container}>
                            <div >
                                <input
                                    type="text"
                                    id="phone"
                                    placeholder="Phone"
                                    onChange={phoneInputChangeHandler}
                                    onBlur={phoneInputBlurHandler}
                                    value={enteredPhone}
                                />
                                {phoneInputHasError && <p className={classes.error_text}>Phone Number is not correct!</p>}
                            </div>

                            <div >
                                <input
                                    type="text"
                                    id="businessType"
                                    placeholder="Business Type"
                                    onChange={businessTypeInputChangeHandler}
                                    onBlur={businessTypeInputBlurHandler}
                                    value={enteredBusinessType}
                                />
                                {businessTypeInputHasError && <p className={classes.error_text}>Business type is not empty!</p>}
                            </div>
                        </div>



                        <div className={classes.last_div}>
                            <div>
                            <input
                                className={classes.special_input}
                                type="text"
                                name="service"
                                placeholder="Product and/or Service"
                                onChange={serviceInputChangeHandler}
                                onBlur={serviceInputBlurHandler}
                                value={enteredService}
                            />
                            </div>


                        </div>
                        <div className={classes.special_input}>
                            {serviceInputHasError && <p className={classes.error_text}>Service is not correct!</p>}
                        </div>
                        <div className={classes.button_group}>
                            <button
                                disabled={!formIsValid}
                                style={!formIsValid ? { pointerEvents: "none" } : {}}
                                type="submit"
                                id="submit" name="submit"
                                value="submit">
                                <span id="send_form"><FaIcons.FaEnvelope /></span><span id="sendBButton">SEND MESSAGE</span>
                            </button>
                            <p >We'll do our best to get back to you within 6-8 working hours.</p>
                        </div>
                    </form>


                </div>

            </div>
        </section>

    )
}
export default ContactPage;