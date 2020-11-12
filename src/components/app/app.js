import { AppHeader } from '../app-header/app-header';
import { SearchPanel } from '../search-panel/search-panel';
import { TodoList } from '../todo-list/todo-list';
import { ItemStatusFilter } from '../item-status-filter/item-status-filter';
import { ButtonPanel } from '../button-panel/button-panel'
import { Component } from 'react';

export class App extends Component {
    maxId = 100;

    state = {
        todoData: [
            { label: 'Drink Coffee', id: 1 },
            { label: 'Make Awesome App', id: 2 },
            { label: 'Have a lunch', id: 3 }
        ],
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1),
            ];
            return { todoData: newArray };
        });
    }

    addItem = (text) => {
        this.setState(({ todoData }) => {
            const newData = {
                label: text,
                id: this.maxId++,
            }

            const newArray = [
                ...todoData, newData
            ];
            return { todoData: newArray }
        });
    }

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
                <div className="top-panel d-flex">
                    <ButtonPanel addItem={this.addItem} />
                </div>
            </div>
        );

    }
};