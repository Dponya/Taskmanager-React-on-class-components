import { TodoListItem } from '../todo-list-item/todo-list-item';
import './todo-list.css';

export const TodoList = ({ todos, onDeleted }) => {

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...itemProps} onDeleted={() => onDeleted(id)} />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list list-none">
      { elements}
    </ul>
  );
};