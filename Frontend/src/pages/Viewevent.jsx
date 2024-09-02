import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Viewevent = () => {
  const { id } = useParams();
  const [event, setEvent] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/event/${id}`)
      .then((res) => {
        setEvent(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching event:", err);
      });
  }, [id]);

  

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 h-16 flex justify-between items-center px-6 shadow-lg">
        <h3 className="text-white font-extrabold text-2xl">Event Craft</h3>
        <Link
          to="/"
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-28 h-10 rounded-lg font-semibold text-indigo-900 shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center"
        >
          Events
        </Link>
      </div>

      <div className="bg-indigo-100 text-center py-4 shadow-md mt-4">
        <p className="text-indigo-900 font-semibold text-lg">
          Your ultimate platform to manage and create memorable events.
        </p>
      </div>

      <div className="p-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">{event.title}</h2>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">Date: {event.date}</span>
          </div>
          <p className="text-gray-700 mb-4">Location: {event.location}</p>
          <p className="text-gray-700 mb-4">Description: "{event.description}"</p>
          <div className="flex justify-end">
            <Link
              to="/"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition duration-300"
            >
              Back to Events
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Viewevent;
