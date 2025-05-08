import { Department } from "../department.model";

export interface CreateDepartmentResponse {
  code: number;
  status: string;
  message: string;
  data: Department;
  errors: any[];
}