
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';

function Inview({ children }) {
    const [InView, setInView] = useState();

    const [ref, inView] = useInView({
        threshold: 0.3
    })

    const effect = () => {
        setInView(true);
    }

    useEffect(() => {
        if (!inView) {
            return;
        }
        effect();
    }, [inView]);

    return (
        <div className={`${InView ? 'frame_in' : ''}`} ref={ref} >{children}</div>
    )
}

export default Inview