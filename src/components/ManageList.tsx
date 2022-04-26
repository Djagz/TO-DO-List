import { FC, ReactElement } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IManageListPorps } from '../interfaces/interfaces';
import '../styles/List.css'

export const ManageList: FC<IManageListPorps> = (props): ReactElement => {
    const { handleAddNewList, handleDeleteList } = props;
    const onHandleNewListClick = () => {
        handleAddNewList();
    }

    const onHandleDeleteList = () => {
        handleDeleteList();
    }

    return (
        <div className="manage-list">
             <div className="new-list-btn" onClick={onHandleNewListClick}>+ New List</div>
             <div className="btns">
                 <input type="checkbox" />
                 <span>All</span>
                <div className="delete-btn" onClick={onHandleDeleteList}><RiDeleteBin6Line /></div>
             </div>
        </div>
    )
}