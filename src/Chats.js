import React from 'react';

import Chat from './Chat';

import './Chats.css';

function Chats() {
    return (
        <div className="chats">
            <Chat 
            name="Mark"
            message="Hey! How are you?"
            timestamp="25 minutes ago"
            profilePic="assets/images/mark-zuckerberg.jpg"
            />
            <Chat 
            name="Jeff"
            message="I'm Kinda doiing gret!?"
            timestamp="40 minutes ago"
            profilePic="assets/images/jeff-bezos.jpg"
            />
            <Chat 
            name="Steve"
            message="Steve lives on!?"
            timestamp="10 minutes ago"
            profilePic="assets/images/steve-jobs.jpg"
            />
        </div>
    )
}

export default Chats
