import './UseRefExample1.css'
import {useRef} from 'react';


function UseRefExample1() {

  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(inputRef.current);
  };

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" id='name' ref={inputRef}/>
        <button type="submit" className='btn '>Submit</button>
    </form>
  )
}

export default UseRefExample1