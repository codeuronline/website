import React from 'react';

const Form = () => {
    return (
        <div className='form'>
             
            <form action="">
            <h1>
                <div className='element'>
                        <div className='objet'>
                            <label className='label1' htmlFor="">Login</label>
                            <input className='input1' type="text" /><br />
                            <label className='label2' htmlFor="">Mot de passe</label>
                            <input className='input2' type="password" /><br />
                            <button className='button' type="submit" >Valider</button>
                            <button className='button' type="cancel" >Annuler</button>
                        </div>
                </div>
                    
        </h1>   
            </form>
            
        </div>
    );
};

export default Form;