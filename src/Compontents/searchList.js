import Item from './Item'
import { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext'
import "./search.css"



const SearchList = ({ filteredProducts }) => {

    const { addFavourites, selectProduct } = useContext(ProductContext)


    const filtered = filteredProducts.map((product) => {
        return (
            <>
                <div onClick={() => selectProduct(product)}  className="productDisplay">
                    <Item
                        imgUrl={product.imgUrl}
                        brand={product.brand}
                        model={product.model}
                        price={product.price}

                    />
                </div>

            </>
        )
    })


    return (
        <div>
            {filtered}
        </div>
    )
}

export default SearchList