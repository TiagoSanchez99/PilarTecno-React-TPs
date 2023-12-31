import React, { useEffect } from "react";
import {
    Grid,
    Paper,
    Box
} from '@mui/material';

const FetchList = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={20}>
                <Paper sx={{ p: 2 }}>
                    <Box>
                        FetchList
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default FetchList;