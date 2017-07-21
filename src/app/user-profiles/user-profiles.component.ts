import { Component, OnInit } from '@angular/core';
import { UserObject } from './user-object';
import { trigger, state, style, transition, animate} from '@angular/animations';

const usersProfileInformation = [{
  firstName: "Scout1",
  lastName: "Martinelli",
  email: "scout.martinelli@siriuscom.com",
  phone: "314-972-2054",
  bio: "My name is Scout Martinelli I was born and raised in Saint Louis, MO. I recently graduated from Mizzou or the University of Missouri - Columbia with a dual major in electrical engineering and computer engineering with a minor in math and computer science. I have already moved down to Austin with in the past three days. Im ecstatic to meet everyone!",
  img: "../../assets/Scout.jpg",
  backgroundImg: "../../assets/ScoutBackground.jpg"
},
{
  firstName: "Scout2",
  lastName: "Martinelli",
  email: "scout.martinelli@siriuscom.com",
  phone: "314-972-2054",
  bio: "My name is Scout Martinelli I was born and raised in Saint Louis, MO. I recently graduated from Mizzou or the University of Missouri - Columbia with a dual major in electrical engineering and computer engineering with a minor in math and computer science. I have already moved down to Austin with in the past three days. Im ecstatic to meet everyone!",
  img: "../../assets/Scout.jpg",
  backgroundImg: "../../assets/ScoutBackground.jpg"
},
{
  firstName: "Scout3",
  lastName: "Martinelli",
  email: "scout.martinelli@siriuscom.com",
  phone: "314-972-2054",
  bio: "My name is Scout Martinelli I was born and raised in Saint Louis, MO. I recently graduated from Mizzou or the University of Missouri - Columbia with a dual major in electrical engineering and computer engineering with a minor in math and computer science. I have already moved down to Austin with in the past three days. Im ecstatic to meet everyone!",
  img: "../../assets/Scout.jpg",
  backgroundImg: "../../assets/ScoutBackground.jpg"
}];

@Component({
  selector: 'app-user-profiles',
  templateUrl: './user-profiles.component.html',
  styleUrls: ['./user-profiles.component.scss'],
  // animations: [
  //   trigger('slideUpDown', [
  //     state('up', style({
  //       marginTop: -330
  //       //transform: 'translate3d(0, 0, 0)'
  //     })),
  //     state('down', style({
  //       marginTop: 0
  //       //transform: 'translate3d(0, 100%, 0)'
  //     })),
  //     transition('up <=> down', animate('300ms ease-in-out'))
  //   ]),
  // ]
})

export class UserProfilesComponent implements OnInit {
  users = usersProfileInformation;
  selectedUser = null;
  selectedIndex = null;
  menuState = "up";
  glyphicon = true;
  glyphiconClass = "glyphicon glyphicon-chevron-down";
  title = 'Users';

  constructor() {

   }

   toggleData(user,index){
     if(user == this.selectedUser){
       this.selectedUser = null;
       this.selectedIndex = null;
      //  this.menuState = 'down';
     }
     else{
       this.selectedUser = user;
       //setTimeout
       this.selectedIndex = index;
      //  this.menuState = 'up';
     }


    // this.glyphicon = !this.glyphicon;
     //this.glyphiconClass = this.glyphicon ? "glyphicon glyphicon-chevron-down" : "glyphicon glyphicon-chevron-up";
   }
  ngOnInit() {

  }

}
