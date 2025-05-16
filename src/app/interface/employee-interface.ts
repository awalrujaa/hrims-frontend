export interface Employee {
    id?: number;
    firstName: string;
    middleName: string;
    lastName: string;
    userName: string;
    password: string;
    roleType: string;
    salary: number;
    mobileNumber: string;
    email: string;
    dateOfBirth: string;
    bloodGroup: string;
    dateOfJoining: string;
    departmentId: number;
    addressList: Address[];
}

export interface Address {
  id?:number;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
  type: string;
}

export interface Role {
    id?: number;
    name: string;
    description: string;
}

export interface CreateEmployeeResponse {
  code: number;
  status: string;
  message: string;
  data: Employee;
  errors: any[];
}

export interface EmployeeApiResponse {
  data: {
    data: Employee[];
    totalElements: number;
    pageNumber: number;
    pageSize: number;
  };
}
