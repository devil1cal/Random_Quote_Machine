//import axios from "axios";
import React, { Component } from "react";
import QuoteContent from "./apiSlice";
import "./styled.scss";

class App extends Component {
  render() {
    return (
      <div className="mainbackground">
        <div id="grid" className="gridPlace"></div>
        <div className="quotePlace">
          <QuoteContent />
        </div>
      </div>
    );
  }
}
export default App;
