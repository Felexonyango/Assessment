
import React from "react";

const NotificationCard = ({ notification }) => {
  const iconSquareStyle = {
    width: "30px",
    height: "30px",
    backgroundColor: notification.iconColor,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "25px"
  };
  const cardStyle = {
    backgroundColor: notification.backgroundColor,
    padding: "10px", 
    marginBottom: "10px", 
    borderRadius: "10px", 
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)" 
  };

  
  

  return (
    <div className="notification-card" style={cardStyle}>
    <div className="flex items-center justify-between py-2 ml-2  ">
     
      <div className="icon-square flex items-center justify-center" style={iconSquareStyle}  >
       
        {notification.id === 1 && (
          <i className={`fa ${notification.icon}  text-white`} aria-hidden="true"></i>
        )}
        {notification.id === 2 && (
          <i className={`fa ${notification.icon}  text-white`} aria-hidden="true"></i>
        )}
        {notification.id === 3 && (
          <i className={`fa ${notification.icon}  text-white`} aria-hidden="true"></i>
        )}
        {notification.id === 4 && (
          <i className={`fa ${notification.icon}  text-white`} aria-hidden="true"></i>
        )}
           
      </div>

      
        <div  className="ml-4  mr-2">
          <p className="text-sm  text-gray-600">
            {notification.line1}
          </p>
          <p className="text-sm text-gray-600">
            {notification.line2}
          </p>
          <p className="text-sm  font-bold"  style={{ color:'#76e5e0'}}>
            {notification.line3}
          </p>
        </div>
       
    
        <div className="flex-grow text-end mr-3">
          <i className="fa fa-exclamation-circle text-gray-600" aria-hidden="true"></i>
        </div>
    </div>
    </div>
  );
};

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      icon: "fa-battery-half",
      line1: "KBL 175 G",
      line2: "10/2/2020 -14:00",
      line3: "Kapenguria Deport",
      iconColor: "#8B0000",
      backgroundColor: "#f8faff"
    },
    { 
      id: 2,
      icon: "fa-car",
      line1: "KBS 195 H", 
      line2: "12/2/2020 -16:00", 
      line3: "Nyeri Deport" ,
      iconColor: "#F08080",
      backgroundColor: "#f8faff"
    },
    { 
      id: 3,
      icon: "fa-train",
      line1: "KBS 178 V", 
      line2: "14/2/2020 -16:00", 
      line3: "Nairobi Deport" ,
      iconColor: "#008080",
      backgroundColor: "#f8faff"
    },
    { 
      id: 4,
      icon: "fa-clock",
      line1: "KBV 17F V", 
      line2: "14/2/2020 -16:00", 
      line3: "Taita Deport",
      iconColor: "#E36000 ",
      backgroundColor: "#eff6ff"
    },
    
   
  ];

  return (
    <div style={{ maxHeight: "400px", overflowY: "auto" }}>
      <h4 className="text-sm font-bold text-gray-500 mb-2 text-center">
        RECENT NOTIFICATIONS
      </h4> 
      
      {notifications.map((notification, index) => (
        <NotificationCard
          key={index}
          notification={notification}
        />
      ))}
    </div>
  );
};

export default Notifications;

