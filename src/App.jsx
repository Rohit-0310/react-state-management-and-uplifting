import logo from './logo.svg';
import './App.css';
import { Todo } from './components/Todo';

function App() {
    return (
        <div className="App">
            <Todo />
        </div>
    );
}


/*
function App() {
    const [data, setData] = useState("");
    const handleData = (name) => {
        console.log("Parents receiver: ", name);
        setData(name);
    };
    console.log("rendering")
    return (
        <div className="App">
            <h1>Child Receiverd</h1>
            <Child_1 handleData={handleData}/>
            <Child_2 data={data} />
        </div>
    );
}
function Child_1({handleData}){
    const data = "MasaiSchool";
    handleData(data)
    return <h3></h3>;

}

function Child_2({data}){
    return <h3>Child Receiverd: {data}</h3>
}

*/

/*
Have a function in parents
give it to child
call function in child, send some data in it as arguments
*/
export default App;
