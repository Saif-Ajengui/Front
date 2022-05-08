import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { User } from '../model/user.model';
import { UserService } from './_service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  previewSignsrc:any
  users=new User;
  imageSrc:any ='C:/Users/Ajengui/git/Rest---App/Rest_App/uploads/CaptureEmail.PNG';
  constructor(private _sanitizer : DomSanitizer,private _userService: UserService) { }

  ngOnInit() {
    this._userService.getUserDetails()
    .subscribe((response)=>{
      this.users = response
      
        
      console.log(this.users);
      
     
    }
    )

  }

  convert(base64String : any) {
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64String)
  }
  UpdateUser() {
   /* this._userService.UpdateUser()
    .subscribe((response)=>{
      this.users = response
      
        
      console.log(this.users);
      
     
    }
    )*/

  }




}
