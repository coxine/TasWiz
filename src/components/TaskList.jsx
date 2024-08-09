import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TaskCard from './TaskCard';
import Typography from '@mui/material/Typography';




export default function TaskList(prop) {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <React.Fragment>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {prop.title}
                        </Typography>
                    </CardContent>
                    <TaskCard taskName="任务1" taskDetail="任务细节" />
                    <TaskCard taskName="任务2" taskDetail="任务细节" />
                </React.Fragment></Card>
        </Box>
    );
}