import axios from 'axios';

import { ADDNEW_TODO } from './type';
import { GETALL_TODO } from './type';
import { TOGGLE_TODO } from './type';
import { UPDATE_TODO } from './type';
import { DELETE_TODO } from './type';
import { TOGGLE_TAB } from './type';

const API_URL='http://localhost:5500';

export const addNewTodo= (data) => async (dispatch) => {
    try{
        const res = await axios.post(`${API_URL}/todos`, {data});

        dispatch({type: ADDNEW_TODO , payload: res.data});
    }
    catch(error){
        console.log('Error while calling addNewTodo API', error.message);
    }
    }

export const getAllTodos = () => async (dispatch) => {
    try{
        const res = await axios.get(`${API_URL}/todos`);

        dispatch({type: GETALL_TODO , payload: res.data});
    }
    catch(error){
        console.log('Error while calling getAllTodos API', error.message);
    }
    }

    export const toggleTodo = (id) => async (dispatch) => {
    try{
        const res = await axios.get(`${API_URL}/todos/${id}`);

        dispatch({type: TOGGLE_TODO , payload: res.data});
    }
    catch(error){
        console.log('Error while calling toggle todo API', error.message);
    }
    }

    export const updateTodo = (id, data) => async (dispatch) => {
    try{
        const res = await axios.put(`${API_URL}/todos/${id}`, { data });

        dispatch({type: UPDATE_TODO , payload: res.data});
    }
    catch(error){
        console.log('Error while calling update Todos API', error.message);
    }
    }

    export const deleteTodo = (id) => async (dispatch) => {
    try{
        const res = await axios.delete(`${API_URL}/todos/${id}`);

        dispatch({type: DELETE_TODO , payload: res.data});
    }
    catch(error){
        console.log('Error while calling delete Todos API', error.message);
    }
    }

    export const toggleTab= (tab) => async(dispatch)=>{
        dispatch({type: TOGGLE_TAB, selected: tab})
    }