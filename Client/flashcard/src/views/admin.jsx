import React, { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "../public/css/admin.css"; // Custom styling
import { loginError as logErr } from "../utils/responses";
import MessageDisplay from "./partials/responseMessage";

const AdminProfile = () => {


  const location = useLocation();
  const { message, type } = location.state || {};

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));

    if (!token || !userDetails) {
      navigate('/', { state : { message : logErr, type : 'msg'}});
    }
  }, [navigate]);


  const actions = [
    { name: "Show All Cards", route: "/allcards", icon: "📄" },
    { name: "Delete Cards", route: "/delete-card", icon: "❌" },
    { name: "Create Cards", route: "/create-card", icon: "➕" },
    { name: "Update Cards", route: "/update-card", icon: "♻️" },
  ];

  return (
    <div className="profile-container">
      <MessageDisplay />
      {actions.map((action, index) => (
        <div className="card" key={index}>
          <div className="icon">{action.icon}</div>
          <h3>{action.name}</h3>
          <Link to={action.route} className="link">
            Go to {action.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AdminProfile;
