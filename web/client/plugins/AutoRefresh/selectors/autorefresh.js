export const isPaused = state => state?.autorefresh?.paused;
export const isActiveRefresh = state => state?.autorefresh?.enabled;
export const refreshableLayers = state => state.layers.flat.filter(l => l.group !== 'background' && l.autoRefreshInterval > -1);

// Do not consider background layers, since they are not expected to be updated frequently
// and they are not visible in the layer switcher,
// so they cannot be selected by the user in the settings
export const availableLayers = state => state.layers.flat.filter(l => l.group !== 'background' && (!l.autoRefreshInterval || l.autoRefreshInterval === -1));

