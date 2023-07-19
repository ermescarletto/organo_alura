import './Time.css'
import Colab from '../Colab'

const Time = (props) => {
    return(
    (props.colaboradores.length > 0) ? 
        <section 
        className='time'
        style={
            {
                backgroundColor: props.corSecundaria
            }
        }
        >
            <h3
            style={{
                borderColor: props.corPrimaria,
            }}
            >{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map(colaborador => <Colab
            corDeFundo = {props.corPrimaria}
            key = {colaborador.nome}
            nome = {colaborador.nome}
            cargo = {colaborador.cargo}
            imagem = {colaborador.imagem}
            time = {colaborador.time}
            />)}

            </div>
        </section>
        : ''
    )

}

export default Time