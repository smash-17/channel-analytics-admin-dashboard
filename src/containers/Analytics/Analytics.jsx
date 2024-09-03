import React from 'react'
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import TabPanel from '../../components/TabPanel';

function Analytics() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return <Box>
        <Typography sx={styles.pageTitle} variant="h5">Analytics</Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Overview" id='tab-0' />
                <Tab label="Content" id='tab-1' />
                <Tab label="Audience" id='tab-2' />
                <Tab label="Revenue" id='tab-3' />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
         
        </TabPanel>

        <TabPanel value={value} index={1}>
        <Typography>two</Typography>
        </TabPanel>

        <TabPanel value={value} index={2}>
        <Typography>three</Typography>
        </TabPanel>

        <TabPanel value={value} index={3}>
            <Typography>four</Typography>
        </TabPanel>
    </Box>;
}

export default Analytics


/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
  pageTitle: {
      mb: 2
  },
}