import React from 'react';
import './Legend.css';

const Legend = () => {
    return (
        <div className="legend">
            <div style={{ "--color": 'green' }}>Sudah ditanami</div>
            <div style={{ "--color": 'yellow' }}>Belum ditanami</div>
            <div style={{ "--color": 'red' }}>Tidak bisa ditanami</div>
        </div>
    );
}
export default Legend;