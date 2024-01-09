import React, { useState } from 'react';
import './Header.css';
import { Box, TextField } from '@mui/material';
import { Grid } from '@mui/material';


function Header() {

    const [Login, setLogin] = useState("Login");
    const handleLogin = e => {
        setLogin("Logout")
    }

    const [value, Setvalue] = useState("");
    const handleChange = e => {
        Setvalue(e.target.value)
    }

    return (
        
        <header className="dashboard-header">
            <h2 className="logoname">BlueReceipt</h2>
            
            
            {/* </div>
            </div> */}
        </header>
    );
};

export default Header;
