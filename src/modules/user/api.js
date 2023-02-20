import {ExpressRouter} from '../../app';
import * as UserRoutes from './route-methods.js';

export function applyUserRoutes(router: ExpressRouter) {
    router.post('/user', UserRoutes.createUser);
}
