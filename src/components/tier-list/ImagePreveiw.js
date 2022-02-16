export default function ImagePreveiw({ files }) {
  const imageFiles = files.filter(
    (item) => item.type === "image/png" || item.type === "image/jpeg"
  );
  if (imageFiles.length < 3) {
    return <p>You must upload at least 3 images (.jpg/.png)</p>;
  } else if (imageFiles.length > 30) {
    return <p>Maximum number of images is 30. Please pick less images</p>;
  } else {
    //setUploadData(imageFiles);
    return (
      <div>
        {imageFiles.map((item, index) => (
          <img
            height="80"
            key={index}
            alt={item.name}
            src={URL.createObjectURL(item)}
          />
        ))}
      </div>
    );
  }
}
