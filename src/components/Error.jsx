const Error = ({children}) => {
  return (
    <div className='bg-red-800 text-white p-3  uppercase font-bold mb-3 rounded-md'>
        {children}
    </div>
  )
}

export default Error