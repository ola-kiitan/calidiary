import React, { useState } from "react";
import NewEntryForm from "./NewEntryForm";
import LogoIcon from "../assets/icons/Logo";
import "../styles/header.css";

const Header: React.FC = () => {
  const [showNewEntryForm, setShowNewEntryForm] = useState(false);

  const handleToggleNewEntryForm = () => {
    setShowNewEntryForm(!showNewEntryForm);
  };

  return (
    <header>
      <div className="app-logo">
        <div className="logo">
         <LogoIcon />
        </div>
        <span role="button" className="header-button" onClick={handleToggleNewEntryForm}>
          <h2>+</h2>
          <span className="hover-text">Add Entry</span>
        </span>
      </div>
      {showNewEntryForm && <NewEntryForm />}
    </header>
  );
};

export default Header;
