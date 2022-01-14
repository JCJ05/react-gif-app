import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({category}) => {

   /* const[images, setImages] = useState([]);

    */
  
    const {data , loading } = useFetchGifs(category);


   // getGifs()

    return (
   <Fragment>
        <h3>{category}</h3> 
       
      <div className='card-grid'>
           
            <ul>

        
               {
                  data.map(image => {
                   
                     return <GifGridItem key={image.id} {...image}/>

                  })

               }     

            </ul>
            </div>

        </Fragment>
    )
}

GifGrid.propTypes = {

}

export default GifGrid
