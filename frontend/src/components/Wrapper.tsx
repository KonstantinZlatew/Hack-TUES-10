import NavBar from './NavBar'

const Wrapper = ({children}: {children: React.ReactNode}) => {
    return (
        <div className='flex flex-wrap w-full flex-1 bg-gradient-to-r from-emerald-800 to-pink-300'>
            <NavBar/>
            {children}
        </div>
    )
}

export default Wrapper