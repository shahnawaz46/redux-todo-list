import React, { useState } from 'react';
import './TodoList.css';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import { addData, deleteData } from '../action/TodoAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const TodoList = () => {
    const [value, setValue] = useState()
    const dispatch = useDispatch()

    const myData = useSelector((state) => state.data)

    return (
        <div className="todo-list">
            <span className="todo-message">👜 todo list in react</span>
            <div className="search-data-div">
                <div className="search-data">
                    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                    <AddIcon onClick={() => {
                        dispatch(addData(value))
                        setValue("")
                    }} style={{ marginRight: '10px' }} />
                </div>
            </div>
            <div className="data-list">
                <h4>Your List</h4>
                {
                    myData?.map((data) => {
                        return (
                            <div className="data-and-delete" key={data.id}>
                                <h2>{data.value}</h2>
                                <DeleteIcon className="delete-button" onClick={() => dispatch(deleteData(data))} />
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div >
    )
};

export default TodoList;