import React, { useState } from 'react';
import OverviewHeader from './OverviewHeader';
import OverviewContent from './OverviewContent';
import '../App.scss';

function Overview({ content }) {
    const [isContentVisible, setIsContentVisible] = useState(true);

    function toggleContentVisibility() {
        setIsContentVisible(!isContentVisible);
    }

    return (
        <section className="pa3">
            <OverviewHeader
                headerData={content.headerData}
                isExpanded={isContentVisible}
                toggleClicked={toggleContentVisibility}
            />

            <OverviewContent
                isVisible={isContentVisible}
                contentA={content.contentA}
                contentB={content.contentB}
            />
        </section>
    );
}

export default Overview;
