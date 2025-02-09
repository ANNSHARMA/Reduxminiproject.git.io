import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
    <forHTMLm className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
      
      <div className="mb-4">
        <label forHTML="name" className="block text-sm font-medium text-gray-700 mb-2">Contact number</label>
        <input 
          type="text" 
          id="name" 
          placeholder="Enter your contact number" 
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
  
      <div className="mb-4">
        <label forHTML="score" className="block text-sm font-medium text-gray-700 mb-2">Email id</label>
        <input 
          type="text" 
          id="score" 
          placeholder="Enter your email address" 
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
  
     
  
      <div className="mt-6">
        <button 
          type="submit" 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
        >
          Submit
        </button>
      </div>
    </forHTMLm>
  </div>
  
  )
}

export default Contact