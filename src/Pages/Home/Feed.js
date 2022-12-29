import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import FeedElement from './FeedElement';


const Feed = () => {

    const { user } = useContext(AuthContext)
    const [feeds, setFeeds] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/post`)
            .then(res => res.json())
            .then(data => {
                setFeeds(data);
            })
    }, [user.email])


    return (
        <div>
            {feeds.map((feed) => <FeedElement key={feed._id}
                feed={feed}></FeedElement>)}
        </div>
    );
};

export default Feed;