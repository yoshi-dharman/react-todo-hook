import React, { useState } from 'react'
// import { connect } from 'react-redux';
import { useDispatch, useSelector } from "react-redux";

import TodoItem from './TodoItem';
import { addTodo, editTodo, deleteTodo } from '../redux/actions/todo.actions';
import { Col, Row, Form, Button, Accordion } from 'react-bootstrap';
import ModalTodo from './ModalTodo';

function Todo(props) {
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todoList);

    //MODAL
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [editTodoItem, setEditTodoItem] = useState({
        id: "",
        todo: "empty"
    });

    let addHandle = (e) => {
        e.preventDefault();
        dispatch(addTodo(e.target.todoItem.value))
        e.target.todoItem.value = "";
    }

    let editHandle = (id, newTodo) => {
        // props.editTodo(id, newTodo);
        dispatch(editTodo(id,newTodo));
    }

    let deleteHandle = (id) => {
        // props.deleteTodo(id);
        dispatch(deleteTodo(id));
    }

    // console.log(props);
    return (
        <>
        <ModalTodo show={show} handleClose={handleClose} 
        editTodoItem={editTodoItem} setEditTodoItem={setEditTodoItem}
        editHandle={editHandle}
        />
        <Row className="mt-5 justify-content-center">
            <Col md={6}>
                <Form onSubmit={addHandle}>
                <Form.Group controlId="formBasicEmail">
                    <h5>Add Todo</h5>
                    <Form.Control required name="todoItem" type="text" placeholder="Enter Todo..." />
                    <Form.Text className="text-muted">
                    Add more todo here.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </Col>
        </Row>
        <hr></hr>

        <Row className="mt-4">
            <Col xs={12}>
                <h2>Todo List</h2>
            </Col>
            <Col className="mt-3">
                <Accordion>
                    {todoList.map((item) => {
                        return <TodoItem key={item.id} id={item.id} todo={item.todo}
                        deleteHandle={deleteHandle}
                        setEditTodo={setEditTodoItem}
                        handleShow={handleShow}
                        />
                    })}
                    {/* <li>todo</li> */}
                </Accordion>
            </Col>
        </Row>
        </>
    )
}

export default Todo;
