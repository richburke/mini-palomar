import { CURRENCY_FORMAT_USD_DEFAULT } from '../constants';

export const formatNumber =
  (
    options: Intl.NumberFormatOptions | undefined = undefined,
    locale = 'en-US',
  ) =>
  (value: number) =>
    Intl.NumberFormat(locale, options).format(value);

export const formatCurrency =
  (options = CURRENCY_FORMAT_USD_DEFAULT, locale = 'en-US') =>
  (value: number) =>
    formatNumber(options, locale)(value);
