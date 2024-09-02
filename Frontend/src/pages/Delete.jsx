import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';


const Delete = () => {
  const {id}=useParams()
  useEffect(() => {
    axios
    .delete(`http://localhost:3000/event/${id}`)
    .then((res) => {
      console.log(res.data.message)
      setMessage('Event created successfully!');
    
    })
    .catch((err) => {
      console.error("Error fetching events:", err);
    });
  
  
  }, [id])
  
 

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

      <div className="bg-indigo-100 text-center py-6 shadow-md mt-4 mx-4 rounded-lg">
        <p className="text-indigo-900 font-semibold text-xl">
          Event Deleted Successfully
        </p>
        <p className="text-gray-600 mt-2">
          The event has been successfully removed from your list.
        </p>
      </div>

      <div className="flex justify-center items-center h-96 mt-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-800 font-semibold text-lg mb-4">
            Event has been deleted.
          </p>
          <Link
            to="/"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center"
          >
            Back to Events
          </Link>
        </div>
      </div>
    </>
  );
};

export default Delete;
