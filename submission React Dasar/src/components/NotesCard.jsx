import React from 'react';

import DeleteButton from './deleteButton';
import ArchiveButton from './ArchiveButton';
import { showFormattedDate } from '../utils/index';

function NotesCard({ id, title, body, createdAt, onDelete, onArchive, isArchive}) {
    return (
      <div className="note-item">
        <div className="note-item__content">
          <p className="note-item__title">{title}</p>
          <p className="note-item__date">{showFormattedDate(createdAt)}</p>
          <p className="note-item__body">{body}</p>
          <div className="note-item__action">
            <DeleteButton id={id} onDelete={onDelete}/>
            <ArchiveButton id={id} onArchive={onArchive} isArchive={isArchive} />
          </div>
        </div>
      </div>
    )
}

export default NotesCard;