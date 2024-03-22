import React from "react";

const Card = ({ title, completed,onClick  }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 m-4 w-55 hover:bg-gray-200" onClick={onClick}>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-600">
        {completed ? "Completed" : "Not Completed"}
      </p>
    </div>
  );
};

export default Card;
