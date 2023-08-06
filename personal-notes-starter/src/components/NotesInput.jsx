import React from 'react';


class NotesInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            charLimit: 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value.slice(0, this.state.charLimit),
            }
        });
    }

    onBodyChangeEventHandler (event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();

    if (typeof this.props.addNote === 'function') {
        this.props.addNote(this.state);
    }

    this.setState({
        title: '',
        body: '',
    });
    }

    render() {
        return (
            <form className='note-input' onSubmit={this.onSubmitEventHandler}>
            <h2 className='note-input__title'>Buat Catatan</h2>
            <p className='note-input__title__char-limit'>Sisa Karakter : {this.state.charLimit-this.state.title.length}</p>
            <input type="text" placeholder="ini adalah judul ..." value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
            <textarea name="" placeholder="Tuliskan Catatanmu Disini ..." className="note-input__body" value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
            <button type="submit" onClick={this.onSubmitEventHandler}>Buat</button>
            </form>
            )
    }
    
    }

export default NotesInput;
