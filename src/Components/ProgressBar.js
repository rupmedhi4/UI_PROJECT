import React from 'react';
import './ProgressBar.css';

export default function ProgressBar({ data, totalAns }) {
    return (
        <div className='progress--div'>
            {data ? data.map((_, idx) => (
                <div key={idx}>
                    <span className={`number-bg ${totalAns <idx+1 ?null : "number"}`}>{idx + 1}</span>
                    {idx ===9 ? null :<div className={`progress-line ${totalAns < idx + 1 ? null : 'progress-line-color'}`}></div>}
                </div>
            )):null}
        </div>
    );
}
