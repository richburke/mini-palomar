import { Form5500Entry, RawForm5500Entry } from '../types';

export const transformForm5500Entry = (
  entry: RawForm5500Entry,
): Form5500Entry => ({
  ein: entry.ein,
  companyName: entry.company_name,
  planYear: entry.plan_year,
  employeeCount: entry.employee_count,
  companyState: entry.company_state,
  premiumSum: entry.premium_sum,
  brokerCommissionSum: entry.broker_commission_sum,
  participantsSum: entry.participants_sum,
});
