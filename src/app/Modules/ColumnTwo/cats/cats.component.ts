import { Component, OnInit } from "@angular/core";
import { Cat } from "../../../Shared/Models/cat.model";
import { CatsService } from "../../../Shared/Services/cats.service";

@Component({
  selector: "app-cats",
  templateUrl: "./cats.component.html",
  styleUrls: ["./cats.component.css"],
})
export class CatsComponent implements OnInit {
  oneCat: Cat;
  postVote = new Cat();

  constructor(public catService: CatsService) {}

  ngOnInit() {
    this.catService.getCat().subscribe((x) => {
      (this.oneCat = x), console.log(x);
    });
  }

  voteUp() {
    this.postVote.image_id = "b7b";
    this.postVote.value = 1;
    this.catService.postVote(this.postVote).subscribe((x) => {
      (this.postVote = x), console.log(x);
    });
  }

  voteDown() {
    this.postVote.image_id = "b7b";
    this.postVote.value = 0;
    this.catService.postVote(this.postVote).subscribe((x) => {
      (this.postVote = x), console.log(x);
    });
  }
}
