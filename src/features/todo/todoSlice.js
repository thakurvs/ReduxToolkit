import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {       //initialstate can be of an object or an array and can hold multiple states
    todos: [{id : '1', text : 'Hello World'}],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers : {
        addTodo: (state, action) => {           //addTodo is the functionality that we are going to use to add Todo
            //payload is the data that we are sending to the reducer
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)    //here we update the state of the todos
        },
        removeTodo: (state, action) => {
             state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }

})

export const { addTodo, removeTodo } = todoSlice.actions;   
export default todoSlice.reducer;