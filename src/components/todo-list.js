import { ListItems } from './list-items';

export const List = ({ todos }) => {
    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id}>
                <ListItems {...itemProps} />
            </li>
        )
    });
    return (<ul>
        {elements}
    </ul>)
}