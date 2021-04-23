import './App.css';
import React, {useState} from "react";
import {Button} from "@material-ui/core";



function App() {
    const [todos, setTodos] = useState(['Take to shop', 'Take the rubbish out', 'Haha go to take bananas2']);
    const [input, setInput] = useState('');
    console.log('🤷‍', input);

    const addTodo = (event) => {
        // this will fire of then we click the button
        event.preventDefault();
        console.log('👽', 'It is working!')
        setTodos([...todos, input]);
        setInput(''); // clear up the form after the submit clicking add todo button!
        console.log(todos);
    }


  return (
    <div className="App">
      <h1>Hello world! 🚀</h1>
        <form action="">
        <input type="text" value={input} onChange={event => setInput(event.target.value)}/>
        <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={addTodo}>Add Todo</Button>
        </form>
      <ul>
          {todos.map(todo => (
              <li>{todo}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;
