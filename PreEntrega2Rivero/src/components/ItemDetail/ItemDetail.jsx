import {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'

import {  useCartContext } from '../Context/CartContext'

const ItemDetail = ({id, name, img, price, stock, description}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useCartContext()

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
            </section>
            <footer className="ItemFooter">
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='Option'> Terminar compra </Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )
                    
                }
                
            </footer>

        </article>
    )
}

export default ItemDetail