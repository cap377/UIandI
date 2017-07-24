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

  requiredInputText:string = "";
  requiredResponseText:string = "";

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

    let curDate = new Date();

    let formattedCurDate = 'sent ' + (curDate.getMonth()+1) + '/' + curDate.getDate() + '/' + curDate.getFullYear() + ' at ';
    let curHour = curDate.getHours();
    let meridiem = 'AM';
    if(curHour == 0)
    {
      curHour = 12;
    }
    else if(curHour == 12)
    {
      meridiem = 'PM';
    }
    else if(curHour > 12)
    {
      curHour -= 12;
      meridiem = 'PM';
    }
    let curTime = curHour + ":" + curDate.getMinutes() + " " + meridiem;
    formattedCurDate += curTime;

    if(tempName && tempResponse)
    {
      this.questionList.push({
        name : tempName,
        response : tempResponse,
        replies : [],
        timeStamp : formattedCurDate
      });
      this.modalContainer = false;
      this.name = "";
      this.response = "";
      this.requiredInputText = "";
      this.requiredResponseText = "";
    }
    else
    {
      if(!tempName)
      {
        this.requiredInputText = "This is required question information.";
      }
      if(!tempResponse)
      {
        this.requiredResponseText = "This is required question information.";
      }
    }
  }
  addReplyPost()
  {
    let tempName = this.name;
    let tempResponse = this.response;

    let curDate = new Date();

    let formattedCurDate = 'sent ' + (curDate.getMonth()+1) + '/' + curDate.getDate() + '/' + curDate.getFullYear() + ' at ';
    let curHour = curDate.getHours();
    let meridiem = 'AM';
    if(curHour == 0)
    {
      curHour = 12;
    }
    else if(curHour == 12)
    {
      meridiem = 'PM';
    }
    else if(curHour > 12)
    {
      curHour -= 12;
      meridiem = 'PM';
    }
    let curTime = curHour + ":" + curDate.getMinutes() + " " + meridiem;
    formattedCurDate += curTime;

    if(tempName && tempResponse)
    {
      this.questionList[this.currentReplyIndex].replies.push({
        name : tempName,
        response : tempResponse,
        timeStamp : formattedCurDate
      });
      this.modalContainer = false;
      this.name = "";
      this.response = "";
      this.requiredInputText = "";
      this.requiredResponseText = "";
    }
    else
    {
      if(!tempName)
      {
        this.requiredInputText = "This is required reply information.";
      }
      if(!tempResponse)
      {
        this.requiredResponseText = "This is required reply information.";
      }
    }
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
