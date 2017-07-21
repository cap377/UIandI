import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  constructor() { }
  //questionListHtml:string = "";

  //variables to hold form input data
  name:string;
  response: string;

  createPostFunction;

  modalContainer:boolean = false;
  questionList:any[] =[];
  ngOnInit()
  {
  }
  addQuestionPost()
  {

  }
  getReplyPostInformation(i: number)
  {

  }
  closePostInputModal()
  {
    this.name = "";
    this.response = "";
    this.modalContainer = false;
  }
  getQuestionPostInformation()
  {
    this.createPostFunction = this.addQuestionPost;
    this.modalContainer = true;
  }

  // createQuestionPost()
  // {
  //   questionListHtml += `
  //     <div class="row">
  //
  //     </div>
  //   `;
  // }
}
