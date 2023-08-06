import React from "react";
import HeaderApp from "./HeaderApp";
import NotesInput from "./NotesInput";
import NotesBody from "./NotesBody";
import { getInitialData } from "../utils/index";

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: getInitialData(),
            search: '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onActiveHandler = this.onActiveHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onDeleteHandler(id) {
        const datas = this.state.datas.filter((data) => data.id !== id);
        this.setState({ datas });
    }

    onSearchHandler(event) {
        const SearchValue = event.target.value.toLowerCase();
        this.setState({ search: SearchValue });
        event.preventDefault();
    }

    onActiveHandler(id) {
        const notesActive = this.state.datas.filter((note) => note.id === id);
        const activeNotes = (notesActive[0].archived = true);
        this.setState({ activeNotes });
    }

    onArchiveHandler(id) {
        const NotesArchive = this.state.datas.filter((note) => note.id === id);
        const undoNotes = (NotesArchive[0].archived = false);
        this.setState({ undoNotes });
    }

    onAddNoteHandler({ title, body}) {
        this.setState((prevState) => {
            return {
                datas: [
                    ...prevState.datas,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toDateString(),
                        archived:false,
                    }
                ]
            }
        })
    }

    render() {
        const searchData = !this.state.search ? this.state.datas : this.state.datas.filter(data => data.title.toLowerCase().match(this.state.search));
        const activeData = searchData.filter(data => data.archived === false);
        const archiveData = searchData.filter(data => data.archived === true);

        return (
        <div>
            <HeaderApp onSearch={this.onSearchHandler}/>
            <div className="note-app__body">
            <NotesInput addNote = {this.onAddnoteHandler}/>
          
            <NotesBody onDelete={this.onDeletehandler} activeData={activeData} archiveData={archiveData} onActive={this.onActiveHandler} onArchive={this.onArchiveHandler}/>
            </div>
        </div>
        );
    }
}

export default NotesApp;