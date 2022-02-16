import { useState } from "react";
import { defaultLabel } from "../controller/TierListProvider";
import ImagePreveiw from "./ImagePreveiw";
import RowLabel from "./RowLabel";
import { storage } from "../controller/InitializeFirebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

export default function CreateNewTierList() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [labels, setLabels] = useState(defaultLabel);
  const [files, setFiles] = useState(null);
  const [uploadData, setUploadData] = useState(null);
  //const imageVeiw = new FileReader();
  const handleChange = (stateHandler) => (event) =>
    event.target.files
      ? stateHandler(event.target.files)
      : stateHandler(event.target.value);
  function handleCreation(event) {
    event.preventDefault();
    const filteredFiles = [...files].filter(
      (item) => item.type === "image/png" || item.type === "image/jpeg"
    );
    const uploadFolder = ref(
      storage,
      `Tier-list/${name.replace(/ /, "-")}/${filteredFiles[0].name}`
    );

    const uploadTask = uploadBytesResumable(uploadFolder, filteredFiles[0]);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(console.log);
      }
    );
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
        {files ? (
          <ImagePreveiw files={[...files]} setUploadData={setUploadData} />
        ) : null}
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
