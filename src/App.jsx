import logo from './logo.svg';
import './App.css';

function App() {
    const handleData = (data) => {
        console.log("receiver:", data);
    }
    return (
        <div className="App">
            <h1>Child Receiverd</h1>
            <Child_1 handleData={handleData}/>
        </div>
    );
}
function Child_1({handleData}){
    const data = "MasaiSchool";
    handleData(data)
    return <h3>Child Receiverd: {data}</h3>

}

function Child_2(){}



/*
Have a function in parents
give it to child
call function in child, send some data in it as arguments
*/
export default App;
