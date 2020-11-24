import './App.css';
import Header from "./Components/Header/Header";
import MainIntro from "./Components/MainIntro/MainIntro";
import Features from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
     <Header/>
     <MainIntro/>
     <Features/>
     <Footer/>
    </div>
  );
}

export default App;
