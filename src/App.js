import Footer from "./components/Footer";
import Header from "./components/Header";
import NewsFeed from "./components/NewsFeed";
import OpenAccount from "./components/OpenAccount";
import Popup from "./components/Popup";
import Ribbon from "./components/Ribbon";
import "./App.css"
import Slider from "./components/Slider";


function App() {
  return (
    <div>
      <Ribbon />
      <Header />
      <OpenAccount />
      <NewsFeed />
      <Popup/>
      <Slider/>
      <Footer/>
    </div>
  );
}

export default App;
