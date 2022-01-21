import classes from './tier-list.module.css';

function RowLabel ({name, index}) {
    return (
    <span className={classes["row-label"]} id={classes["label-"+index]}>
        <input type="text" value={name} readOnly></input>
    </span>);
}

export default RowLabel;