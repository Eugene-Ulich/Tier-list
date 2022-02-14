import { useState, useRef } from "react";
import { defaultLabel } from "../controller/TierListProvider";
import ImagePreveiw from "./ImagePreveiw";
import RowLabel from "./RowLabel";

export default function CreateNewTierList() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [labels, setLabels] = useState(defaultLabel);
  const [images, setImages] = useState([]);
  const imageInput = useRef();
  //const imageVeiw = new FileReader();
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
          type="file"
          onChange={handleChange(setImages)}
          accept="image/png, image/jpeg"
          multiple
        />
        <br />
        {imageInput.current ? (
          <ImagePreveiw files={[...imageInput.current.files]} />
        ) : null}
        <div>
          {labels.map((item, index) => (
            <RowLabel name={item} index={index} key={index} />
          ))}
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
