export enum USER_TYPE {
    CX = "CX",
    OPERATIONS = "Operations",
    TEACHER = "Teacher"
};

export type User = {
    name: string,
    email: string,
    type: USER_TYPE
};

export type InputData = {
    name: string,
    type: USER_TYPE,
    orderBy: string
    orderType: string
};