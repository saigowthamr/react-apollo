import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Remove_Star } from './mutation';




function RemoveStar(props) {

    const [removeStar, { loading, error }] = useMutation(Remove_Star)

    return (

        <div>
            <button onClick={() => {
                removeStar({
                    variables:
                        { repoid: props.id }
                }).then(res => {
                    props.refetch();
                })
            }}
            > remove star</button>
            {loading && <p>processing...</p>}
            {error && <p>{error.message}</p>}

        </div>
    )
}


export default RemoveStar;