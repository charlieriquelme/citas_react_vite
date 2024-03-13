// function Header (props) {
//     // siempre que se incluya en los componentes el nombre props (palabra reservada), se tiene acceso a las propiedades del padre
//     console.log(props);

// en el caso que se quiera acceder a una propiedad especifica se ocupa el destruction
// function Header ({fn,numeros}}) {
function Header () {
    return(
            <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
                Seguimiento Pacientes {''}
                <span className="text-indigo-600">Veterinaria</span> 
            </h1>   
    )
}

export default Header;