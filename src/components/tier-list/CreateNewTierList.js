import { useState } from "react";
import { defaultLabel } from "../controller/TierListProvider";
import ImagePreveiw from "./ImagePreveiw";
import RowLabel from "./RowLabel";
import uploadImages from "../firebase/uploadImages";
import databaseUpdate from "../firebase/databaseUpdate";

export default function CreateNewTierList() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [labels, setLabels] = useState(defaultLabel);
  const [files, setFiles] = useState(null);
  const [urls, setUrls] = useState([]);
  //const [imgNames, setImgNames] = useState([]);
  //const imageVeiw = new FileReader();

  const handleChange = (stateHandler) => (event) =>
    event.target.files
      ? stateHandler(event.target.files)
      : stateHandler(event.target.value);

  async function handleCreation(event) {
    event.preventDefault();
    const filteredFiles = [...files].filter(
      (item) => item.type === "image/png" || item.type === "image/jpeg"
    );
    //TODO: refactor
    if (filteredFiles.length < 3) {
      return <p>You must upload at least 3 images (.jpg/.png)</p>;
    } else if (filteredFiles.length > 30) {
      return <p>Maximum number of images is 30. Please pick less images</p>;
    } //----------------------
    await uploadImages(filteredFiles, name, setUrls);
    const tierListObj = {
      name: name,
      description: description,
      labels: labels,
      list: urls.map((item, index) => {
        return {
          img: item,
          name: filteredFiles[index].name,
          label: "unordered",
          "row order": index,
        };
      }),
    };
    databaseUpdate(
      tierListObj,
      `https://tier-list-70ad0-default-rtdb.europe-west1.firebasedatabase.app/tier-lists/${name}.json`,
      "POST"
    );
    console.log(urls);
    console.log(tierListObj);
  }

  return (
    <div>
      <h1>Custom Tier List</h1>
      <p>Create your own tier list template</p>
      <form onSubmit={handleCreation}>
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
          type="file"
          onChange={handleChange(setFiles)}
          accept="image/png, image/jpeg"
          multiple
          required
        />
        <br />
        {files ? <ImagePreveiw files={[...files]} /> : null}
        <div>
          {labels.map((item, index) => (
            <RowLabel
              name={item}
              index={index}
              key={index}
              handleEdit={[labels, setLabels]}
            />
          ))}
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
