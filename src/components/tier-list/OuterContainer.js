import ListElements from "./ListElements";
import classes from "./tier-list.module.css";

function OuterContainer (props) {
    return (
        <div className={classes["outer-container"]}>
            <ListElements elements={props.elements} />
        </div>
    );
}

export default OuterContainer;