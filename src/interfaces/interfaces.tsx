import { ChangeEvent } from "react";

export interface ITodoList {
    id: string;
    title: string;
    desc: string;
    status: string;
    checked: boolean;
}

export interface ITodoListProps {
    todoList: any
    handleListChange: Function;
    handleSelectedList: Function;
}

export interface ISelectedTodoListProps {
    todoList: Array<ITodoList>;
    selectedList: ITodoList;
    handleUpdateListSave: Function;
}

export interface IManageListPorps {
    handleAddNewList: Function;
    handleDeleteList: Function
}

export interface INewListPorps {
    onHandleNewListSave: Function
}




