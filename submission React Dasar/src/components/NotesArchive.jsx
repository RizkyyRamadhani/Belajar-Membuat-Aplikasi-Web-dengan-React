import React from 'react';
import NotesCard from './NotesCard';

function NotesArchive({notes, onDelete, onArchive, onActive}) {
    return (
        <div className='notes-list'>
                {notes.length === 0 ? (
                    <p className="notes-list__empty-message">Tidak ada catatan</p>
                    
                ): notes.map((note) => (
                    <NotesCard 
                    {...note} 
                    key={note.id}
                    id={note.id}
                    onDelete={onDelete}
                    onActive={onActive}
                    onArchive={onArchive}
                    isArchive={note.archived}
                    />
                ))
                }
        </div>

    )
}

export default NotesArchive;