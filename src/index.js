import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { AppHeader } from './components/app-header';
import { List } from './components/todo-list';
import { TextArea } from './components/search-panel';

const App = () => {
  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make app', important: true, id: 2 },
    { label: 'Do something', important: false, id: 3 }
  ]
  return (<div>
    <AppHeader />
    <TextArea />
    <List todos={todoData} />
  </div>)
}


ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById('root'));