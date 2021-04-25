import React from "react";
import './Todo.css';
import { Button, List, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import db from "./firebase";

const Todo = (props) => {
    return (
      <List className="todo__list">
          <ListItem>
              <ListItemAvatar>
              </ListItemAvatar>
              <ListItemText primary={props.todo.todo} secondary="Dummy deadline 🕕"/>
          </ListItem>
          <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>☠️ DELETE ME</Button>
      </List>
    );
}


export default Todo