import React from "react";
import './Todo.css';
import {Avatar, List, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";

const Todo = (props) => {
    return (
      <List className="todo__list">
          <ListItem>
              <ListItemAvatar>
              </ListItemAvatar>
              <ListItemText primary={props.text} secondary="Dummy deadline 🕕"/>
          </ListItem>
      </List>
    );
}


export default Todo