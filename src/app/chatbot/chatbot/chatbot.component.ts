import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sumadi-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect(): void {
    this.router.navigateByUrl('popup', { skipLocationChange: true });
  }

}
