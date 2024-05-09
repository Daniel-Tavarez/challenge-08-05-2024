export default interface Address {
  id: number;
  client_id?: number;
  street: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
}
