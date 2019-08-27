import React from 'react';
import { reposQuery } from './queries'
import { useQuery } from '@apollo/react-hooks';
import AddStar from './addstar'
import RemoveStar from './removestar'

function Myrepositories() {

    const { loading, error, data, refetch } = useQuery(reposQuery)

    if (loading) return <p>loading...</p>
    if (error) return <p>{error.message}</p>;
    let currentLength = data.viewer.repositories.edges.length;

    return (

        <div className="repos">
            <h2>First {currentLength} repositories</h2>
            {data.viewer.repositories
                .edges.map(({ node }) =>
                    <ul className="list" key={node.id}>
                        <li>
                            {node.name}
                            {node.viewerHasStarred ?
                                <RemoveStar id={node.id} refetch={refetch} /> :
                                <AddStar id={node.id} refetch={refetch} />
                            }
                        </li>
                        <li>stars {node.stargazers.totalCount}</li>
                    </ul>
                )}
        </div>
    );
}


export default Myrepositories;
