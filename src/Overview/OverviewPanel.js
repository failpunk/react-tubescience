import React from 'react';
import '../App.scss';

function OverviewPanel({ content, isVisible = true, onPanelClick }) {
    return (
        <div
            className={`fl ba w-50 pa2 min-h2 ${isVisible ? '' : 'grayed-out is-clickable'}`}
            onClick={onPanelClick}
        >
            {isVisible ? content : ' '}
        </div>
    );
}

export default OverviewPanel;
