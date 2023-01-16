import { Todo, fetchTodos } from '../actions';

import React                from 'react';
import { StoreState }       from '../reducers';
import { connect }          from 'react-redux';

interface AppProps {
	todos: Todo[];
	fetchTodos(): any;
}

class _App extends React.Component<AppProps> {
	componentDidMount(): void {
		this.props.fetchTodos();
	}
	render() {
		return <div>Hello World</div>;
	}
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
	return { todos: todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
