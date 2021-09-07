import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';
import TableContainer from '../table-container/table-container';
import { Container, Grow, Grid, Typography } from '@material-ui/core';

const ViewContracts = ({ columns, contracts }) => {
    const classes = useStyles();
    const history = useHistory();
    const [data, setData] = useState([]);

    useEffect(() => {
        if (contracts.length) {
            contracts.map((contract) => {
                let tempRow = {
                    contractId: contract.contractId,
                    date: contract.date,
                    typeOfWork: contract.typeOfWork,
                    descriptionOfProject: contract.descriptionOfProject,
                    customerPriceProposal: contract.customerPriceProposal,
                    location: contract.location,
                    image: contract.image,
                }
                handleNewRowCreation(tempRow);
            })
        } 
        history.push("/view-contracts");
    }, [contracts])

    const handleNewRowCreation = (newRow) => {
        setData([
            {...newRow},
            ...data
        ])
    }

    return (
        <>  
            <Grow in>
                <Container style={{ marginTop: 100 }} maxWidth="lg">
                    <Grid item xs={12} className={classes.gridContainer}>
                        <Typography variant="h3" className={classes.root}>Latest Proposals</Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.gridContainer}>
                        <TableContainer columns={columns} data={data} />
                    </Grid>
                </Container>
            </Grow> 
        </>
    )
}

export default ViewContracts
