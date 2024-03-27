import React from "react";

const NotificationCard = ({ line1, line2, line3 }) => {
  return (
    <div className="flex items-center justify-between py-2 border-t border-gray-200">
      <div>
        <div>

        <p className="text-sm text-gray-600">{line1}</p>
        </div>
        <p className="text-sm text-gray-600">{line2}</p>
        <p className="text-sm text-gray-600">{line3}</p>
      </div>
      <i
        className="fa fa-exclamation-circle  text-gray-600"
        aria-hidden="true"
      ></i>
    </div>
  );
};

const Notifications = () => {
  const notifications = [
    {
      line1: "KBL 175 G",
      line2: "10/2/2020 -14:00",
      line3: "Kapenguria Deport",
    },
    { line1: "KBS 195 H", line2: "12/2/2020 -16:00", line3: "Nyeri Deport" },
    { line1: "KBS 178 V", line2: "14/2/2020 -16:00", line3: "Nairobi Deport" },
    { line1: "KBV 17F V", line2: "14/2/2020 -16:00", line3: "Taita Deport" },
  ];

  return (
    <div>
      <h4 className="text-sm font-medium text-gray-500 mb-2">
        RECENT NOTIFICATIONS
      </h4>
      {notifications.map((notification, index) => (
        <NotificationCard
          key={index}
          line1={notification.line1}
          line2={notification.line2}
          line3={notification.line3}
        />
      ))}
    </div>
  );
};

export default Notifications;
