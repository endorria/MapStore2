export const AUTOREFRESH_START = 'AUTOREFRESH:START';
export const AUTOREFRESH_STOP = 'AUTOREFRESH:STOP';
export const AUTOREFRESH_PAUSE = 'AUTOREFRESH:PAUSE';

export const autoRefreshStart = () => {
    return {
        type: AUTOREFRESH_START,
        enabled: true
    };
};
export const autoRefreshStop = () => {
    return {
        type: AUTOREFRESH_STOP,
        enabled: false
    };
};
export const autoRefreshPause = (paused) => {
    return {
        type: AUTOREFRESH_PAUSE,
        paused
    };
};
