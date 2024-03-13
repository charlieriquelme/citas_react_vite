import React from 'react'
import Paciente from './Paciente'

const ListasdoPaciente = ({pacientes,setPaciente, eliminarPaciente}) => {
    // useEffect( ()=> {
    //     if(pacientes.length > 0){
    //         console.log('Nuevo paciente')
    //     }
    // },[pacientes])
    return (
        <div className='md:w-1/2 lg:w-3/5  md:h-screen overflow-y-scroll'>
            {pacientes && pacientes.length ? (
                <>                 
                    <h2 className='font-black text-3xl text-center'>Listasdo Paciente</h2>
                    <p className='text-xl mt-5 mb-10 text-center'>
                        Administra tus {''}
                        <span className='text-indigo-600 font-bold text-xl'>Pacinetes y Citas</span>
                    </p>
                    {pacientes.map( paciente => (
                            <Paciente
                            // siempre que nosotros vamos a recorrer una lista debemos enviar la key, para identifica los datos "unicos"
                                key={paciente.id}
                                paciente={paciente}
                                setPaciente={setPaciente}
                                eliminarPaciente={eliminarPaciente}
                            />
                        )
                    )}
                </>
            ):(
                <>
                    <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
                    <p className='text-xl mt-5 mb-10 text-center'>
                        Comienza agregando pacientes {''}
                        <span className='text-indigo-600 font-bold text-xl'>y aparecerán en este lugar</span>
                    </p>
                </>
            )}
            
        </div>
    )
}

export default ListasdoPaciente