import React, { useState } from 'react';
import OverviewPanel from './OverviewPanel';
import '../App.scss';

function OverviewContent({ isVisible, contentA, contentB }) {
    const [activePanel, setActivePanel] = useState(contentA);

    function handleClick(name) {
        setActivePanel(name);
    }

    return (
        <div className={`content pa2 ${isVisible ? 'db' : 'dn'}`}>
            <OverviewPanel
                content={contentA}
                onPanelClick={() => handleClick(contentA)}
                isVisible={activePanel === contentA}
            />
            <OverviewPanel
                content={contentB}
                onPanelClick={() => handleClick(contentB)}
                isVisible={activePanel === contentB}
            />
        </div>
    );
}

export default OverviewContent;
