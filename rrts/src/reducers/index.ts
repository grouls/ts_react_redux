import { Todo }            from '../actions'
import { combineReducers } from "redux";
import { todosReducer }    from "./todos";
export interface StoreState {
    todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
    todos: todosReducer
});