import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Domestos'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Lia'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Lola'},
    ]
    let DialogsElements =
        dialogs.map(dialog =>
            <DialogItem name={dialog.name} id={dialog.id}/>,
        )

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How'},
        {id: 3, message: 'Why'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yoj'},
        {id: 6, message: 'Call me'},
    ]
    let MessagesElements =
        messages.map(message =>
            <Message message={message.message}/>,
        )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogsElements}
            </div>
            <div className={s.messages}>
                {MessagesElements}
            </div>
        </div>
    );
}

export default Dialogs;