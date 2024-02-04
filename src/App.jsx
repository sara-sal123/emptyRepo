import './App.css'
import Conditions from './components/conditions/Conditions'
import Object from './components/object/Object'

function App() {

  const objects = [
    {
      title: '111',
      desc: 'desc 1',
      age: 34,
    },
    {
      title: '222',
      desc: 'desc 2',
      age: 45,
    },
    {
      title: '333',
      desc: 'desc 3',
      age: 36,
    },
    {
      title: '444',
      desc: 'desc 4',
      age: 12,
    }
  ]

  return (
    <>
      {/* <Conditions size={10} name='fff'></Conditions> */}

      {
        objects.map((obj, index) =>
          <div key={index}>
            <Object title={obj.title} desc={obj.desc} age={obj.age} ></Object>
            {obj.title}
          </div>
        )
      }
    </>
  )
}

export default App
