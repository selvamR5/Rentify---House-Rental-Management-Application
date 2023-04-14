import React, { useState } from "react";
import axios from "axios";


const MaintenanceRequestsForm = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/requests", { title, description })
      .then(() => {
        onClose();
      });
  };

  return (
    <form>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MaintenanceRequestsForm;
