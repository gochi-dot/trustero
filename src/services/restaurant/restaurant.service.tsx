import { Restaurant } from "models/restaurant.model";
import apiClient from "api/client";

export class RestaurantService {
  static async fetchRestaurantsByCity(cityId: string): Promise<Restaurant[]> {
    return apiClient.get(`/restaurants/${cityId}`).then(res => res.data);
  }
}