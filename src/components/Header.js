import "../styles/Header.css";

export default function Header() {
  return (
    <header>
      <img
        className="header__icon"
        src="./images/world-icon.svg"
        alt="ícone do planeta Terra"
      />
      <h1 className="header__title">Meu Diário de Viagens :)</h1>
    </header>
  );
}
