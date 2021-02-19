import { Component, OnInit } from "@angular/core";
import { Loader } from "@googlemaps/js-api-loader";

@Component({
  selector: "app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor() {}

  loader = new Loader({
    apiKey: "YOUR_API_KY",
    version: "weekly"
  });

  ngOnInit() {}

  initMap() {
    this.loader.load().then(() => {
      let map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8
        }
      );
    });
  }
}
