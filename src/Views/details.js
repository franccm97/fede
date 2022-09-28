import {useContext} from 'react'
import { ProductContext } from '../Context/ProductContext'
import Header from '../Compontents/header'


const Details = () => {

const {selectedProduct}  = useContext(ProductContext) 
  
  return (
    <div>
     {selectedProduct.model}
    </div>
  )
}

export default Details