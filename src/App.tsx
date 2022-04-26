import { FC, ReactElement, useState }from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import { UserProfile } from './components/UserProfile';
import { ManageList } from './components/ManageList';
import { NewList } from './components/NewList';
import classNames from 'classnames';
import { ITodoList } from './interfaces/interfaces';
import { SelectedTodoList } from './components/SelectedTodoList';

export const App: FC<any> = (): ReactElement => {
  const [showNewListModal, setShowNewListModal] = useState(false);
  const [todoList, setTodoList] = useState<Array<ITodoList>>([]);
  const [selectedElem, setSelectedElem] = useState<any>({})
  // const [listUpdated, setListUpdated] = useState<boolean>(false)

  const handleAddNewList = () => {
    setShowNewListModal(true);
  }

  const handleListChange = (checked: Boolean, elem: ITodoList) => {
    let list = [...todoList]
    list.map((listElem) => {
      if(listElem.id === elem.id){
        if(checked){
          return listElem['checked'] = true
        } else {
          return listElem['checked'] = false
        }
      }
      console.log('checked', checked)
      console.log('elem', elem)
    })
    setTodoList(list)
    }

  const handleDeleteList = () => {
    setTodoList([...todoList.filter((listElem) => {
      return listElem['checked'] === false
    })])
    console.log('list after deletion', todoList);
  }

  const onHandleNewListSave = (text: string, listInfo: ITodoList) => {
    if(text === 'CANCEL'){
      setShowNewListModal(false);
    } else {
      console.log('listInfo', listInfo);
      setTodoList([...todoList, listInfo]);
      setShowNewListModal(false);
    }
  }

  const handleSelectedList = (elem: ITodoList) => {
    setSelectedElem(elem)
  }

  const handleUpdateListSave = (title: string, desc: string, listInfo: ITodoList) => {
    console.log('after update title', title)
    console.log('after update desc', desc)
    console.log('after update listInfo', listInfo)
    let list = [...todoList]
    list.forEach((list) => {
      console.log('test list id', list.id)
      console.log('test listInfo id', listInfo.id)
      if(list.id === listInfo.id){
        list['title'] = title
        list['desc'] = desc
      }
    })
    setTodoList(list)
  }

  const containerClasses = classNames('container', {'hide': showNewListModal? true : false})


  return (
    <div className="main">
      <div className="title">TO-DO List</div>
      <div className={containerClasses}>
        <div className="left-panel">
          <div className="user-profile">
            <UserProfile />
          </div>
          <div className="manage-todo-list">
            <ManageList 
              handleAddNewList={handleAddNewList}
              handleDeleteList={handleDeleteList} />
            </div>
          <div className="todo-list">
            <TodoList 
              todoList={todoList.length && todoList}
              handleListChange={handleListChange}
              handleSelectedList={handleSelectedList}
            />
          </div>
        </div>
        <div className="right-panel">
          <SelectedTodoList 
            todoList={todoList}
            selectedList={selectedElem}
            handleUpdateListSave={handleUpdateListSave}
          />
        </div>
      </div>
      {showNewListModal && <div className="new-list-modal">
        <NewList onHandleNewListSave={onHandleNewListSave} />
      </div> }
    </div>
  )
}