import "../styles/Card.css";

export default function Card(props) {
  return (
    <section className="card">
      <img
        className="card__img"
        src={props.cardInfo.imageUrl}
        alt=""
      />
      <div className="card__info">
        <p className="card__location">
            <img src="./images/pin-map-icon.svg" alt="" />{" "}
            <span className="card__country">{props.cardInfo.location} </span>
            <a
            className="card__link"
            href={props.cardInfo.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            >
            View on Google Maps
            </a>
        </p>
        <h2 className="card__title">{props.cardInfo.title}</h2>
        <p className="card__date">{`${props.cardInfo.startDate} - ${props.cardInfo.endDate}`}</p>
        <p className="card__description">
            {props.cardInfo.description}
        </p>
      </div>
    </section>
  );
}
