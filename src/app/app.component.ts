import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { RoomsComponent } from "./rooms/rooms.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  imports: [RouterOutlet, CommonModule, RoomsComponent],
})
export class AppComponent implements OnInit {
  title = "hotel-inventory";

  @ViewChild("user", { static: true }) name!: ElementRef;

  ngOnInit(): void {
    this.name.nativeElement.innerText = "Zendy Hotel";
  }

  // @ViewChild("user", { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }
}
