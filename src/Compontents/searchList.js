import Item from './Item'
import { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext'



const SearchList = ({ filteredProducts }) => {

    const { addFavourites, selectProduct } = useContext(ProductContext)


    const filtered = filteredProducts.map((product) => {
        return (
            <>
                <div onClick={() => selectProduct(product)}>
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