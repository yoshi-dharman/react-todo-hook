import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from '../redux/actions/todo.get.actions';
import { postTodo } from '../redux/actions/todo.post.actions';
import { putTodo } from '../redux/actions/todo.put.actions';
import { deleteTodo } from '../redux/actions/todo.delete.actions';

// import { addTodo, editTodo, deleteTodo } from '../redux/actions/todo.actions';
import TodoItem from './TodoItem';
import { Col, Row, Form, Button, Accordion, Spinner } from 'react-bootstrap';
import ModalTodo from './ModalTodo';

function Todo() {
    const dispatch = useDispatch();
    const todo = useSelector((state) => state.Todo);

    useEffect(() => {
        dispatch(getTodo());
      }, [dispatch]);

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
        dispatch(postTodo(e.target.todoItem.value))
        e.target.todoItem.value = "";
    }

    let editHandle = (id, newTodo) => {

        dispatch(putTodo(id,newTodo));
    }

    let deleteHandle = (id) => {

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

        <Row className="mt-4 text-center">
            <Col xs={12}>
                <h2>Todo List</h2>
            </Col>
            <Col className="mt-3">

                {todo.isLoading === true 
                ? <Spinner className="mt-3" animation="border" />
                :   <Accordion className="text-left">
                        {todo.todoList.map((item) => {
                            return <TodoItem key={item.id} id={item.id} todo={item.todo}
                            deleteHandle={deleteHandle}
                            setEditTodo={setEditTodoItem}
                            handleShow={handleShow}
                            />
                        })}
                    </Accordion>
                }

                
            </Col>
        </Row>
        </>
    )
}

export default Todo;
