import React from 'react';
import ViewUsers from '../view-users/view-users.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getAllUsers } from '../../actions/allUsers';

const AdminAllUsers = () => {
    const dispatch = useDispatch();
    const { users, isLoading } = useSelector((state) => state.allUsers);
    const columns = React.useMemo(
        () => [ 
                { accessor: '_id', Header: 'ID', width: 90 },
                {
                    accessor: 'email',
                    Header: 'Email',
                    width: 150,
                    editable: true,
                },
                {
                    accessor: 'name',
                    Header: 'Name',
                    width: 150,
                    editable: true,
                }
        ]
    );

    if (!users.length && !isLoading) {
        dispatch(getAllUsers());
        return (
            <>
                <Redirect to="/view-users" />
            </>
        );
    }
    return (
        <>
            {console.log(users)}
            <ViewUsers columns={columns} users={users} />
        </>
    );
}

export default AdminAllUsers;