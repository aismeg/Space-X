import React from "react";
import './style.css';
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { Feautres } from "./Components/Section/Features";
import { Footer } from "./Components/Footer/Footer";

class App extends React.Component {

  state = {
    rocket: 'Falcon 1',
  };

  render() {
    return (
      <>
        <Header />
        <Main rocket={this.state.rocket} />
        <Feautres />
        <Footer />
      </>
    );
  }
}

export default App;
