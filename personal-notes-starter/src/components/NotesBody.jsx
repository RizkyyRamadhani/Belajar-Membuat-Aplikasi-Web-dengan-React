import React from "react";
import NotesList from "./NotesList";
import NotesArchive from "./NotesArchive";

function NotesBody({onDelete, onActive, onArchive, activeData, archiveData}) {
        return (
            
            <div className="note-app__body">
                <h2>Catatan Aktif</h2>
                <div className="notes-list">
                {
                (<NotesList onDelete={onDelete} notes = {activeData} onActive={onActive}/>)
                }
                </div>
                <h2>Catatan Arsip</h2>
                <div className="notes-list">
                {
                (<NotesArchive onDelete={onDelete} notes = {archiveData} onArchive={onArchive}/>)
                }
                    </div>
            </div>
        )

}

export default NotesBody;