import "../css/Clear.css"

const Clear = (props)=> (
    <div className="b-clear"
    
    onClick={props.driveClear}
    >
        {props.children}
    </div>
);

export default Clear;