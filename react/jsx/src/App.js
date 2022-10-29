const Fname = "Aman"
const Lname = "Singh"
const num = 7
function App() {
  
  return (
    <div className="App">
      <h1>Hello {Fname} {Lname}</h1>
      <h1>Hello {`${Fname} ${Lname}`}</h1>
      <p>Your lucky number is {Math.floor( Math.random()*10) + num}</p>
    </div>
  );
}

export default App;
