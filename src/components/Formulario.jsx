import {useState, useEffect} from 'react'
import Error from './Error';
// comando para crear todo esto es el --> rafce !!!!

// caso de uso de los hook's: en primea instancia se debe tener siempre la misma cantida de 
// de hook (usestate o useeffect) en el componente y no se debe registrar en un condicional
// const admin = true;
// if(admin){
//     const [puedeVer, setPuedeVer] = useState(true);
// }

const Formulario = ({pacientes,setPacientes, paciente}) => {
    // para entender el useState sus partes son
    // const [nobmre de la variable, modificador variable] = useState(valor-inicial=> puede ser  {} o []o 0 o 10)
    const [nombre, setNombre] = useState('');   
    const [propietario, setPropietario] = useState('');   
    const [email, setEmail] = useState('');   
    const [fecha, setFecha] = useState('');   
    const [sintomas, setSintomas] = useState('');   

    const [error, setError] = useState(false);

    useEffect( () =>{
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
        }
    } , [paciente]);    
    
    const generarId = () =>{
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);
        
        return  random + fecha;
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        // validacion del Formulario

        if([nombre, propietario, email, fecha, sintomas].includes('')){
            setError(true);
            return;
        }
        setError(false);

        // construccion del objeto paciente
        const objetoPaciente = {
            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas,
            id: generarId()
        }

        if(paciente.id){
            // editando el registro
            objetoPaciente.id = paciente.id;
            
            const pacientesActualizados = pacientes.map(pacienteState => 
                pacienteState.id === paciente.id ? 
                    objetoPaciente // objeto paciente que lo modificamos en el formulario
                    : pacienteState );
            setPacientes(pacientesActualizados);
        }else{
            // nuevo registro
            objetoPaciente.id = generarId();
            setPacientes([...pacientes,objetoPaciente]);
        }


        // Reiniciar Form
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');
    }

    return (
        <div className='md:w-1/2 lg:w-2/5 mx-5'>
            <h2 className='font-black text-3xl text-center'> 
                Seguimiento Pacientes 
            </h2>
            <p className='text-lg mt-5 text-center mb-10'>
                Añade Pacientes y {''}
                <span className='text-indigo-600 font-bold text-lg  '> Administralos</span>
            </p>
            <form
                onSubmit={handleSubmit} 
                className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
                    {
                        // usando el doble & imprimmos el valor que necesitamos si el valor es true 
                        error && <Error><p>Todos los campos son obligatorios</p></Error>
                    }
                <div className='mb-5'>
                    <label htmlFor='mascota' className='block text-gray-700 uppercase'>
                        Nombre Mascota
                    </label>
                    {/* para hacer la pagina mas accesible se ocupa el verosimil de for el htmlfor en react
                    para que al clickear alredor de este sector, la pagina active el input :D */}
                    <input 
                        id='mascota'
                        className='border-2 w-full p-2 mt-2 placeholde-gray-400 rounded-md' 
                        type='text' 
                        placeholder='nombre de la mascota'
                        value={nombre}
                        onChange={
                            // dentro del siguiente call back podemos cambiar el valor del input 
                            (e)=> setNombre(e.target.value)}/>
                </div>

                <div className='mb-5'>
                    <label htmlFor='propietario' className='block text-gray-700 uppercase'>
                        Nombre Propietario
                    </label>
                    <input 
                        id='propietario'
                        className='border-2 w-full p-2 mt-2 placeholde-gray-400 rounded-md' 
                        type='text' 
                        placeholder='Nombre del propietario'
                        value={propietario}
                        onChange={
                            // dentro del siguiente call back podemos cambiar el valor del input 
                            (e)=> setPropietario(e.target.value)}/>
                </div>

                <div className='mb-5'>
                    <label htmlFor='email' className='block text-gray-700 uppercase'>
                        Email
                    </label>
                    <input 
                        id='email'
                        className='border-2 w-full p-2 mt-2 placeholde-gray-400 rounded-md' 
                        type='text' 
                        placeholder='Email Contacto Propietario'
                        value={email}
                        onChange={
                            // dentro del siguiente call back podemos cambiar el valor del input 
                            (e)=> setEmail(e.target.value)}/>
                </div>

                <div className='mb-5'>
                    <label htmlFor='alta' className='block text-gray-700 uppercase'>
                        Alta
                    </label>
                    <input 
                        id='alta'
                        className='border-2 w-full p-2 mt-2 placeholde-gray-400 rounded-md' 
                        type='date' 
                        value={fecha}
                        onChange={
                            // dentro del siguiente call back podemos cambiar el valor del input 
                            (e)=> setFecha(e.target.value)}
                        />
                </div>

                <div className='mb-5'>
                    <label htmlFor='sintomas' className='block text-gray-700 uppercase'>
                        Sintomas
                    </label>
                    <textarea 
                        id='sintomas'
                        className='block text-gray-700 rounded-md w-full border-2'
                        placeholder='Describe los Sintomas'
                        value={sintomas}
                        onChange={
                            // dentro del siguiente call back podemos cambiar el valor del input 
                            (e)=> setSintomas(e.target.value)}
                    />
                </div>

                <input 
                    type="submit"
                    className='bg-indigo-600 w-full rounded-md text-white p-3 uppercase font-bold
                    hover:bg-indigo-700 cursor-pointer transition-all'
                    value={paciente.id ? 'Editar Paciente': 'Agregar Paciente'}
                />
            </form>
        </div>
    )
}

export default Formulario;

