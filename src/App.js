import "./App.css";
import ShowList from "./components/Screen";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookingForm from "./components/BookingForm";
function App() {
  const [response, setResponse] = useState([]);
  async function fetchApi() {
    try {
      const a = await axios.get("https://api.tvmaze.com/search/shows?q=all");
      setResponse(a.data);
    } catch (error) {
      console.log("Error" + error);
    }
  }
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowList shows={response} />}></Route>
        <Route path="/BookTicket/:id" element={<BookingForm shows={response}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
