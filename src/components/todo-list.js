import { ListItems } from './list-items';

export const List = ({ todos }) => {
    const elements = todos.map((item) => {
        return (
            <li>
                <ListItems
                    label={item.label}
                    important={item.important} />
            </li>
        )
    });
    return (<ul>
        {elements}
    </ul>)
}