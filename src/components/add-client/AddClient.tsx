import React from 'react';
import s from './AddClient.module.css'
const AddClient = () => {
    return (
        <div>
            <form className={s.form}>
                <input type="text" name='name'/>
                <input type="text" name='surname'/>
                <input type="text" name='age'/>
                <input type="tel" name='phoneNumber'/>
                <input type="email" name='email'/>
                <div>
                <input type="radio" name='gender' value='male'/>
                <input type="radio" name='gender' value='female'/>
                <input type="radio" name='gender' value='another'/>
                </div>
                <div>
                <input type="radio" name='subscriptionType' value='basic'/>
                <input type="radio" name='subscriptionType' value='standard'/>
                <input type="radio" name='subscriptionType' value='premium'/>
                </div>
            </form>
            
        </div>
    );
};

export default AddClient;