import React from "react";
import './style.css';
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { Feautres } from "./Components/Section/Features";
import { Footer } from "./Components/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Feautres />
        <Footer />
      </>
    );
  }
}

export default App;
