import React from 'react';
import '../App.scss';

function OverviewHeader({ headerData, isExpanded, toggleClicked }) {
    return (
        <header>
            <ul className="header-list">
                {headerData.map(value => (
                    <li key={value}>{value}</li>
                ))}

                <li className="is-clickable" onClick={toggleClicked}>{isExpanded ? '-' : '+'}</li>
            </ul>
        </header>
    );
}

export default OverviewHeader;
