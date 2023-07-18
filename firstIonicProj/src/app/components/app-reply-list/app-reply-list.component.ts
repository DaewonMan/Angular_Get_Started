import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-reply-list',
  templateUrl: './app-reply-list.component.html',
  styleUrls: ['./app-reply-list.component.scss'],
})
export class AppReplyListComponent implements OnInit {

  inputText: string = null;
  subInputText: string = null;
  commentList: Array<any> = [];
  // commentList: Array<any> = [
  //   {
  //     usrNm: '김철수',
  //     companyNm: '신세계아이앤씨',
  //     comment: '123',
  //     subCommnet: [
  //       {
  //         usrNm: '김철수',
  //         companyNm: '신세계아이앤씨',
  //         comment: '123-1',
  //         likedPeople: []
  //       },
  //       {
  //         usrNm: '김철수',
  //         companyNm: '신세계아이앤씨',
  //         comment: '123-1',
  //         likedPeople: []
  //       },
  //       {
  //         usrNm: '김철수',
  //         companyNm: '신세계아이앤씨',
  //         comment: '123-1',
  //         likedPeople: []
  //       },
  //       {
  //         usrNm: '김철수',
  //         companyNm: '신세계아이앤씨',
  //         comment: '123-1',
  //         likedPeople: []
  //       },
  //     ],
  //     likedPeople: [],
  //   },
  //   {
  //     usrNm: '김철수',
  //     companyNm: '신세계아이앤씨',
  //     comment: '123',
  //     subCommnet: [
  //       {
  //         usrNm: '김철수',
  //         companyNm: '신세계아이앤씨',
  //         comment: '123-1',
  //         likedPeople: []
  //       }
  //     ],
  //     likedPeople: [],
  //   },
  //   {
  //     usrNm: '김철수',
  //     companyNm: '신세계아이앤씨',
  //     comment: '123',
  //     subCommnet: [
  //       {
  //         usrNm: '김철수',
  //         companyNm: '신세계아이앤씨',
  //         comment: '123-1',
  //         likedPeople: []
  //       }
  //     ],
  //     likedPeople: [],
  //   },
  //   {
  //     usrNm: '김철수',
  //     companyNm: '신세계아이앤씨',
  //     comment: '123',
  //     subCommnet: [
  //       {
  //         usrNm: '김철수',
  //         companyNm: '신세계아이앤씨',
  //         comment: '123-1',
  //         likedPeople: []
  //       }
  //     ],
  //     likedPeople: [],
  //   },
  // ];

  constructor() { }

  ngOnInit() {}

  addCommentList(txt) {
    this.commentList.push({
      usrNm: '김철수',
      companyNm: '신세계아이앤씨',
      comment: txt.target.value,
      subCommnet: [],
      likedPeople: []
    });
    this.inputText = null;
  }
  
  addSubCommentList(targetComment, txt) {
    targetComment.subCommnet.push({
      usrNm: '김철수',
      companyNm: '신세계아이앤씨',
      comment: txt.target.value,
      likedPeople: []
    });
    targetComment.isSubInput = false;
    this.subInputText = null;
  }

  setLikedPeople(likedPeople: Array<any>) {
    _.includes(likedPeople, 'test') 
      ? _.remove(likedPeople, x => x == 'test') 
      : likedPeople.push('test');
  }
}
