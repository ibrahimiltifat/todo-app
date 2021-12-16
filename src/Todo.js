import {
  Button,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Modal,
} from "@material-ui/core";
import React, { useState } from "react";
import "./Todo.css";
import db from "./firebase";

const useStyles = makeStyles((theme) => ({
  Paper: {
    position: "absolute",
    width: 400,
    background: "white",
    border: "2px solid #000",
    boxShadow: 24,
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(props.todo.todo);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const updateTodo = () => {
    console.log("clickkk");
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.Paper}>
          <h1>Update TODO</h1>
          <input
            placeholder={props.todo.todo}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button onClick={updateTodo}>Update TODO</Button>
        </div>
      </Modal>
      <List className="todo__List">
        <ListItem>
          <ListItemText primary={props.todo.todo} secondary="Dummy deadline" />
        </ListItem>
        <Button onClick={(e) => setOpen(true)}>Edit</Button>
        <Button
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        >
          DELETE ME
        </Button>
      </List>
    </>
  );
}

export default Todo;
