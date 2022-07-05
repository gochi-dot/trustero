import { City } from "models/city.model";
import apiClient from "api/client";

export class CityService {
  static async fetchCities(): Promise<City[]> {
    return apiClient.get('/cities').then(res => res.data);
  }
}