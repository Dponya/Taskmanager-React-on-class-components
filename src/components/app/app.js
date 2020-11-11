import { AppHeader } from '../app-header/app-header';
import { SearchPanel } from '../search-panel/search-panel';
import { TodoList } from '../todo-list/todo-list';
import { ItemStatusFilter } from '../item-status-filter/item-status-filter'


export const App = () => {

    const todoData = [
        { label: 'Drink Coffee', id: 1 },
        { label: 'Make Awesome App', id: 2 },
        { label: 'Have a lunch', id: 3 }
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList todos={todoData} onDeleted={(id) => console.log('del', id)} />
        </div>
    );
};