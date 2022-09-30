import { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../Context/ProductContext'
import "./actions.css"

const Actions = ({ colors, sims, id }) => {


    const { newProduct, setNewProduct, addCart } = useContext(ProductContext)


    const [colorCode, setColorCode] = useState("")
    const [storageCode, setStorageCode] = useState("")



    function handleColor(e) {
        setColorCode(e)
    }

    function handleStorage(e) {
        setStorageCode(e)
    }

    function handleActions() {

        setNewProduct({

            ...newProduct, id: id,
            colorCode: colorCode,
            storageCode: storageCode

        }
        )

        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(newProduct)
        // };

        // setTimeout(() => {
        //     fetch('https://front-test-api.herokuapp.com/api/cart', requestOptions)
        //         .then(response => response.json())
        //         .then(data => console.log(data));
        // }, 1000);

    }





    useEffect(() => {


    }, [colorCode, storageCode])


    return (
        <>
            <h2>Acciones del producto</h2>
            <div>
                <h3>Color</h3>

                <div className='colors' >
                    {
                        colors && colors.map((color, index) => {
                            return (
                                <>
                                    <div className='colors__colorContainer' onClick={() => handleColor(color, index)}>
                                        <h5>
                                            {color}
                                        </h5>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <h3>Almacenamiento</h3>
                <div>
                    {
                        sims && sims.map((sim, index) => {
                            console.log(sim, "sim");
                            return (
                                <>
                                    <div className='colors__colorContainer' onClick={() => handleStorage(sim)}>
                                        <h5>
                                            `{sim}`
                                        </h5>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className='button' onClick={() => addCart(newProduct)}>
                    <button>Añadir a la cesta</button>
                </div>
            </div>

        </>
    )
}

export default Actions