export default function Travel(props) {
    let formattedLocation = props.location.toUpperCase()
    formattedLocation = formattedLocation.split('').join(" ")
    return (
        <div className="travelComponent">
            <div className="travelComponent__imgContainer">
                <img alt="travel img" src={props.imageUrl} />
            </div>
            <div className="travelComponent__content">
                <div className="travelComponent__content__localisation">
                    <img alt="localisation icon" src="./assets/poi.png" />
                    <span>{formattedLocation}</span>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <h4>{props.startDate} - {props.endDate}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    )
}