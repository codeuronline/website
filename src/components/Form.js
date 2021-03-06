import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    const notify = () => { toast("hello") };    
    return (
        
            <div className='element'>
                    <form action="">
                            <h1 className='objet'>
                                <label className='label1' htmlFor="">Login</label>
                                <input className='input1' type="text" /><br />
                                <label className='label2' htmlFor="">Mot de passe</label>
                                <input className='input2' type="password" /><br />
                                <button className='button' onClick={notify} type="submit" >Valider</button>
                                <button className='button' type="cancel" >Annuler</button>
                        </h1>                      
                    </form>
                    <ToastContainer/>
                </div>    
    );
};

export default Form;