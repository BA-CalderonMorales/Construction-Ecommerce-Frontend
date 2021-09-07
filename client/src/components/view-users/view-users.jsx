import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import useStyles from './styles';
import TableContainer from '../table-container/table-container';
import { Container, Grow, Grid, Typography } from '@material-ui/core';

const ViewUsers = ({ columns, users }) => {
    const classes = useStyles();
    const history = useHistory();
    const [data, setData] = useState([]);

    useEffect(() => {
        if (users.length) {
            users.map((user) => {
                let tempRow = {
                    _id: user._id,
                    email: user.email,
                    name: user.name
                }
                handleNewRowCreation(tempRow);
            })
        }
        history.push("/view-users");
    }, [users])

    const handleNewRowCreation = (newRow) => {
        let tempData = data;
        tempData.push(newRow);
        setData(tempData)
    }

    return (
        <>  
            <Grow in>
                <Container style={{ marginTop: 100 }} maxWidth="lg">
                    <Grid item xs={12} className={classes.gridContainer}>
                        <Typography variant="h3" className={classes.root}>Current Clients</Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.gridContainer}>
                        <TableContainer columns={columns} data={data} />
                    </Grid>
                </Container>
            </Grow> 
        </>
    )
}

export default ViewUsers
