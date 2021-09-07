import React from 'react'
import ViewContracts from '../view-contracts/view-contracts.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getContracts } from '../../actions/contract.js';

const AdminContracts = () => {
    const dispatch = useDispatch();
    // Inside of reducers, index.js, it is state.posts or state.isLoading, we destructure here to manipulate.
    const { contracts, isLoading } = useSelector((state) => state.contracts);
    const columns = React.useMemo(
        () => [ 
                { accessor: 'contractId', Header: 'ID', width: 90 },
                {
                    accessor: 'date',
                    Header: 'Date',
                    width: 150,
                    editable: false,
                },
                {
                    accessor: 'typeOfWork',
                    Header: 'Work Type',
                    width: 150,
                    editable: true,
                },
                {
                    accessor: 'descriptionOfProject',
                    Header: 'Description',
                    width: 150,
                    editable: true,
                },
                {
                    accessor: 'customerPriceProposal',
                    Header: 'Price Proposal',
                    type: 'number',
                    width: 150,
                    editable: true,
                },
                {
                    accessor: 'location',
                    Header: 'Location',
                    type: 'number',
                    width: 150,
                    editable: true,
                },
                {
                    accessor: 'image',
                    Header: 'Image',
                    width: 150,
                    editable: true,
                }
        ]
    ) 
    
    if (!contracts.length && !isLoading) {
        dispatch(getContracts())
        return (
            <>
                <Redirect to="/view-contracts" />
            </>
        )
    }
    return (
        <>
            <ViewContracts columns={columns} contracts={contracts} />
        </>
    )
    
}


export default AdminContracts