import { OrderItem } from "../OrderItem"

export const Order = ({items}) => {
    console.log(items);

    return (
        <>
            {items.length === 0 ? (
                <p className="empty-order">Zatím nemáte nic objednáno</p>
            ) : (
                items.map((item) => (
                <OrderItem 
                    key={item.id}
                    name={item.name}
                    image={`http://localhost:4000${item.image}`}
                />
            )))}
        </>
    )
}
