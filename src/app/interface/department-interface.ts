export interface Department {
    id?: number;
    name: string;
    code: string;
}

export interface CreateDepartmentResponse {
  code: number;
  status: string;
  message: string;
  data: Department;
  errors: any[];
}

export interface DepartmentApiResponse {
  data: {
    data: Department[];
    totalElements: number;
    pageNumber: number;
    pageSize: number;
  };
}



