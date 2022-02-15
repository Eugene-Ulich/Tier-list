import classes from "./tier-list.module.css";
import { useContext } from "react";
import { TierListContext } from "../controller/TierListProvider";

function RowLabel({ name, index }) {
  const { labels, changeLabels } = useContext(TierListContext);

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
