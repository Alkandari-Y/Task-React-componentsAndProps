export default function ProductDetails({ data }) {
    return (
        <div className="product-item">
            <img className="product-image" src={data.image} alt={`Image of ${data.name}`} />
            <h2 className="product-title">{data.name}</h2>
            <p className="product-price">{ data.price }KD</p>
        </div>
    )
}
