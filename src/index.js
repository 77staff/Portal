import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function initMembersJS(data) {
    ReactDOM.render(
        <React.StrictMode>
            <App data={data} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

window.GhostMembers = {
    initMembersJS: initMembersJS
};

// This will automatically load for local if an .env.local file is present
if (process.env.REACT_APP_ADMIN_URL) {
    let site = {
        adminUrl: process.env.REACT_APP_ADMIN_URL,
        siteUrl: process.env.REACT_APP_SITE_URL || process.env.REACT_APP_ADMIN_URL
    };
    initMembersJS({site});
}