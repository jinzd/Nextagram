import React from "react";
import axios from "axios";
import "./App.css";
import LoadingIndicator from "./components/LoadingIndicator";
import HomePage from "./pages/homepage";

class App extends React.Component {
  state = {
    parentUsers: [],
    isLoading: true
  };
  componentDidMount() {
    // this.setState({ isLoading: true });
    // performing a GET requestt

    axios
      .get("https://insta.nextacademy.com/api/v1/users")
      .then(result => {
        // console.log(result.data);

        // If successful, we do stuffs with 'result'
        this.setState({ parentUsers: result.data, isLoading: false });
      })
      .catch(error => {
        // If unsuccessful, we notify users what went wrong
        console.log("ERROR: ", error);
      });
  }

  render() {
    const { parentUsers, isLoading } = this.state;

    return (
      <>
        <HomePage childUsers={parentUsers} />
        <div>{isLoading ? <LoadingIndicator /> : null}</div>
      </>
    );
  }
}

export default App;
