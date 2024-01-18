import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Reviews } from "./components/Reviews";
import { Specials } from './components/Specials';
// import { Contact } from './components/Contact';
// import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Posts } from "./components/Posts";
import { Postsaccordion } from "./components/Postsaccordion";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Posts />
      <Contact />

    </div>
  );
}
export default App;
