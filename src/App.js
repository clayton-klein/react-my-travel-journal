import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import cardsData from "./cardsData.js";

export default function App() {
  
  const cardsArray = cardsData.map((card) => {
    return <Card key={card.id} cardInfo={card} />;
  });

  return (
    <div className="App">
      <Header />
      <main className="cards-container">
        {cardsArray}
      </main>
      <Footer />
    </div>
  );
}
