import React, { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";

const TabsComponent = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Tabs value={value} onChange={handleChange}>
                <Tab label="Tab One" />
                <Tab label="Tab Two" />
                <Tab label="Tab Three" />
            </Tabs>
            <Typography variant="body1" sx={{ p: 2 }}>
                {`You are viewing Tab ${value + 1}`}
            </Typography>
        </Box>
    );
};

export default TabsComponent;
