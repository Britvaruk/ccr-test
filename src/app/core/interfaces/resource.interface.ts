export interface Resource {
  id?: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

export interface ResourcesPage {
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
  data: Resource[];
}