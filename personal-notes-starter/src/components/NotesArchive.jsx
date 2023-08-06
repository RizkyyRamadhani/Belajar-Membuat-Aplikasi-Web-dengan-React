import React from 'react';
import NotesCard from './NotesCard';

function NotesArchive ({ onDelete, notes, onArchive}) {
    return (
        <div className='note-item'> 
        <div className='note-item__content'>
        {

                    notes && notes.length > 0
                    ? (
                        notes.map(note => (
                            <NotesCard changeButton="Pindah" key={note.id} onDelete={onDelete} buttonData={onArchive} {...note} />
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
    )
}

export default NotesArchive;