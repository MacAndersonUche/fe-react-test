import Header from "./components/header";
import Footer from "./components/footer/Footer";
import Instructions from "./instructions";
import "./App.css";
import { useEffect, useState } from "react";
import Poster from "./components/body/poster";

const App = () => {

  const [details, setDetails] = useState([]);


  async function fetchData() {
    try {

      //Make request to API
      const response = await fetch(" http://localhost:3000/movies.json");

      //checking if response is ok

      if (response.ok) {
        const jsonresponse = await response.json();

        console.log(jsonresponse);
        setDetails(jsonresponse);

      } else {

        throw new Error("Response status is " + response.status)
      }



    } catch (error) {

      console.log(error)

    }
  };


  useEffect(() => {

    fetchData();

  }, [])



  return (
    <div className="App">
      <Header />
      <Instructions />
      <Poster details={details} />
      <Footer />
    </div>
  );
};

export default App;
