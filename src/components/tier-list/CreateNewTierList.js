import React, { useState, useRef } from "react";

export default function CreateNewTierList() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [images, uploadImages] = useState([]);
  const imageInput = useRef();
  const handleChange = (stateHandler) => (event) =>
    stateHandler(event.target.value);
  function handleNewTierlist(event) {
    event.preventDefault();
  }

  return (
    <div>
      <h1>Custom Tier List</h1>
      <p>Create your own tier list template</p>
      <form onSubmit={handleNewTierlist}>
        <input
          value={name}
          onChange={handleChange(setName)}
          type="text"
          placeholder="Name your Tier List..."
          required
        />
        <br />
        <input
          value={description}
          onChange={handleChange(setDescription)}
          type="textarea"
          placeholder="Descripe your Tier List..."
        />
        <br />
        <input
          ref={imageInput}
          onChange={handleChange(uploadImages)}
          multiple
          type="file"
        />
        <br />
        <p>
          {imageInput.current ? console.log(imageInput.current.files[0]) : "no"}
        </p>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
