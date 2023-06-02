import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../app.component";
import {ActivatedRoute} from "@angular/router";
import {WelcomeDataService} from "../service/data/welcome-data.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'Some Welcome message.'
  welcomeMessageFromService: string = ''
  name = ''

  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {
  }

  ngOnInit() {
    console.log(this.message)
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    // console.log(this.service.executeBeanService());

    this.service.executeBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleResponseError(error)
    );

    //console.log('last line of getWelcomeMessage')
  }

  // @ts-ignore
  handleSuccessfulResponse(response: any) {
    this.welcomeMessageFromService = response.message
    //console.log(response);
    //console.log(response.message);
  }

  handleResponseError(error: any) {
    //console.log(error);
    //console.log(error.error)
    //console.log(error.error.message)
    this.welcomeMessageFromService = error.error.message
  }
}
