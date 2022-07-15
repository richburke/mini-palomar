import { API_ROUTE_FORM_5500 } from '../constants';
import { RawForm5500Entry } from '../types';
import { transformForm5500Entry } from './transform';

export const fetchForm5500Data = async () => {
  const response = await fetch(`/api/${API_ROUTE_FORM_5500}`);
  const json = await response.json();
  const values: RawForm5500Entry[] = Object.values(json);
  return values
    .map(transformForm5500Entry)
    .filter((entry) => entry.companyName?.length > 0)
    .sort((a, b) => (a.companyName > b.companyName ? 1 : -1));
};
