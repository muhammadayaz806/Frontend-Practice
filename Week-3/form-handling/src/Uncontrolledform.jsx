import { useRef } from "react";

function Uncontrolledform() {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", nameRef.current.value);
    console.log("Email:", emailRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Uncontrolled Form Example</h1>

      <label>Name: </label>
      <input type="text" ref={nameRef}/>

      <br />

      <label>Email: </label>
      <input type="email" ref={emailRef}/>

      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Uncontrolledform;
