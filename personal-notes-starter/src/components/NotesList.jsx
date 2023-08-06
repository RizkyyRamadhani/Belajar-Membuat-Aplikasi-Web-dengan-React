import React from 'react';
import NotesCard from './NotesCard';

function NotesList(onDelete, onActive, notes) {
    return (
        <div className='note-item'> 
        <div className='note-item__content'>
        {
                notes && notes.length > 0
                ? (
                notes.map((note) => (
                    <NotesCard key={note.id} id={note.id} onDelete={onDelete} onActive={onActive} {...note} />
                ))
                )
                : (
                    <div className="notes-list__empty-message">  
                    <p>Tidak ada catatan di arsip</p>
                    </div>
                )
            }
        </div>
        </div>
    );
}

export default NotesList;