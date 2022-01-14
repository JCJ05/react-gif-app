
  import React, { useState } from 'react'
  import PropTypes from 'prop-types'
  
  const AddCategory = ({setCategories , categories}) => {
  
    const [inputValue, setInputValue] = useState('');

    const handlerInputChange = (e) => {
 
        setInputValue(e.target.value)

    }

    const handlerSumbit = (e) => {
  
        e.preventDefault();

        if(inputValue.trim().length > 2){
        
            setCategories([ inputValue , ...categories]);
            setInputValue('');

        }

      

    }

      return (
          <form onSubmit={handlerSumbit}>  
              
              <input 
                 type="text"
                 value={inputValue}
                 onChange={handlerInputChange}
              /> 

          </form>
      )
  }
  
  AddCategory.propTypes = {
      
    setCategories: PropTypes.func.isRequired

  }  
  
  export default AddCategory
  