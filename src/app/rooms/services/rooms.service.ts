import { Injectable } from "@angular/core";
import { RoomList } from "../rooms";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class RoomsService {
  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: "Deluxe Room",
      amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
      price: 500,
      photos:
        "https://pix8.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x",
      checkInTime: new Date("11-Nov-2021"),
      checkOutTime: new Date("12-Nov-2021"),
      rating: 4,
    },
    {
      roomNumber: 2,
      roomType: "Deluxe Room",
      amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
      price: 500,
      photos:
        "https://pix8.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x",
      checkInTime: new Date("11-Nov-2021"),
      checkOutTime: new Date("12-Nov-2021"),
      rating: 4.534234,
    },
    {
      roomNumber: 3,
      roomType: "Deluxe Room",
      amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
      price: 500,
      photos:
        "https://pix8.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x",
      checkInTime: new Date("11-Nov-2021"),
      checkOutTime: new Date("12-Nov-2021"),
      rating: 2.6,
    },
  ];

  constructor() {
    console.log(environment);
    console.log("Rooms Service Initialized...");
  }

  getRooms() {
    return this.roomList;
  }
}
