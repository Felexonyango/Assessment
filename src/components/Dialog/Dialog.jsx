import React from 'react'

const Dialog = ({ isOpen, onClose, data }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-4 rounded-lg">
          <h2 className="text-lg font-semibold">{data.title}</h2>
          <p className="text-sm text-gray-600">{data.completed ? 'Completed' : 'Not Completed'}</p>
          <button onClick={onClose} className="mt-2 px-4  py-2 bg-gray-600 text-white rounded-md">Close</button>
        </div>
      </div>
    );
  };

  export default Dialog