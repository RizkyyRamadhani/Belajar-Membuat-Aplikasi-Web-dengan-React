import React from 'react';

function HeaderApp({ onSearch }) {
    return (
        <div className='note-app__header'>
            <h1>Notes</h1>
            <input type="text"  onChange={(event) => onSearch(event)} placeholder='Cari Catatan ...'/>
        </div>
    );
}

export default HeaderApp;