import "../styles/Card.css";

export default function Card() {
  return (
    <section className="card">
      <img
        className="card__img"
        src="https://source.unsplash.com/WLxQvbMyfas"
        alt=""
      />
      <div className="card__info">
        <p className="card__location">
            <img src="./images/pin-map-icon.svg" alt="" />{" "}
            <span className="card__country">JAPAN </span>
            <a
            className="card__link"
            href="https://goo.gl/maps/Hqin2L1qa9y9t51v6"
            target="_blank"
            rel="noreferrer"
            >
            View on Google Maps
            </a>
        </p>
        <h2 className="card__title">Mount Fuji</h2>
        <p className="card__date">12 jan, 2021 - 24 jan, 2021</p>
        <p className="card__description">
            Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
            (12,380 feet). Mount Fuji is the single most popular tourist site in
            Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </section>
  );
}
