export type Option = {
  id: string;
  label: string;
  // Property, allows to load nested options
  onLoadOptions?: (id: string) => Promise<Option[]>;
}