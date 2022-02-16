import { useContext } from "react";
import { TierListContext } from "../controller/TierListProvider";
import ListElements from "./ListElements";
import RowLabel from "./RowLabel";
import classes from "./tier-list.module.css";

function ListRows({ labelValue, labelIndex }) {
  const { labels, changeLabels } = useContext(TierListContext);

  return (
    <div className={classes["list_row"]}>
      <RowLabel
        name={labelValue}
        index={labelIndex}
        handleEdit={[labels, changeLabels]}
      />
      <ListElements labelIndex={labelIndex} />
    </div>
  );
}

export default ListRows;
