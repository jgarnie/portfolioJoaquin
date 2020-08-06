import React from 'react'

export default function ProcessItem() {
    return (
        <>
        <div className="process__item">
            <div className="process__circle"></div>
            <h4 className="process__title" >Discover</h4>
            <p>Do not hesitate in contacting me and explain me your needs, we can see together if I am the solution you were waiting for.</p>
        </div>

        <div className="process__item">
            <div className="process__circle"></div>
            <h4 className="process__title">Design</h4>
            <p>From the designing part I like analize the proyect and try to find the best solution for it.</p>
        </div>

        <div className="process__item">
            <div className="process__circle"></div>
            <h4 className="process__title">Deploy</h4>
            <p>I like to prototype and improve/addapt the application with the given feedback from peers or clients.</p>
        </div>

        <div className="process__item">
            <div className="process__circle"></div>
            <h4 className="process__title">Test</h4>
            <p>Once the project is ready, I love to test it, break it and fix it making it better.</p>
        </div>
    </>
    )
}
