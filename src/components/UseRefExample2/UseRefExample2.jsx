import './UseRefExample2.css'
import {useRef, useState, useEffect} from 'react';


function UseRefExample2() {

  const [name, setName] = useState('')

  const renders = useRef(1);
  const previousName = useRef('');

  useEffect(() => {
    renders.current = renders.current + 1;
    previousName.current = name;
  }, [name])

  return (
   <div>
    <h1>Renders: {renders.current}</h1>
    <h2>Previous State: {previousName.current}</h2>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
   </div>
  )
}

export default UseRefExample2