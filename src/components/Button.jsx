import '../css/Button.css'

function Button(props) {

    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');

    }
    return (
        <button className={`b-container ${esOperador(props.children) ? 'operador' : " "} `.trimEnd()}
        onClick={()=> props.driveClick(props.children)} >
            {props.children}
        </button>
    )
}

export default Button;