import NavBar from './NavBar'

const Wrapper = ({children}: {children: React.ReactNode}) => {
    return (
        <div className='flex flex-wrap w-full'>
            <NavBar/>
            {children}
        </div>
    )
}

export default Wrapper