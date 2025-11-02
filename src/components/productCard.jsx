export function ProductCard(props){
    return(
        <div>
            <h1>Product Name : {props.name}</h1>
            <h2>Price : ${props.price}</h2>
            <p>Description : {props.description}</p>
        </div>
    )
}