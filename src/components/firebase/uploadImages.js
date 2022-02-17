import { storage } from "./InitializeFirebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

export default async function uploadImages(
  images = [],
  folderName = "New Folder",
  setUrls
) {
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
