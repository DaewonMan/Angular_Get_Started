import { Injectable } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class PdfDownloadService {

  constructor() { }

  async testPdf(targetId?: string, fileName: string = 'sample') {
    // target id 체크
    if (targetId == null) {
      return;
    }

    // targetId로 HTMLElement 가져오기
    let targetElem: HTMLElement = document.getElementById(targetId);

    // HTMLElement 여부 체크
    if(targetElem == null) {
      return;
    }

    let canvas: HTMLCanvasElement = await html2canvas(targetElem);

    // 캔버스를 이미지로 변환
    let imgData = canvas.toDataURL('image/png');

    let margin = 10; // 출력 페이지 여백설정
    let imgWidth = 210 - (10 * 2); // 이미지 가로 길이(mm) A4 기준
    let pageHeight = imgWidth * 1.414;  // 출력 페이지 세로 길이 계산 A4 기준
    let imgHeight = canvas.height * imgWidth / canvas.width;
    let heightLeft = imgHeight;

    let doc = new jsPDF('p', 'mm');
    let position = margin;

    // 첫 페이지 출력
    doc.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // 한 페이지 이상일 경우 루프 돌면서 출력
    while (heightLeft >= 20) {
      position = heightLeft - imgHeight;
      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      doc.addPage();
      heightLeft -= pageHeight;
    }

    // 파일 저장
    doc.save(fileName + '.pdf');

  }

  private getPageInfo(canvas: HTMLCanvasElement) {
    let pgInfo: { [key: string]: number } = {
      x: 10, // 출력 페이지 x축
      y: 10, // 출력 페이지 y축
      w: 0, // 이미지 가로 길이(mm) A4 기준
      h: 0, // 이미지 높이
      lh: 0, // 출력 후 남은 높이
      dh: 0 // 페이지 세로 길이 A4 기준
    };
    pgInfo.w = 210 - (pgInfo.x * 2);
    pgInfo.h = canvas.height * pgInfo.w / canvas.width;
    pgInfo.lh = pgInfo.h;
    pgInfo.dh = pgInfo.w * 1.414; 

    return pgInfo;
  }

  private async getCanvasImageInfo(targetElem: HTMLElement) {
    // targetElement를 canvase로 변환
    let canvas: HTMLCanvasElement = await html2canvas(targetElem);
    // 캔버스를 이미지로 변환
    let imgData: string = canvas.toDataURL('image/png');

    return {
      imgData,
      pgInfo: this.getPageInfo(canvas)
    };
  }

  private executeDownload(imgInfo: any, fileName: string) {
    // jsPDF 인스턴스 생성
    let doc = new jsPDF('p', 'mm');;
    let pgInfo = imgInfo.pgInfo;

    // 첫 페이지 출력
    doc.addImage(imgInfo.imgData, 'PNG', pgInfo.x, pgInfo.y, pgInfo.w, pgInfo.h);
    pgInfo.lh -= pgInfo.dh;

    // 한 페이지 이상일 경우 루프 돌면서 출력
    while (pgInfo.lh >= (pgInfo.x * 2)) {
      pgInfo.y = pgInfo.lh - pgInfo.h;
      doc.addImage(imgInfo.imgData, 'PNG', 0, pgInfo.y, pgInfo.w, pgInfo.h);
      doc.addPage();
      pgInfo.lh -= pgInfo.dh;
    }

    // 파일 저장
    doc.save(fileName + '.pdf');
  }

  async testPdf2(targetId?: string, fileName: string = 'sample') {
    // target id 체크
    if (targetId == null) {
      return;
    }

    // targetId로 HTMLElement 가져오기
    let targetElem: HTMLElement = document.getElementById(targetId);

    // HTMLElement 여부 체크
    if(targetElem == null) {
      return;
    }

    // 이미지 세팅 정보
    let imgInfo: any = await this.getCanvasImageInfo(targetElem);

    // 다운로드 실행
    this.executeDownload(imgInfo, fileName);
  }

}
