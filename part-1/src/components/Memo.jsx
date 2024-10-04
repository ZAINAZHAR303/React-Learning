import React from 'react'

function Memo({name}){
    console.log('rendering memo')
    return(
        <div>
            memo function {name}
        </div>
    )
}

export default React.memo(Memo)