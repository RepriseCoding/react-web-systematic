import "./App.css";

import Header_nav from "./Header_nav";
import Header from "./Header";
import Main_nav from "./Main_nav";
import Section from "./Section";
import Service from "./Service";
import Footer from "./Footer";
import Copyright from "./Copyright";

function App() {
  return (
    <div className="App">
      <Header_nav />
      <Header />
      <Main_nav />
      <Section />
      <Service />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
