import { Component } from "@angular/core";

@Component ({
  selector: "app-practice",
  templateUrl: "./practice.component.html",
  styleUrls: ['./practice.component.css']
})

export class Practice {
  person = {
      firstName: "Matt",
      lastName: "Sissom",
      age: 39
  }

  isClicked = true;

displayText () {
  this.isClicked = !this.isClicked
}
}


