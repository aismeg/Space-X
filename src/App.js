import React from "react";
import './style.css';
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { Feautres } from "./Components/Section/Features";
import { Footer } from "./Components/Footer/Footer";
import FetchData from "./service/Fetchdata";
import db from "./jotisk";

class App extends React.Component {

  fetchData = new FetchData();

  state = {
    rocket: 'Falcon 1',
    rocketFeatures: null,
    rockets: [],
    company: null
  };


  componentDidMount() {
    this.updateRocket();
    this.updateCompany();
  }

  updateRocket() {
    this.fetchData.getRocket()
      .then(data => {
        this.setState({ rockets: data.map(item => item.name) });
        return data;
      })
      .then(data => data.find(item => item.name === this.state.rocket))
      .then(rocketFeatures => {
        this.setState({ rocketFeatures });
      });
  }

  updateCompany = () => {
    this.fetchData.getCompany()
      .then(company => this.setState({ company }))
  }

  changeRocket = rocket => {
    this.setState({
      rocket
    }, this.updateRocket);
  }
  render() {
    return (
      <>
        <Header rockets={this.state.rockets} changeRocket={this.changeRocket} />
        <Main rocket={this.state.rocket} />
        {this.state.rocketFeatures && <Feautres rocket={this.state.rocket} features={this.state.rocketFeatures} db={db} />}
        {this.state.company && <Footer {...this.state.company.links} updateCompany={this.updateCompany} />}
      </>
    );
  }
}

export default App;
