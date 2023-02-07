import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main className="cards-container">
        <Card />
      </main>
      <Footer />
    </div>
  );
}
