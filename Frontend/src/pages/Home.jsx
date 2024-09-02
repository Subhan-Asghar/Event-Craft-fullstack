import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((res) => {
        setEvents(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
      });
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 h-16 flex justify-between items-center px-6 shadow-lg">
        <h3 className="text-white font-extrabold text-2xl">Event Craft</h3>
        <Link
          to="/create"
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-28 h-10 rounded-lg font-semibold text-indigo-900 shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center"
        >
          Add Event
        </Link>
      </div>

      <div className="bg-indigo-100 text-center py-4 shadow-md">
        <p className="text-indigo-900 font-semibold text-lg">
          Your ultimate platform to manage and create memorable events.
        </p>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((data) => (
          <div
            key={data._id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
          >
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold text-xl text-indigo-900">{data.title}</h4>
              <span className="text-sm text-gray-500">{data.date}</span> 
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-gray-700">{data.location}</p> 
              <div className="flex justify-between items-center mt-4">
                <Link
                  to={`/event/${data._id}`}
                  className="text-indigo-900 hover:text-indigo-700 transition duration-300 font-semibold"
                >
                  View Details
                </Link>
                <div className="flex space-x-2">
                  <Link
                    to={`/update/${data._id}`}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition duration-300"
                  >
                    Update
                  </Link>
                  <Link
                    to={`/delete/${data._id}`}
                    className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition duration-300"
                  >
                    Delete
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
