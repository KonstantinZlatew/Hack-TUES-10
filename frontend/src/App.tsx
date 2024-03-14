import SideNav from './components/sideNav'
import Card from './components/Card'
import Wrapper from './components/Wrapper'

function App() {

  return (
    <>
      <div className='flex w-full flex-1'>
        <SideNav/>
        <Wrapper>
          <Card/>
        </Wrapper>
      </div>
    </>
  )
}

export default App
