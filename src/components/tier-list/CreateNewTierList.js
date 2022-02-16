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
  const [urls, setUrls] = useState([]);
  //const imageVeiw = new FileReader();

  const handleChange = (stateHandler) => (event) =>
    event.target.files
      ? stateHandler(event.target.files)
      : stateHandler(event.target.value);

  function uploadImages(images = [], folderName = "New Folder", setUrls) {
    const sanitizeStr = (str) =>
      str
        .toLowerCase()
        .replace(/\s/g, "-")
        .replace(/^a-zа-я0-9_-/g, "");
    const [urlArray, promises] = [[], []];

    const uploadFolder = ref(storage, `Tier-list/${sanitizeStr(folderName)}`);

    images.forEach((image) => {
      const uploadTask = uploadBytesResumable(
        ref(uploadFolder, sanitizeStr(image.name)),
        image
      );
      promises.push(uploadTask);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.error(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((url) => urlArray.push(url))
            .catch(console.error);
        }
      );
    });

    Promise.all(promises).finally(setUrls(urlArray)).catch(console.error);
  }

  async function handleCreation(event) {
    event.preventDefault();
    const filteredFiles = [...files].filter(
      (item) => item.type === "image/png" || item.type === "image/jpeg"
    );
    //TODO: refactoring
    if (filteredFiles.length < 3) {
      return <p>You must upload at least 3 images (.jpg/.png)</p>;
    } else if (filteredFiles.length > 30) {
      return <p>Maximum number of images is 30. Please pick less images</p>;
    }
    uploadImages(filteredFiles, name, setUrls);
    console.log(urls);
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
