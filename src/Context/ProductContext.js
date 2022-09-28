import { useEffect, createContext, useState } from 'react'



export const ProductContext = createContext()

const ProductsProvider = ({ children }) => {

    const root = "https://front-test-api.herokuapp.com/"
    let id = "1"
   

    const [products, setProducts] = useState([])
    const [favouriteProducts, setFavouriteProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState({})

    const endpoints = {
        getAll: "api/product",
        getOne: `api/product/${selectedProduct.id}`,
        post: "api/cart"

    }

    function selectProduct(e) {
        console.log(e);
        setSelectedProduct(e)
        
    }

    useEffect(() => {


        fetch(`${root}${endpoints.getAll}`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
            })

            
           
    }, [selectedProduct])




 


    function addFavourites(item) {
        const newArr = [...favouriteProducts]
        newArr.push(item)
        setFavouriteProducts(newArr)
        console.log(favouriteProducts);

    }

    return (
        <ProductContext.Provider value={{ products, favouriteProducts,selectedProduct, addFavourites, selectProduct }}>
            {children}
        </ProductContext.Provider>
    )
}

export { ProductsProvider }


