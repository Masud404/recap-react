import './App.css'
import Friends from './Friends'
import MyButton from './MyButton'
import Team from './Team'
import User from './User'

function App() {

  function handeler1() {
    alert("Hello this is me !")
  }


  const handeler2 = () => {
    alert("I'm Handelear two")
  }


  const handelear4 = (num) => {
    alert(num + 6);
  }

  return (
    <>

      <Friends></Friends>
      <User></User>

      <Team></Team>

      <MyButton></MyButton>

      <button onClick={handeler1}>Button - 1</button>
      <button onClick={handeler2}>Button - 2</button>
      <button onClick={() => {alert("I'm Third")}}>Third</button>

      <button onClick={() => handelear4(4)}>Four</button>

    </>
  )
}

export default App
