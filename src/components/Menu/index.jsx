import './style.css';
import { Drink } from '../Drink';

export const Menu = () => {
    return (
        <>
        <section id="menu" className="menu">
                <div className="container">
                    <h2>Naše nabídka</h2>
                    <p className="menu-intro">
                        Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
                    </p>
                    <div className="drinks-list">
                       <Drink name='espresso' image='https://images.unsplash.com/photo-1691442097460-9f6c47012976?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                    </div>

                    <div className="order-detail">
                        <a href="/order.html">Detail objednávky</a>
                    </div>
                </div>
            </section>       
        </>
    )
}