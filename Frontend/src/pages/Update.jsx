import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
  const {id}=useParams()
  const[title,settitle]=useState('')
  const[location,setlocation]=useState('')
  const[description,setdescription]=useState('')
  const[date,setdate]=useState('')
  const [message, setMessage] = useState('');

const create=()=>{
  if (!title || !location || !description || !date) {
    setMessage('Please fill in all fields.');
    return;
  }
 
    const data={
      title,
      location,
      description,
      date
    }
    axios
      .put(`http://localhost:3000/event/${id}`,data)
      .then((res) => {
        console.log(res.data.message)
        setMessage('Event updated successfully!');
      
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
      });
  
}

  return (
    <>
    <div className="bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 h-16 flex justify-between items-center px-6 shadow-lg">
        <h3 className="text-white font-extrabold text-2xl">Event Craft</h3>
        <Link
          to="/"
          className="bg-gradient-to-r  from-yellow-400 to-yellow-500 w-28 h-10 rounded-lg font-semibold text-indigo-900 shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center"
        >
          Events
        </Link>
      </div>

      <div className="bg-indigo-100 text-center py-4 shadow-md">
        <p className="text-indigo-900 font-semibold text-lg">
          Your ultimate platform to manage and create memorable events.
        </p>
      </div>

      {message && (
          <div className="mb-4 p-2 text-center font-bold   text-white bg-yellow-500  rounded-lg">
            {message}
          </div>
        )}

      <div className="max-w-lg mx-auto bg-white p-8 mt-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-indigo-900 mb-6 text-center">
          Update Event</h2>
        
        <div className="mb-5">
          <label htmlFor="title" className="block text-gray-700 text-sm font-medium mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            required
            onChange={(e)=>{settitle(e.target.value)}}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
            placeholder="Enter event title"
          />
        </div>
        
        <div className="mb-5">
          <label htmlFor="location" className="block text-gray-700 text-sm font-medium mb-2">
            Location:
          </label>
          <input
            type="text"
            id="location"
            required
            onChange={(e)=>{setlocation(e.target.value)}}

            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
            placeholder="Enter event location"
          />
        </div>
        
        <div className="mb-5">
          <label htmlFor="description" className="block text-gray-700 text-sm font-medium mb-2">
            Description:
          </label>
          <textarea
            id="description"
            onChange={(e)=>{setdescription(e.target.value)}}

            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
            placeholder="Enter event description"
            rows="4"
          />
        </div>
        
        <div className="mb-5">
          <label htmlFor="date" className="block text-gray-700 text-sm font-medium mb-2">
            Date:
          </label>
          <input
            type="date"
            id="date"
            required
            onChange={(e)=>{setdate(e.target.value)}}

            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
          />
        </div>
        
        <div className="flex justify-end mt-6">
          <button 
          onClick={create}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
            Update Event
          </button>
        </div>
      </div>
      </>
  )
}

export default Update