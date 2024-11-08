export interface ITable {
  type: 'text' | 'avatar' | 'money';
  value: string | number;
  fontWeight: 'normal' | 'bold';
}[];