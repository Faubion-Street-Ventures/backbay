export interface userDbConnectorInterface {
    insert(params: CreateUserParams): Promise<UserJson>;
    getById(id: number): Promise<UserJson>;
    getByAWSCognitoUserId(awsCognitoUserId: string): Promise<UserJson>;
    update(id: number, params: UpdateUserParams): Promise<UserJson>;
    updateByAWSCognitoUserId(awsCognitoUserId: string, params: UpdateUserParams): Promise<UserJson>;
    delete(id: number): Promise<void>;
}

export default userDbConnectorInterface;