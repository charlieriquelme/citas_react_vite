import {useEffect, useState}from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListasdoPaciente from './components/ListasdoPaciente';
import Paciente from './components/Paciente';


function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente]   = useState({});

  const eliminarPaciente= (id) =>{
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !==id);
    setPacientes(pacientesActualizados);
  }

  // se puede tener multiplers useeffect y useState
  
  // los useEffect se ejecutan segun el orden que uno lo defina 

  // seccion para verificar si en el localstorage existe datos
  useEffect(()=>{
    const obtenerLS = ()=>{
      const pacientesLS = localStorage.getItem('pacientes') ?? [];
      console.log(pacientesLS);
    }
    obtenerLS()
  },[])


  useEffect(() =>{
    // dentro de este apartado es un buen sector para guardar o actualizar el arreglo
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])


  return (
    <div className='container mx-auto mt-20'>
      <Header
        setPacientes = {setPacientes}
      />
      <div className='mt-12 md:flex '>
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListasdoPaciente
          pacientes={pacientes}  
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
