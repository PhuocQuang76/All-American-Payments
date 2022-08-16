import {Fragment, useState} from "react";
import React from "react";
import classes from './Confirm.module.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {formActions} from "../../store/slices/openCloseFormSlice";



const Confirm = () => {

    const dispatch = useDispatch();
   const status = useSelector((state:RootState)=> state.closeOpenForm.status);
   const message = useSelector((state:RootState)=> state.closeOpenForm.message);

    const onClose = () => {
        dispatch(formActions.closeForm());
    }
    return(
        <Fragment>
            <div className={classes.backdrop} onClick={onClose}></div>
            <div className={classes.detail_modal}>
                {status === "Success" && <h4>{status}</h4>}
                {status === "Success" && <p>{message}</p>}

                {status === "Error" && <h4>{status}</h4>}
                {status === "Error" && <p>{message}</p>}

                <div className={classes.detail_modal__actions}>
                    <button
                        type="button"
                        onClick={onClose}
                    >
                        close
                    </button>
                </div>
            </div>
        </Fragment>
    )
}
export default Confirm;