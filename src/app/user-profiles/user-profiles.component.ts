import { Component, OnInit } from '@angular/core';
import { UserObject } from './user-object';
import { trigger, state, style, transition, animate} from '@angular/animations';

const usersProfileInformation = [{
  firstName: "Ravi",
  lastName: "Vungarala",
  email: "Ravi.Vungaral@siriuscom.com",
  phone: "210-971-6535",
  bio: "My name is Ravi Vungarala. I am the main sponsor for the Austin Center of Excellence program. My position includes overseeing and running ACE. I enjoy hiking and cricket in my free time.",
  img: "../../assets/ravi.png",
  backgroundImg: "../../assets/chennai.jpg",
  city: "India",
  title: "ACE Sponsor"
},
{
  firstName: "Andrew",
  lastName: "Bell",
  email: "andrew.bell@siriuscom.com",
  phone: "512-521-9579",
  bio: "I'm obviously Australian and have been in Austin/US for four years.  I actually moved here to work at Sirius and FiveOut.  Technically I work primarily for FiveOut, which is the creative agency arm of Sirius.  I manage the Austin Delivery Center where you will all be based. I don't have a family. I work in the Mobile team of FiveOut but lately we have become the company experts at VR/AR.  I live 5 minutes from the office.",
  img: "../../assets/andrew.png",
  backgroundImg: "../../assets/australia.jpg",
  city: "Australia",
  title: "Delivery Center Manager"
},
{
  firstName: "Braden",
  lastName: "Filler",
  email: "Braden.filler@siriuscom.com",
  phone: "512-840-7430",
  bio: "Hi everyone, I'm Braden. I am currently living in Salt Lake City but I am from Lake Wales, FL, none of you have probably heard of it, I just graduated with a degree in Computer Science.",
  img: "../../assets/braden.png",
  backgroundImg: "../../assets/saltlakecity.jfif",
  city: "Salt Lake City",
  title: "Associate Solutions Specialist"
},
{
  firstName: "Cherie",
  lastName: "Parsons",
  email: "cherie.parsons@siriuscom.com",
  phone: "512-840-7427",
  bio: "Hi. I'm Cherie. I am from Glendale Arizona and just graduated from NAU this May. I am moving to Austin.",
  img: "../../assets/cherie.png",
  backgroundImg: "../../assets/phoenix.jpg",
  city: "Glendale",
  title: "Associate Solutions Specialist"
},
{
  firstName: "Christopher",
  lastName: "Harlow",
  email: "Christopher.harlow@siriuscom.com",
  phone: "512-840-7431",
  bio: "Hi, my name is Christopher Harlow, but i prefer to go by Chris. I am married to a beautiful woman named Vanessa and we have a beautiful 6 month old daughter named Lily. I'm coming from Tucson to join the team. I graduated from the University of Arizona with a major in informatics and a minor in Organizational Leadership. Currently my strongest programming language is Java, but I have some experience in Python, CSS, HTML, JavaScript, and C.",
  img: "../../assets/chris.png",
  backgroundImg: "../../assets/tuscon.jpg",
  city: "Tuscon",
  title: "Associate Solutions Specialist"
},
{
  firstName: "Jenifer",
  lastName: "Sebastian",
  email: "jenifer.sebastian@siriuscom.com",
  phone: "512-840-7429",
  bio: "Hey everyone! My name is Jenifer Sebastian, I go by Jen! I'm from Houston. I graduated from the University of Houston in 2015. I have experience with JavaScript as well as Java. Im also familiar with the Ionic Framework.",
  img: "../../assets/jen.png",
  backgroundImg: "../../assets/houston.jpg",
  city: "Houston",
  title: "Associate Solutions Specialist"
},
{
  firstName: "Scout",
  lastName: "Martinelli",
  email: "scout.martinelli@siriuscom.com",
  phone: "314-972-2054",
  bio: "My name is Scout Martinelli I was born and raised in Saint Louis, MO. I recently graduated from Mizzou or the University of Missouri - Columbia with a dual major in electrical engineering and computer engineering with a minor in math and computer science.",
  img: "../../assets/scout2.png",
  backgroundImg: "../../assets/stl.jpg",
  city: "St. Louis",
  title: "Associate Solutions Specialist"
},
{
  firstName: "Will",
  lastName: "Cortes",
  email: "will.cortes@siriuscom.com",
  phone: "512-840-7433",
  bio: " My name is William Cortes, I usually go by Will. I'm from the Los Angeles area and I went to school nearby in the city of Orange at Chapman University. I just graduated with a major in computer science and a minor in mathematics.",
  img: "../../assets/will.png",
  backgroundImg: "../../assets/la.jpg",
  city: "Los Angeles",
  title: "Associate Solutions Specialist"
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
  selectedAnimation = "user-info-animation-down";
  glyphicon = true;
  glyphiconClass = "glyphicon glyphicon-chevron-down";
  title = 'Users';

  constructor() {

   }

   toggleData(user,index){
     if(user == this.selectedUser){
       setTimeout(() => {
         this.selectedUser = null;
         this.selectedIndex = null;
       }, 600);
       this.selectedAnimation = "user-info-animation-up";
     }
     else{
       this.selectedUser = user;
       this.selectedIndex = index;
       this.selectedAnimation = "user-info-animation-down";
     }
   }

  ngOnInit() {

  }

}
