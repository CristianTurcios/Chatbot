import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sumadi-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})

export class PopupComponent implements OnInit {
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  redirect(): void {
    this.router.navigateByUrl('chatbot', { skipLocationChange: true });
  }
}
