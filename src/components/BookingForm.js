import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookingForm = ({ shows }) => {
  const [stateup, setstateUp] = useState([]);
  const { id } = useParams();
  const initialValue = {
    "Movie Name": stateup && stateup.show && stateup.show.name,
    "Movie Rating": stateup && stateup.show && stateup.show.rating.average,
    "Moving Language": stateup && stateup.show && stateup.show.language,
    "Movie Premired": stateup && stateup.show && stateup.show.premiered,
    "Movie Days": stateup && stateup.show && stateup.show.schedule.days,
    "Movie Time": stateup && stateup.show && stateup.show.schedule.time,
    "Movie Runtime": stateup && stateup.show && stateup.show.runtime,
    "Movie Tickets": "",
    "Movie Country":
      stateup &&
      stateup.show &&
      stateup.show.network.country &&
      stateup.show.network.country.name,
  };
  const [initvalue, setInitvalue] = useState(initialValue);
  function handlechange(e) {
    setInitvalue({ ...initialValue, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    
    if(+initvalue["Movie Tickets"]>0){
        alert("Data is Being stored at localStorage");
        localStorage.setItem("Bookings", JSON.stringify(initvalue));
    }else{
        alert("Please enter number of tickets")
    }
  }
  useEffect(() => {
    setstateUp(shows.find((e) => e.show.id == id));
  }, [shows]);
  return (
    <div className="w-full h-screen bg-white flex justify-center items-center">
      <div className=" w-1/2 mx-auto  p-5 shadow-2xl bg-white">
        <h1 className="text-xl font-semibold text-center mb-2">Booking Form</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="flex flex-col gap-2">
            <p className="font-serif">
              <span className="font-semibold text-lg font-sans ">
                Movie Name :
              </span>
              {stateup && stateup.show && stateup.show.name}
            </p>
            <p className="font-serif">
              <span className="font-semibold text-lg font-sans">
                Movie Rating :
              </span>
              {stateup && stateup.show && stateup.show.rating.average}
            </p>
            <p className="font-serif">
              <span className="font-semibold text-lg font-sans">
                Language :{" "}
              </span>
              {stateup && stateup.show && stateup.show.language}
            </p>
            <p className="font-serif">
              <span className="font-semibold text-lg font-sans">
                Premiered :
              </span>
              {stateup && stateup.show && stateup.show.premiered}
            </p>
            <p className="font-serif">
              <span className="font-semibold text-lg font-sans">
                Available Days :
              </span>
              {stateup && stateup.show && stateup.show.schedule.days}
            </p>
            <p className="font-serif">
              <span className="font-semibold text-lg font-sans">
                Available Time :
              </span>
              {stateup && stateup.show && stateup.show.schedule.time}
            </p>
            <p className="font-serif">
              <span className="font-semibold text-lg font-sans">
                {" "}
                Runtime :{" "}
              </span>
              {stateup && stateup.show && stateup.show.runtime}
            </p>
            <p className="font-serif">
              <span className="font-semibold text-lg font-sans">
                {" "}
                Country :{" "}
              </span>
              {stateup &&
                stateup.show &&
                stateup.show.network.country &&
                stateup.show.network.country.name}
            </p>
            <a
              href={
                stateup &&
                stateup.show &&
                stateup.show._links.previousepisode &&
                stateup.show._links.previousepisode.href
              }
              className="text-blue-400 text-center underline mb-2"
            >
              <span className="text-blue-600">PrevEpisode : </span>
              {stateup &&
                stateup.show &&
                stateup.show._links.previousepisode &&
                stateup.show._links.previousepisode.name}
            </a>
          </div>
          <div className="font-serif">
            <label className="font-semibold text-lg font-sans">
              Total Tickets :
            </label>
            <input
              type="number"
              className="border-2 outline-none border-black rounded"
              value={initvalue["Movie Tickets"]}
              name="Movie Tickets"
              onChange={(e) => handlechange(e)}
            ></input>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 px-5 py-2 rounded my-5 text-white mx-auto hover:bg-blue-600"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
