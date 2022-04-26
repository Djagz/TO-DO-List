import { createRef, FC, ReactElement, RefObject } from 'react';
import '../styles/List.css'
import { v4 as uuid } from 'uuid';
import { INewListPorps } from '../interfaces/interfaces';

export const NewList: FC<INewListPorps> = (props): ReactElement => {
    const { onHandleNewListSave } = props;
    const titleRef: RefObject<any> = createRef();
    const descRef: RefObject<any> = createRef();
    return (
        <div>
            <h1 className="title">Add New List</h1>
            <div className="new-list-details">
                <input type="text" ref={titleRef} className="input-title" maxLength={100} placeholder="title" />
                <textarea className="input-desc" ref={descRef} placeholder="description" />
            </div>
            <div className="new-list-btns" onClick={(e: any) => onHandleNewListSave(e.target.innerHTML, 
                {id: uuid(), title: titleRef.current && titleRef.current.value, desc: descRef.current && descRef.current.value, status: 'pending', checked: false})}>
                <button>CANCEL</button>
                <button>SAVE</button>
            </div>
        </div>
    )
}