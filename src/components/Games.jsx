export default function Games(props){
    return(
        <article className="game-card">
                <img src={props.img} height="200px"/>
                <div className="game-container">
                    <h1>{props.name}</h1>
                    <p>Price: {props.price}</p>
                    <p>Rating: {props.rating}</p>
                    {props.tag && (
                        <span className="tag">
                            {props.tag}
                        </span>
                    )}
                    <p className="add-to-cart">🛒</p>
                </div>
        </article>
    )
}