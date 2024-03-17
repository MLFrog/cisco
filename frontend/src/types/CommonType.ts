export interface IResponse <T> {
    code: number;
    message: string;
    data: T
}

export interface IUser {
    name: string,
    id: string,
}