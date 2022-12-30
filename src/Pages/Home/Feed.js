import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import FeedElement from './FeedElement';


const Feed = () => {

    const { user } = useContext(AuthContext)
    const [react, setReact] = useState(0);

    const { data: post, isLoading, refetch } = useQuery({
        queryKey: ["post"],
        queryFn: async () => {
            try {
                const res = await fetch('https://know-me-server.vercel.app/post',)
                const data = await res.json();
                return data;
            }
            catch (err) {

            }
        }
    })

    if (react > 0) {
        refetch()
    }

    return (
        <div>
            {post?.map((feed) => <FeedElement key={feed._id}
                feed={feed}
                react={react}
                setReact={setReact}></FeedElement>)}
        </div>
    );
};

export default Feed;