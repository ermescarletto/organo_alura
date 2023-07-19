import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Form';
import Time from './components/Time';
import Footer from './components/Footer';

function App() {

  const times = [
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
  },
  {
      nome: 'Data Sciense',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
  },
  {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
  },
  {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
  },
  {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
  },
  {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
  }
  ]

  const [colaboradores,setColaboradores] = useState([])
  const onRegisterEmployee = (colaborador) => {
    debugger  
    setColaboradores([...colaboradores, colaborador])    
  
  }
  return (
    <div className="App">
        <Banner />
        <Formulario
          times = {times.map(time => time.nome)}
          onRegisterEmployee = {colaborador => onRegisterEmployee(colaborador)}
        />
         {times.map(time => <Time 
          corSecundaria={time.corSecundaria} 
          corPrimaria={time.corPrimaria} 
          key={time.nome} 
          nome={time.nome}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          />)}
          <Footer />
    </div>
  );
}

export default App;


