import React from "react";
import "./Note.css"

function Note() {
    return (
        <div className="note">
            <h1 className="note h1">This is the note title</h1>
            <p className="note p">This is the note content.</p>
        </div>
    )
}
export {Note};