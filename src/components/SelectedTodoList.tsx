import { ChangeEvent, FC, ReactElement, useEffect, useState } from 'react';
import { ISelectedTodoListProps } from '../interfaces/interfaces';
import '../styles/SelectedList.css';

export const SelectedTodoList: FC<ISelectedTodoListProps> = (props): ReactElement => {
    const { todoList, selectedList, handleUpdateListSave } = props
    const [listInfo, setListInfo] = useState<any>({})
    const [title, setTitle] = useState<string>('')
    const [desc, setDesc] = useState<string>('')
    const [editing, setEditing] = useState<boolean>(false)

    useEffect(() => {
        if(!editing) {
            if(!Object.keys(selectedList).length){
                if(todoList.length){
                    setTitle(todoList[0].title)
                    setDesc(todoList[0].desc)
                    setListInfo(todoList[0])
                }
            } else {
                setTitle(selectedList.title)
                setDesc(selectedList.desc)
                setListInfo(selectedList)
            }
        }
    })

    const onHandleUpdateListSave = () => {
        handleUpdateListSave(title, desc, listInfo)
        setEditing(false)
    }

    const onHandleChangeListInfo = (e: ChangeEvent<any>) => {
       console.log(e.target.id)
       setEditing(true)
       if(e.target.id === 'list-title'){
           setTitle(e.target.value)
       } else if(e.target.id === 'list-desc') {
           setDesc(e.target.value)
       }
    }

    if(!todoList.length){
        return (
            <div className="selected-list">
                There are no list items to show. Add a new list.
            </div>
        )
    } else {
        return (
            <div>
                <div className="selected-list">
                    <span>Title</span> 
                    <input 
                        className="selected-list-title"
                        id="list-title"
                        type="text" 
                        value={title}
                        onChange={onHandleChangeListInfo}
                     />
                    <span>Description</span>
                    <textarea 
                        className="selected-list-desc"
                        id="list-desc"
                        value={desc}
                        onChange={onHandleChangeListInfo}
                    />
                </div>
                <div className="new-list-btns btn-margin">
                    <button onClick={onHandleUpdateListSave}>SAVE</button>
                </div>
            </div>
        )
    }
}