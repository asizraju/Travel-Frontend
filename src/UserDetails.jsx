import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserDetails = () => {
    const [userdata, setUserdata] = useState([])

    useEffect(() => {
        const getdata = async () => {
            try {
                const response = await axios.get("http://localhost:5000/user/list");
                setUserdata(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getdata();
    }, [])

    const deletedata = async (userid) => {
        try {
            await axios.delete(`http://localhost:5000/user/delete/${userid}`);
            setUserdata(userdata.filter(user => user._id !== userid));
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div style={{ overflowX: 'auto' }}>
            <table
                className="table"
                style={{
                    border: '1px solid black',
                    width: '100%',
                    borderCollapse: 'collapse',
                    minWidth: '600px'
                }}
            >
                <thead>
                    <tr>
                        <th scope="col" style={{ padding: '8px', backgroundColor: 'lightblue' }}>Index</th>
                        <th scope="col" style={{ padding: '8px', backgroundColor: 'lightblue' }}>User ID</th>
                        <th scope="col" style={{ padding: '8px', backgroundColor: 'lightblue' }}>Username</th>
                        <th scope="col" style={{ padding: '8px', backgroundColor: 'lightblue' }}>Email</th>
                        <th scope="col" style={{ padding: '8px', backgroundColor: 'lightblue' }}>Phone Number</th>
                        <th scope="col" style={{ padding: '8px', backgroundColor: 'lightblue' }}>Password</th>
                        <th scope="col" style={{ padding: '8px', backgroundColor: 'lightblue' }}>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {userdata.map((user, index) => (
                        <tr key={user._id}>
                            <th
                                scope="row"
                                style={{
                                    backgroundColor: index % 2 === 0 ? 'lightblue' : 'lightcyan',
                                    color: 'black',
                                    padding: '8px'
                                }}
                            >
                                {index + 1}
                            </th>
                            <td
                                style={{
                                    backgroundColor: index % 2 === 0 ? 'lightblue' : 'lightcyan',
                                    color: 'black',
                                    padding: '8px'
                                }}
                            >
                                {user._id}
                            </td>
                            <td
                                style={{
                                    backgroundColor: index % 2 === 0 ? 'lightblue' : 'lightcyan',
                                    color: 'black',
                                    padding: '8px'
                                }}
                            >
                                {user.username}
                            </td>
                            <td
                                style={{
                                    backgroundColor: index % 2 === 0 ? 'lightblue' : 'lightcyan',
                                    color: 'black',
                                    padding: '8px'
                                }}
                            >
                                {user.email}
                            </td>
                            <td
                                style={{
                                    backgroundColor: index % 2 === 0 ? 'lightblue' : 'lightcyan',
                                    color: 'black',
                                    padding: '8px'
                                }}
                            >
                                {user.phonenumber}
                            </td>
                            <td
                                style={{
                                    backgroundColor: index % 2 === 0 ? 'lightblue' : 'lightcyan',
                                    color: 'black',
                                    padding: '8px'
                                }}
                            >
                                {user.password}
                            </td>
                            <td
                                style={{
                                    backgroundColor: index % 2 === 0 ? 'lightblue' : 'lightcyan',
                                    color: 'black',
                                    padding: '8px'
                                }}
                            >
                                <button
                                    onClick={() => deletedata(user._id)}
                                    style={{
                                        background: 'black',
                                        color: 'white',
                                        border: 'none',
                                        padding: '5px 10px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserDetails
