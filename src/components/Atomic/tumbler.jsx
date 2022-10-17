import * as React from 'react';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Tumbler({theme}) {

    const [switchState, setSwitchState] = useState(false);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('theme'));
        items === 'light' ? setSwitchState(false) : setSwitchState(true);
    },[])

    const themeToggler = (e) => {
        // e.target.checked ? theme('dark') : theme('light');
        if(e.target.checked) {
            setSwitchState(true);
            theme(localStorage.setItem('theme', JSON.stringify('dark')));
        } else {
            setSwitchState(false);
            theme(localStorage.setItem('theme', JSON.stringify('light')));
        }
        
    }

    return (
        <div>
            <Switch color="warning" size='big' checked={switchState} onChange={themeToggler} />
        </div>
    );
}