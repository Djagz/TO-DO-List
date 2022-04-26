import { ChangeEvent, createRef, FC, ReactElement, RefObject, useEffect, useState } from 'react';
import { ITodoList, ITodoListProps } from '../interfaces/interfaces';
import classNames from 'classnames';

export const TodoList: FC<ITodoListProps> = (props): ReactElement => {
    const { todoList, handleListChange, handleSelectedList } = props;
    const [updatedList, setUpdatedList] = useState<Array<ITodoList>>([]);
    const selectStatusRef: RefObject<HTMLSelectElement> = createRef()
    const [status, setStatus] = useState<String>('pending');

    const onHandleStatusChange = (e: ChangeEvent<HTMLSelectElement>) => {
        e.target.value === 'complete' ? setStatus('complete') : setStatus('pending')
    }

    const onHandleListChange = (checked: Boolean, elem: ITodoList) => {
        handleListChange(checked, elem)
    }

    const onHandleSelectedList = (elem: ITodoList) => {
        handleSelectedList(elem)
    }

    const statusClassList = classNames({
        'status-drpdown': true,
        'pending': status === 'pending' && true,
        'complete': status === 'complete' && true
    })

    useEffect(() => {
        setUpdatedList(todoList)
    })

    return (
        <div>
            {updatedList.length && updatedList.map((listElem: ITodoList, listIdx: number) => {
                return (
                    <div key={listIdx} className="todo-list-item" onClick={() => onHandleSelectedList(listElem)}>
                        <input type="checkbox" onChange={(e) => onHandleListChange(e.target.checked, listElem)} />
                            <span className="todo-title">{listElem.title}</span>
                        <select className={statusClassList} ref={selectStatusRef} onChange={onHandleStatusChange}>
                            <option value="pending">pending</option>
                            <option value="complete">complete</option>
                        </select>
                    </div>
                )
            })}
        </div>
    )
}