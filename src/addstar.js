import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_STAR } from './mutation';



function AddStar(props) {

    const [addStar, { loading, error }] = useMutation(ADD_STAR)

    return (

        <div>
            <button onClick={() => {
                addStar({
                    variables:
                        { repoid: props.id }
                }).then(res => {
                    props.refetch();
                })
            }}
            > Add star</button>
            {loading && <p>processing...</p>}
            {error && <p>{error.message}</p>}

        </div>
    )
}


export default AddStar;