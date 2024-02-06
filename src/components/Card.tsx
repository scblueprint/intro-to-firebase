import "./Card.css"

const Card = (props: {img: string, title: string, artist: string}) => {
    return (
        <div className="card-body">
            <img src={props.img} alt="" className="card-img"/>
            
            {/* Info for the card */}
            <div className="card-info">
                <p className="card-title">{props.title}</p>
                <p className="card-artist">{props.artist}</p>
            </div>
        </div>
    );
}

export default Card;