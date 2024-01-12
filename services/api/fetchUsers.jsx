import React, { useEffect, useState } from 'react';

const fetchUsers = () => {

    const [users, setUsers] = useState([]);

    const fetchAllUsers = async () => {

        //call to json-placeholder users api
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (response.ok)
        {
            const data = await response.json();
            setUsers(data);
        }
    }

    useEffect( () => {
        fetchAllUsers();
    },[])

    return users;

}

export default fetchUsers;
