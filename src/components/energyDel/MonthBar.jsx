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
    const year = startYear + Math.floor((startMonth + index) / 12);
    const monthIndex = (startMonth + index) % 12;
    return { year, monthIndex };
  });

  const monthLabels = [
    "JAN",
    "FEB",
    "MAR",
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

          {currentYear}
        <div className="">
          <div className="flex flex-wrap space-x-4 items-start">
            {months.map(({ year, monthIndex }) => (
              <div key={`${year}-${monthIndex}`} className="text-center mx-1">
                <div className="text-sm font-semibold  text-gray-500 mb-1">
                  {monthLabels[monthIndex]}
                </div>
                <div
                  className={`px-2 py-3 rounded-md ${
                    year === currentYear && monthIndex === currentMonth
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
