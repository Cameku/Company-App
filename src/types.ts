export type CompanyType = {
  name: string;
  address: string;
  url: string;
  employees: Employee[];
};

export type Employee = {
  name: string;
  age: number;
};
