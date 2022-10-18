import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react'
import scrollReveal from 'scrollreveal'

function ScrollReveal({ origin = 'top', delay = 400, className, children }) {
    const divRef = useRef()
    
    useEffect(() => {
        if (divRef.current)
        scrollReveal().reveal(divRef.current, {
            origin,
            delay,
            distance: '60px',
            duration: 2500
        })
        // eslint-disable-next-line
    }, [])

    return (
        <div ref={divRef} className={className}>
            {children}
        </div>
    );
}

ScrollReveal.propTypes = {
    origin: PropTypes.string,
    delay: PropTypes.number,
    className: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default ScrollReveal;