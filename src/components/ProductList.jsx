export default function ProductList({ store }) {
    const data = [
        {
            name: "Chicken",
            price: 4.99
        },
        {
            name: "Bacon",
            price: 4.99
        }
    ]
    
    return (
        <section className="text-white">
            <h2>{store}</h2>
            <ul>
                {data.map(product => <li key={product.name}>{product.name} - {product.price}</li>)}
            </ul>
        </section>
    )
}