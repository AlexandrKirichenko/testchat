import React from 'react';
import {gql, useQuery} from '@apollo/client';

const MY_QUERY = gql`
    {
        signIn(email: "du92kipppb@popcornfarm7.com", password: "123") {
            token
            user {
                email
                id
                avatar
            }
        }
    }
`;

const Registration = () => {
    const { loading, error, data } = useQuery(MY_QUERY);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
    return <div> <pre>
        {
            JSON.stringify(data,null,2)
        }
    </pre>
        <button>Login</button>
    </div>
}


export default Registration ;