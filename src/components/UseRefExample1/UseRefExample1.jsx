import './UseRefExample1.css'
import {useRef} from 'react';


function UseRefExample1() {

  const inputRef = useRef();
  const paragraphRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Set Value for the input field
    inputRef.current.value = 'A';

    // Set Styles for the input field
    inputRef.current.style.backgroundColor = "black";
    inputRef.current.style.color = "white";


    // Set Style for the paragraph
    paragraphRef.current.style.fontSize = '20px';
    paragraphRef.current.style.fontWeight = '800';

    console.log(inputRef.current.value);

  };

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" id='name' ref={inputRef}/>
        <button type="submit" className='btn '>Submit</button>
        <p ref={paragraphRef} onClick={() => inputRef.current.focus()}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, earum!</p>
    </form>
  )
}

export default UseRefExample1