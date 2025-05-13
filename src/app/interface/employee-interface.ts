export interface Employee {
    id?: number;
    firstName: string;
    middleName: string;
    lastName: string;
    fullName: string;
    userName: string;
    password: string;
    role: Role;
    salary: number;
    mobileNumber: string;
    email: string;
    dateOfBirth: number;
    bloodGroup: string;
    dateOfJoining: number;
    departmendId: number;
}

export interface Role {
    id?: number;
    name: string;
    description: string;
}