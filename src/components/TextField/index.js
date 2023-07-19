import './TextField.css'

const TextField = (props) => {
 
 //CÓDIGO DA AULA 2 - ALTERANDO O ESTADO DIRETO NO COMPONENTE
    //   let valor = ''
/* 
    //UPDATE STATE - SENDO LEITURA E SETTER NO USESTATE
    const [valor,setValor] = useState('Teste valor 2')

    //FUNCÃO PARA RECEBER O EVENTO
    const onType = (event) => {
        setValor(event.target.value)
        console.log(valor)

    }
*/
//CÓDIGO RECEBENDO DO FORMULÁRIO
    const onType = (event) => {
        props.onChangeValue(event.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input 
                value={props.valor} 
                onChange={onType} 
                required={props.required} 
                placeholder={props.placeholder}
                />
        </div>
    )
    }

export default TextField