import logo from './logo.svg';
import './App.css';

function App() {
    const data = "MasaiSchool";
    return (
        <div className="App">
            <h1>Child Receiverd</h1>
            <Child_1 data={data} />
        </div>
    );
}
function Child_1({ data }){
    return <h3>Child Receiverd: {data}</h3>

}


export default App;
