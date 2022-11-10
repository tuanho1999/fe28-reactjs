import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Counter.propTypes = {
    
};

function Counter(props) {
    const [count, setCount] = useState(0);
    useEffect (() => {
        document.title = 'count time';
        console.log(count);
    }
    )
    
    return (
        <div>
            <p>You click {count} times</p>
            <button onClick={() => setCount(count +1)}>Click me</button>
        </div>
    );
}

export default Counter;