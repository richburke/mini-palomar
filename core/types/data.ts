export type RawForm5500Entry = {
  ein: number;
  company_name: string;
  plan_year: number;
  employee_count: number;
  company_state: string;
  premium_sum: number;
  broker_commission_sum: number;
  participants_sum: number;
};

export type Form5500Entry = {
  ein: number;
  companyName: string;
  planYear: number;
  employeeCount: number;
  companyState: string;
  premiumSum: number;
  brokerCommissionSum: number;
  participantsSum: number;
};
