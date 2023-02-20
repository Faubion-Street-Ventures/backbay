// @flow

export type UserJson = {
  id: number,
  name: string,
  email: string,
  awsCognitoUserId: string,
  phone: string,
  profileImage: string,
};

export type CreateUserParams = {
  name: string,
  email: string,
  awsCognitoUserId: string,
  phone: string,
};

export type UpdateUserParams = {id: number, name?: string, email?: string, phone?: string};

export type DeleteUserParams = {id: number};

export type UserDbConnectorResponse = {
  id: number,
  name: string,
  aws_cognito_user_id: string,
  email: string,
  phone: string,
  profile_image: string,
  created_at: string,
};

export type UserDbConnectorResponseRow = {rows: UserDbConnectorResponse[]};
