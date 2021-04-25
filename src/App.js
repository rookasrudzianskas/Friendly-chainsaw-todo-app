import './App.css';
import React, {useEffect, useState} from "react";
import {Button, FormControl, Input, InputLabel} from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    //when the app loads, we need to listen to the database and fetch new todos as they get added/removed

    useEffect(() => {
        //this code here fires then the app loads app.js loads
        db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            // console.log(snapshot.docs.map(doc => doc.data()));
            setTodos(snapshot.docs.map(doc => doc.data().todo));
        })
    }, []);

    const addTodo = (event) => {
        // this will fire of then we click the button
        event.preventDefault();

        db.collection('todos').add({
            todo: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput(''); // clear up the form after the submit clicking add todo button!

    }


  return (
    <div className="App">
      <h1>Hello world! 🚀</h1>

        <form action="">

            <FormControl>
                <InputLabel> ✅ Write a Todo</InputLabel>
                <Input  type="text" value={input} onChange={event => setInput(event.target.value)}/>
            </FormControl>

        <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={addTodo}>Add Todo</Button>
        </form>
      <ul>
          {todos.map(todo => (
            <Todo text={todo}/>
          ))}
      </ul>
    </div>
  );
}

export default App;
