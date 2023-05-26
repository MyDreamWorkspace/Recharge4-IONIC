import { Component, OnInit, ViewChild, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-verify-identity',
  templateUrl: './verify-identity.page.html',
  styleUrls: ['./verify-identity.page.scss'],
})
export class VerifyIdentityPage implements OnInit {

  @ViewChild('fileInp') fileInput: ElementRef;
  @Input() label: string;
  @Output() data = new EventEmitter<FormData>();
  constructor(private route: Router) { }

  ngOnInit() {
  }

  fileUpload(event) {
    let fd = new FormData();
    fd.append('file', event.srcElement.files[0]);
    this.data.emit(fd);
  }

  onClick() {
    this.fileInput.nativeElement.click();
  }

  activate() {
    this.route.navigate(['./tabs/more']);
  }

  verify_account() {
    this.route.navigate(['./tabs/more']);
  }
}
