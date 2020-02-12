import { Component, OnInit, HostListener } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {Auth} from '../models/auth';
import {User} from '../models/user';

import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { Base } from '../services/base.service';
import {EventService} from '../services/event.service';
@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {

  auth = new Auth();
  current_user = new User();

  toggle_sidebar = true;
  user = new User();
  profile_image = '../../../assets/images/no-picture.jpg';

  constructor(
    private _userService: UserService,
    private router: Router,
    private _auth: AuthService,
    private activatedRoute: ActivatedRoute,
    private base: Base,
    private eventService: EventService

  ) {
    this.eventService.userDispatcher.subscribe(
      resp => {
        this.current_user = resp;
        if (this.current_user.image['url']) {
          this.profile_image = this.base.base_url + this.current_user.image['url'];
        }
      },
      err => {
          console.log(err);
      }
    );
  }

  ngOnInit() {
  }
}
