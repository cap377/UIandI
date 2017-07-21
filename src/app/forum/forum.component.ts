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

  //used to display label for response in modal
  postType: string;

  currentReplyIndex:number;

  createPostFunction;

  modalContainer:boolean = false;
  questionList:any[] =[];
  ngOnInit()
  {
  }
  addQuestionPost()
  {
    let tempName = this.name;
    let tempResponse = this.response;
    this.name = "";
    this.response = "";
    let curTime = new Date();
    //alert(curTime);
    //let tempTimeStamp =
    this.questionList.push({
      name : tempName,
      response : tempResponse,
      replies : [],
      timeStamp : curTime
    });
    this.modalContainer = false;
  }
  addReplyPost()
  {
    let tempName = this.name;
    let tempResponse = this.response;
    this.name = "";
    this.response = "";
    let curTime = new Date();
    this.questionList[this.currentReplyIndex].replies.push({
      name : tempName,
      response : tempResponse,
      timeStamp : curTime
    });
    this.modalContainer = false;
  }
  getReplyPostInformation(i: number)
  {

    this.currentReplyIndex = i;
    this.postType = "Reply";
    this.createPostFunction = this.addReplyPost;
    this.modalContainer = true;
  }
  closePostInputModal()
  {
    this.name = "";
    this.response = "";
    this.modalContainer = false;
  }
  getQuestionPostInformation()
  {
    this.postType = "Question";
    this.createPostFunction = this.addQuestionPost;
    this.modalContainer = true;
  }

}
