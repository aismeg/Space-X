import React from "react";
import './style.css';
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { Feautres } from "./Components/Section/Features";
import { Footer } from "./Components/Footer/Footer";
import FetchData from "./service/Fetchdata";

class App extends React.Component {

  fetchData = new FetchData();

  state = {
    rocket: 'Falcon 1',
    rocketFeatures: null
  };

  componentDidMount() {
    this.updateRocket();
  }

  updateRocket() {
    this.fetchData.getRocket()
      .then(data => data.find(item => item.name === this.state.rocket))
      .then(rocketFeatures => {
        this.setState({ rocketFeatures });
      });
  }


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
