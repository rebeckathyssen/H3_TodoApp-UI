import { Component, OnInit, Input } from "@angular/core";
import {
  trigger,
  state,
  transition,
  style,
  animate,
} from "@angular/animations";

import * as $ from "jquery";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  animations: [
    trigger("fade", [
      transition("void => *", [style({ opacity: 0 }), animate(1500)]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  today: number = Date.now();
  constructor() {}

  ngOnInit() {
    /*$(document).ready(function () {
      alert("jquery loaded");
    });*/
  }
}
