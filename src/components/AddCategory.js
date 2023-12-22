import React, { useState } from 'react'
import prop from 'prop-types'



export const AddCategory = ({ setCategories }) => {
    
    const [inputValue, setInputValue] = useState( '' );
    
    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    };
    
    const handleSubmit = ( e ) => {
        // previene q el formulario renderise el camponente 
        e.preventDefault();

        if( inputValue.trim().length > 2 ){
            setCategories( cat => [ inputValue, ...cat  ]);
            setInputValue('');
        };


    };

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type='text'
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
};


AddCategory.propTypes = {
    setCategories: prop.func.isRequired,

};

// AddCategory.default = {
//     setCategories: 'Hola Mundo',
// };
