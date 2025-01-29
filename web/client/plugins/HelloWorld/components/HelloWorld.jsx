import React from 'react';
import Message from '../../../components/I18N/Message';
// import HTML from '../../../components';


function HelloWorld({
    enabled,
    title, // conf from config
    center, // from state
    onZoomToExtent,
    content
}) {

    function handleZoomToExtent() {
        onZoomToExtent([-20, -20, 20, 20], 'EPSG:4326');
    }

    if (!enabled) {
        return null;
    }

    return (
        <div
            className="ms-helloworld"
            style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                zIndex: 900,
                transform: 'translate(-50%, -50%)',
                fontSize: 32

            }}
        >
            {title ?? 'Hello World'} {' '} {center?.x} {' '}
            <p>{content}</p>
            <button onClick={handleZoomToExtent}>
                <Message msgId="helloworld.hello" />
            </button>
        </div>
    );
}

export default HelloWorld;
