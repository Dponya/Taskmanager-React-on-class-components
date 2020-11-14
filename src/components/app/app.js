import { AppHeader } from '../app-header/app-header';
import { SearchPanel } from '../search-panel/search-panel';
import { TodoList } from '../todo-list/todo-list';
import { ItemStatusFilter } from '../item-status-filter/item-status-filter';
import { ButtonPanel } from '../button-panel/button-panel'
import { Component } from 'react';

export class App extends Component {
    createTodoItem = (label) => {
        return {
            label,
            done: false,
            id: this.maxId++,
            hidden: true
        }
    }
    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffe'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ],
        filter: '',
        term: ''
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
            const newData = this.createTodoItem(text);

            const newArray = [
                ...todoData, newData
            ];
            return { todoData: newArray }
        });
    }

    toggleProperty = (arr, id, propName) => {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return { todoData: this.toggleProperty(todoData, id, 'done') }
        });
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return { todoData: this.toggleProperty(todoData, id, 'important') }
        });
        console.log(this.state);
    }

    filterItems = (items, filter) => {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((items) => !items.done);
            case 'done':
                return items.filter((items) => items.done);
            default:
                return items
        }
    }

    itsDone = () => {
        this.setState((state) => {
            return { filter: 'done' }
        })
    }

    itsActive = () => {
        this.setState((state) => {
            return { filter: 'active' }
        })
    }

    itsAll = () => {
        this.setState((state) => {
            return { filter: 'all' }
        })
    }

    onFilterChange = (filter) => {
        this.setState({ filter });
    };

    onSearchChange = (term) => {
        this.setState({ term });
    };

    searchItems(items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    render() {
        const { todoData, filter, term } = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        /* const newItems = this.filterItems(todoData, filter);
        const visibleItems = this.searchItems(todoData, term) */
        const visibilityItems = this.searchItems(this.filterItems(todoData, filter), term);
        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel onSearchChange={this.onSearchChange} />
                    <ItemStatusFilter itsDone={this.itsDone} itsActive={this.itsActive} itsAll={this.itsAll} />
                </div>

                <TodoList todos={visibilityItems} onDeleted={this.deleteItem} onToggleDone={this.onToggleDone} onToggleImportant={this.onToggleImportant} />
                <div className="top-panel d-flex">
                    <ButtonPanel addItem={this.addItem} />
                </div>
            </div>
        );

    }
};