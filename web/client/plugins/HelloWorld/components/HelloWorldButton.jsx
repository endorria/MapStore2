import React from 'react';
// import Message from '../../../components/I18N/Message';
import { Button, Glyphicon } from 'react-bootstrap';
import tooltip from '../../../components/misc/enhancers/tooltip';

const ButtonWithTooltip = tooltip(Button);

function HelloWorldButton({
    enabled,
    onClick
}) {
    function handleOnClick() {
        onClick(!enabled);
    }
    return (
        <ButtonWithTooltip onClick={handleOnClick}
            tooltipid="helloworld.hello"
            tooltipPosition="left"
            className="square-button"
            bsStyle={enabled ? 'success' : "tray"}>
            {/* <Message msgId="helloworld.test" />
         */}
            <Glyphicon glyph="audio" />
        </ButtonWithTooltip>);

}
export default HelloWorldButton;
