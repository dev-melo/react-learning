interface ITodoItemProps {
    id: string;
    label: string;
    complete: boolean;
    onDone(): void;
    onDelete(): void;
}
export const TodoItem = ({ id, label, complete, onDone, onDelete }: ITodoItemProps) => {

    return (
        <li key={id}>
            {label}

            {complete ? ' Ok ' : ''}
            <button onClick={onDone}>
                Done
            </button>
            <button onClick={onDelete}>
                Delete
            </button>
        </li>

    );
}