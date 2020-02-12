import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {AuthService} from '../../services/auth.service';
import {Auth} from '../../models/auth';
import { Notification } from "../../services/notification";
import {EventService} from "../../services/event.service";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  auth = new Auth();
  user = new User();

  constructor(
    private router: Router, private _auth: AuthService,
    private userService: UserService, private activatedRoute: ActivatedRoute,
    private eventService: EventService
  ) { }

  ngOnInit() {
    
    }

    editProfile(){
        this.userService.updateProfile(this.user).subscribe(
        resp => {
            if (resp.success) {
                this.router.navigateByUrl('/dashboard/profile');
                Notification.show("success", "Update Successfully");
                this.eventService.userEvent(resp.update_profile);
            }
        },
            err => {
                Notification.show("error");
            }
        );
    }
}
