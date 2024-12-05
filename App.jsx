import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Profile } from './components/profile'
import Button from './components/Button'
import { Kart, Sayi_ulan } from './components/Number'
import Todo from './components/Todo'


function App() {
  const isDisplayTitle = true;
  return (
    <div id="anadiv" >
      <Profile />
      <hr />
      <Button renkak="red"  >   Sign Up    </Button>
      <Button renkak="green" >   Log In     </Button>
      <hr />
      <hr />
      <div>
        <Kart />
        <Sayi_ulan />
      </div>
      <hr />

      <div>

        {isDisplayTitle ? <h2>DENEME</h2> : null}

        <h1 style={{
          backgroundColor: 'gray',
          borderRadius: 80,
        }}>Todo List</h1>
        <Todo isimyeri="learn react" tamamlandimi={true} />
        <Todo isimyeri="learn js" tamamlandimi={false} />
        <Todo isimyeri="learn css" tamamlandimi={true} />


      </div>
    </div>
  )
}
export default App



















