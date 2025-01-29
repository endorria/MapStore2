import { Observable } from 'rxjs';
import { addContentToHelloWorld, SHOW_HELLO_WORLD } from '../actions/helloworld';
import axios from '../../../libs/ajax';
export const initializeHelloWorldOnSelectLayer = (action$) => {
    return action$.ofType(SHOW_HELLO_WORLD)
        .filter(action => action.enabled)
        .switchMap((action) => {
            return Observable.defer(() => axios.get('/test'))
                .switchMap(() => {
                    return Observable.of(addContentToHelloWorld('SUCCESS'));
                })
                .catch(() => {
                    return Observable.of(addContentToHelloWorld('FAIL'));
                });
        });
};
export default {
    initializeHelloWorldOnSelectLayer
};