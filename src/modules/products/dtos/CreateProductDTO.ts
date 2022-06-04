export interface CreateProductDTO {
  code: string;
  name: string;
  quantity: number;
  unit_of_measurement: string;
  reference: string;
  location_id: string;
  company_id: number;
}