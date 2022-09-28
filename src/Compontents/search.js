import { useState, useEffect,useContext} from 'react'
import { ProductContext } from '../Context/ProductContext'
import SearchList from './searchList'
import "./search.css"


const Search = ({ products }) => {

    const { addFavourites } = useContext(ProductContext)

    const [searching, setSearching] = useState("")

    useEffect(() => {

    }, [searching])

    function handleSearch(e) {
        setSearching(e.target.value)
    }
    const filteredProducts = products.filter((product) => {
        return (
            product.model.toLowerCase().includes(searching.toLocaleLowerCase())
        )
    })

    return (
        <>
            <div className='input'>
                <input type={"search"} value={searching} placeholder={"Busca aquí"} onChange={handleSearch} />
            </div>
            <div onClick={()=> addFavourites( )}>
                <SearchList filteredProducts={filteredProducts} />
            </div>
        </>

    )
}

export default Search