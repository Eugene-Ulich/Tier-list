import classes from "./tier-list.module.css";

function RowLabel({ name, index, handleEdit }) {
  const [labels, changeLabels] = handleEdit;

  return (
    <span className={classes["row-label"]} id={classes["label-" + index]}>
      <input
        type="text"
        value={name}
        onChange={({ target: { value } }) => {
          const newLabels = [...labels];
          if (value.length < 1 || value.length > 30) return;
          newLabels[index] = value;
          changeLabels(newLabels);
        }}
      />
    </span>
  );
}

export default RowLabel;
