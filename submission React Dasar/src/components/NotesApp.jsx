import React from 'react';

import HeaderApp from './HeaderApp';
import NotesActive from './NotesActive';
import ArchiveButton from './ArchiveButton';
import { getInitialData } from '../utils/index';
import NotesInput from './NotesInput';

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onDeleteHandler(id) {
        const newNotes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes: newNotes });
    }

    onAddNoteHandler( { title, body } ) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toISOString(),
                        archived: false,
                    }
                ]
            }
        });
    }

    onArchiveHandler(id) {
        const notes = this.state.notes.map((note) => note.id === id
            ? { ...note, archived: !note.archived } 
            : note)
        this.setState({ notes });
    }

    onSearchHandler(text) {
        if (text.trim() === '') {
            this.setState({ notes: getInitialData() })
        } else {
            const filteredNotes = this.state.notes.filter((notes) => {
                return notes.title.toLowerCase().includes(text.toLowerCase())
            })
            this.setState({ notes: filteredNotes })
        }
    }

    render() {
        
        return (
        <div>
        <HeaderApp onSearch={this.onSearchHandler}/>
        <div className="note-app__body">
        <NotesInput addNote={this.onAddNoteHandler}/>
        <h2>Catatan Aktif</h2>
        <NotesActive notes={this.state.notes} onArchive={this.onArchiveHandler} onDelete={ this.onDeleteHandler }/>
        <h2>Arsip</h2>
        <ArchiveButton notes={this.state.notes} onDelete={this.onDeleteHandler}  onArchive={this.onArchiveHandler}/>
        </div>
        </div>
        )
    }



}

export default NotesApp;
