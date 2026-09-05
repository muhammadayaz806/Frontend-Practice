export default function Hello() {
    const getName = (yourName) => {
        return yourName;
    }

    const fName = "M";
    const lName = "Ayaz";

    const handleClick = () => {
        alert(`Hello ${getName(lName)}`);
    }

    const handleInputChange = (e) => {
        console.clear();
        console.log(e.target.value);
    }
  return (
    <>
    <h1>Hello {getName(fName)}</h1>
    <h2>Bye {getName(lName)}</h2>
    <button onClick={handleClick}>Click Me</button>
    <button onClick={() => alert("Hello from inline function")}>Inline Function</button>
    <br />
    <input type="text" placeholder="Enter something..." onChange={handleInputChange}/>
    </>
  )
}
