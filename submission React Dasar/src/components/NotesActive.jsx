import React from 'react';
import NotesCard from './NotesCard';

function NotesActive({notes, onDelete, onArchive}) {
    return (
        <div className='notes-list'>
                {notes.length === 0 ? (
                    <p className="notes-list__empty-message">Tidak ada catatan</p>
                    
                ): (notes.map((note) => (
                        <NotesCard key={note.id} id={note.id}  onDelete={onDelete} onArchive={onArchive} isArchived={note.archived}  {...note}/>
                    ))
                )}
        </div>

    )
}

export default NotesActive;