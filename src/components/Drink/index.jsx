import './style.css';
import { Layer } from '../Layer';

export const Drink = ({id, name, ordered, image, layers}) => {
    return (
        <>
            <div className="drink">
                <div className="drink__product">
                    <div className="drink__cup">
                    <img src={image} />
                    </div>
                    <div className="drink__info">
                    <h3>{name}</h3>
                    {layers.map((layer, index) => (
                        <Layer
                            key={index}
                            color={layer.color}
                            label={layer.label} />
                    ))}
                    </div>
                </div>
                <form className="drink__controls" data-id={id} data-ordered={ordered}>
                    <input type="hidden" className="order-id" value="0" />
                    {ordered ? (
                        <button type="submit" className="order-btn order-btn--ordered">Zrušit</button>
                    ) : (
                        <button type="submit" className="order-btn">Objednat</button>
                    )}
                </form>
            </div>        
        </>
    )
}

// poznámka pro mě: v layers.map používám jako key index, který vytváří .map() automaticky, nejedná se o id z api, protože layers v api nemá žádný unikátní identifikátor