import React, { useState } from 'react'

function Counter() {
    
    const [count, setCount] = useState(0)
    
    function incrementCount() {
    setCount(count+1)
}

    return (
        <div>
            <button onClick={incrementCount}>You've clicked me { count } times</button>
        </div>
    )
}

export default Counter
