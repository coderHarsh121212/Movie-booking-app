import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const ShowList = ({ shows }) => {
  const [clickShow, setClickShow] = useState(null);
  const navigate = useNavigate();

  return (
    <div>
      {shows ? (
        <div className="mx-auto px-4 py-8 grid grid-cols-2 bg-blue-100">
          <div className="w-full">
            <h1 className="text-2xl font-bold mb-4 text-center">TV Shows</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-screen overflow-scroll bg-scroll border-2 p-2 rounded border-blue-500 shadow-2xl">
              {shows &&
                shows.map((show, index) => (
                  <div
                    key={index}
                    className="border-2 border-blue-600 rounded sm:p-2 shadow-2xl"
                  >
                    <img
                      src={show.show.image && show.show.image.medium}
                      alt={show.show.name}
                      className="w-full"
                    />
                    <h2 className="text-md font-bold mb-1 sm:text-xl px-1">
                      {show.show.name}
                    </h2>
                    <p className="italic text-gray-600 mb-1 text-sm sm:text-lg px-1">
                      Genres: {show.show.genres.join(", ")}
                    </p>
                    <div className="mx-auto p-1">
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold md:py-2 md:px-4 rounded p-1"
                        onClick={() => setClickShow(show.show)}
                      >
                        View Summary
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {clickShow ? (
            <div className="w-full">
              <h1 className="text-2xl font-bold mb-4 text-center">
                Description
              </h1>
              <div className="flex-col p-5 gap-5">
                <div className="flex sm:gap-2 justify-center items-center">
                  <h1 className="font-sans text-sm sm:text-xl">Movie Name:</h1>
                  <p className="font-serif text-xs text-blue-500 sm:text-lg">
                    {clickShow && clickShow.name}
                  </p>
                </div>
                <div className="flex flex-col sm:gap-1">
                  <h1 className="font-sans text-sm sm:text-xl">Description:</h1>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: clickShow && clickShow.summary,
                    }}
                  />
                  ;
                </div>
                <div className="w-20 mx-auto my-2 sm:w-32">
                  <button
                    className="bg-blue-500 sm:px-5 sm:py-2 text-white rounded w-full hover:bg-blue-400 text-xs px-3 py-1 sm:text-lg"
                    onClick={() =>
                      navigate(`/BookTicket/${clickShow && clickShow.id}`)
                    }
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-sm sm:text-xl w-full h-screen flex justify-center items-center">
              Click on Summary Button for getting any Movie Summary
            </div>
          )}
        </div>
      ) : (
        <div className="w-full h-screen flex items-center justify-center bg-black">
          <span class="loader"></span>
        </div>
      )}
    </div>
  );
};

export default ShowList;
