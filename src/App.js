import React from 'react';
import Overview from './Overview/Overview';
import '../node_modules/tachyons/css/tachyons.min.css';
import './App.scss';

/**
 * I guess this is from an API call or something.
 */
const RawJSON = '{"headerData":["30%","$2000000","85%"],"contentA":"This should be displayed in Panel A. This is visible by default","contentB":"This should be displayed in Panel B. This should be hidden by default"}';
const data = JSON.parse(RawJSON);

function App() {
    return (
        <main className="pa3">
            <h2 className="f2 mb5 bb pb1 b--black-20">Implementation 1 (Single component)</h2>
            <Overview content={data} />

            <h2 className="f2 mb5 mt5 bb pb1 b--black-20">Implementation 2 (Multiple components)</h2>
            <Overview content={data} />
            <Overview content={data} />
            <Overview content={data} />
        </main>
    );
}

export default App;
