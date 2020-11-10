import { ListItems } from './list-items';

export const List = ({ todos }) => {
    const elements = todos.map((item) => {
        return (
            <li>
                <ListItems {...item} />
            </li>
        )
    });
    return (<ul>
        {elements}
    </ul>)
}