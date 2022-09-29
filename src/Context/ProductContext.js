import { useEffect, createContext, useState } from 'react'




export const ProductContext = createContext()

const ProductsProvider = ({ children }) => {

    const root = "https://front-test-api.herokuapp.com/"



    const [products, setProducts] = useState([])
    const [favouriteProducts, setFavouriteProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState({})
    const [cart, setCart] = useState()
    const [newProduct, setNewProduct] = useState({
        id: "",
        colorCode: "",
        storageCode: ""
    })

    const endpoints = {
        getAll: "api/product",
        post: "api/cart"
    }

    function selectProduct(e) {
        setSelectedProduct(e)
    }

    useEffect(() => {


        fetch(`${root}${endpoints.getAll}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "adasdasd");
                setProducts(data)
            })
        console.log(newProduct);
    }, [newProduct])







    function addFavourites(item) {
        const newArr = [...favouriteProducts]
        newArr.push(item)
        setFavouriteProducts(newArr)
        console.log(favouriteProducts);

    }

    return (
        <ProductContext.Provider value={{ products, favouriteProducts, selectedProduct, newProduct, setNewProduct, addFavourites, selectProduct }}>
            {children}
        </ProductContext.Provider>
    )
}

export { ProductsProvider }


