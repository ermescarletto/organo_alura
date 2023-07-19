

import TextField from '../TextField'
import './Form.css'
import DropDown from '../DropDown'
import SubmitButton from '../SubmitButton'
import { useState } from 'react'

const Formulario = (props) => {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
   
    const onSave = (event) => {
        event.preventDefault()
        props.onRegisterEmployee({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>
                    Preencha os dados para criar o card do colaborador.
                </h2>
                <TextField
                    required={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    onChangeValue={valor => setNome(valor)} 
                />
                <TextField 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    onChangeValue={valor => setCargo(valor)} 
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Envie sua imagem"
                    valor={imagem}
                    onChangeValue={valor => setImagem(valor)}  
                />
                <DropDown 
                    valor={time} 
                    onChangeValue={valor => setTime(valor)}  
                    required={true} 
                    itens={props.times} 
                    label="Times" />
                <SubmitButton texto='Criar Card'>
                    <b>*</b>
                </SubmitButton>

            </form>

        </section>
    );


}


export default Formulario