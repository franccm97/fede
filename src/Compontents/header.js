import { useContext } from 'react'
import { ProductContext } from '../Context/ProductContext'
import { Link } from "react-router-dom"
import "./header.css"



const Header = () => {

    const { favouriteProducts } = useContext(ProductContext)

    const routes =
        [{
            route: "/",
            name: "List",

        }
            ,
        {
            route: "/details",
            name: "Details",
        }
        ]

    return (

        <div className='headerContainer'>
            <Link to={"/"}>
                <div className='headerContainer__icon'>

                </div>
            </Link>

            <div className='headerContainer__breadChumbs'>
                {routes.map((route) => {
                    return (
                        <>
                            <Link to={route.route}>
                                {route.name}
                            </Link>
                        </>
                    )
                })}
            </div>

            <div className='headerContainer__cart'>
                {favouriteProducts.length}
            </div>

        </div>
    )
}

export default Header