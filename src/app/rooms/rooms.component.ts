import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Room, RoomList } from "./rooms";
import { CommonModule } from "@angular/common";
import { RoomsListComponent } from "../rooms-list/rooms-list.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: "app-rooms",
  standalone: true,
  imports: [CommonModule, RoomsListComponent, HeaderComponent],
  templateUrl: "./rooms.component.html",
  styleUrl: "./rooms.component.scss",
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  hotelName = "Zendy hotel";
  numberOfRooms = 10;
  hideRooms = false;
  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  title = "RoomList";

  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;

  constructor() {}

  ngOnInit(): void {
    console.log(this.headerComponent);
    this.roomList = [
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
  }

  ngDoCheck(): void {
    console.log("On Changes Is Called");
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View";
  }

  ngAfterViewChecked(): void {
    this.headerComponent.title = "Rooms View";
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Room List";
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: "Deluxe Room",
      amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
      price: 500,
      photos:
        "https://pix8.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x",
      checkInTime: new Date("11-Nov-2021"),
      checkOutTime: new Date("12-Nov-2021"),
      rating: 2.6,
    };

    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}
