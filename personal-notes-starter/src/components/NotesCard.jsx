import React from 'react';
import { showFormattedDate } from '../utils/index';

function NotesCard({ changeButton, id, title, body, createdAt, onDelete, buttonData}) {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <p className="note-item__title">{title}</p>
                <p className="note-item__date">{showFormattedDate(createdAt)}</p>
                <p className="note-item__body">{body}</p>
            </div>
            <div className="note-item__action">
                <button onClick={() => onDelete(id)} className='note-item__delete-button'>Hapus</button>
                <button onClick={() => buttonData(id)} className='note-item_archive-button'>{changeButton}</button>
            </div>
        </div>
    )
}

export default NotesCard;