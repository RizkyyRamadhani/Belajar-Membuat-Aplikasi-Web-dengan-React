import React from 'react';

function HeaderApp ({ onSearch }) {
    return (
        <div className="note-app__header">
            <h1>Notes</h1>
            <input
                type="text"
                placeholder='Cari catatan ...'
                onChange={(e) => onSearch(e.target.value)} />

        </div>
    );
}

export default HeaderApp;