// import React from 'react';
import { createPlugin } from "../../utils/PluginsUtils";
import { connect } from 'react-redux';
import { mapSelector } from '../../selectors/map';
import { createSelector } from 'reselect';
import { zoomToExtent } from '../../actions/map';
import helloworld from './reducers/helloworld';
import { getHelloWorldContent, isHelloWorldEnabled } from './selector/helloworld';
import { showHelloWorld } from './actions/helloworld';
import HelloWorld from './components/HelloWorld';
import HelloWorldButton from './components/HelloWorldButton';
import HelloWorldEpic from './epics/helloworld';
import HelloWorldMapSupport from './components/HelloWorldMapSupport';

const helloWorlMapStateToProps = createSelector([
    mapSelector,
    isHelloWorldEnabled,
    getHelloWorldContent
], (map, enabled, content) => {
    return {
        center: map?.center,
        enabled,
        content
    };
});

const ConnectedHelloWorld = connect(
    helloWorlMapStateToProps,
    {
        onZoomToExtent: zoomToExtent
    }
)(HelloWorld);

const ConnectedHelloWorldButton = connect(
    createSelector([isHelloWorldEnabled], (enabled) => {
        return {
            enabled
        };
    }), {
    onClick: showHelloWorld
}
)(HelloWorldButton);

export default createPlugin('HelloWorld', {
    component: ConnectedHelloWorld,
    containers: { // to pass render to another plugin (to push into component)
        SidebarMenu: {
            name: 'HelloWorld',
            position: 12,
            tool: ConnectedHelloWorldButton,
            priority: 10, // priority 2 is not display because there are priority 10 in toc
            doNotHide: true
        },
        TOC: { // new way to add component to somewhere in the layout. Is ther prefer way
            name: 'HelloWorld',
            Component: ConnectedHelloWorldButton,
            target: 'toolbar',
            priority: 2, // up priority is display if there are not donothide
            doNotHide: true
        },
        Map: {
            name: 'HelloWorld',
            Tool: HelloWorldMapSupport,
            alwaysRender: true
        }
    },
    reducers: {
        helloworld
    },
    epics: HelloWorldEpic
});
