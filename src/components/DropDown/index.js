
import './DropDown.css'


const DropDown = (props) => {
    return (
        <div className='dropdown'>
            <label>{props.label}</label>
            <select 
                onChange={event => props.onChangeValue(event.target.value)}
                required={props.required} value={props.valor}
            >
                <option value=""></option>
                {props.itens.map(item => 
                <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}


export default DropDown