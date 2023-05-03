export type CompanyType = {
  name: string;
  address: string;
  url: string;
  employees: [
    {
      name: string;
      age: number;
    }
  ];
};
