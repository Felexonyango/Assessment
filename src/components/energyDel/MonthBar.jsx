import React, { useState } from "react";

const MonthBar = () => {
  const currentDate = new Date();
  const [startYear, setStartYear] = useState(2023);
  const [startMonth, setStartMonth] = useState(0);
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const totalMonths =
    (currentYear - startYear) * 12 + (currentMonth - startMonth) + 1;

  const months = Array.from({ length: totalMonths }, (_, index) => {
    const monthIndex = (startMonth + index) % 12;
    return monthIndex < 0 ? monthIndex + 12 : monthIndex;
  });

  const monthLabels = [
    "JAN",
    "FEB",
    "MARC",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  return (
    <div className="border-2 border-blue-500 rounded-lg mt-4">
      <div className="p-4">
        <h6 className="font-bold text-gray-600">Contract Month</h6>
        <hr className="mx-4 border-2 border-blue-500 h-px w-full" />
        <div className="text-blue-400">
          {new Date(startYear, startMonth).toLocaleString("en", {
            month: "long",
          })}{" "}
          {startYear}
        </div>
        <div className="">
          <div className="flex flex-wrap space-x-4 items-start">
            {months.map((monthIndex) => (
              <div key={monthIndex} className="text-center mx-1">
                <div className="text-sm font-semibold  text-gray-500 mb-1">
                  {monthLabels[monthIndex]}
                </div>
                <div
                  className={`px-2 py-3 sp rounded-md ${
                    monthIndex === currentMonth
                      ? "bg-blue-500 text-white"
                      : "bg-customGray"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthBar;
