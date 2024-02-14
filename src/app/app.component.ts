import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Optional,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { RoomsComponent } from "./rooms/rooms.component";
import { CommonModule } from "@angular/common";
import { ContainerComponent } from "./container/container.component";
import { EmployeeComponent } from "./employee/employee.component";
import { LoggerService } from "./logger.service";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  imports: [
    RouterOutlet,
    CommonModule,
    RoomsComponent,
    ContainerComponent,
    EmployeeComponent,
  ],
})
export class AppComponent implements OnInit {
  title = "hotel-inventory";

  @ViewChild("name", { static: true }) name!: ElementRef;

  constructor(@Optional() private loggerService: LoggerService) {}

  ngOnInit(): void {
    this.name.nativeElement.innerText = "Zendy Hotel";
  }

  // @ViewChild("user", { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }
}
