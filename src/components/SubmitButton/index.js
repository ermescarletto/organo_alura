import './SubmitButton.css'


 const SubmitButton = (props) => {

    return (
        <button className='submit-btn'>
            {props.children}
            {props.texto}
        </button>
    )



}

export default SubmitButton