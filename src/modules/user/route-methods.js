// @flow

import {UserJson, CreateUserParams, UpdateUserParams, DeleteUserParams} from './types.js';

export function createUser(req: ExpressRequest, res: ExpressResponse) {
  _createUser(req)
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      res.code(err.code).send(err.message);
    });
}

export function getUser(req: ExpressRequest, res: ExpressResponse) {
  _getUser(req)
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      res.code(err.code).send(err.message);
    });
}

export function updateUser(req: ExpressRequest, res: ExpressResponse) {
  _updateUser(req)
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      res.code(err.code).send(err.message);
    });
}
export function deleteUser(req: ExpressRequest, res: ExpressResponse) {
  _deleteUser(req)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.code(err.code).send(err.message);
    });
}

export function _createUser(req: ExpressRequest): Promise<UserJson> {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await req.db.userDbConnector.insert(req.body);
      resolve(user);
    } catch (err) {
      reject(err);
    }
  });
}
