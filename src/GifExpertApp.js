
import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = props => {
 
   // const categories = ['One Punch' , 'Samurai X' , 'Dragon Ball']
    
   const [categories, setCategories] = useState(['One Punch']);
  
  /* const handlerApp = (e) => {
        
     setCategories([...categories , 'Spiderman 3']);

   }*/

    return (
       
        <Fragment>
         
           <h2>GifExpertApp</h2>
           <AddCategory setCategories={ setCategories } categories={categories}/>
           <hr />

           

           <ul>
             
              {
                   categories.map((category , index) => {
                     
                     return <GifGrid key={category} category={category}></GifGrid>

                   })

              }

           </ul>

        </Fragment>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp
