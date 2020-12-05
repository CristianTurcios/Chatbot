import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sumadi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chatbot';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // this.router.initialNavigation(); // Manually triggering initial navigation for @angular/elements ?
    this.router.navigateByUrl('chatbot', { skipLocationChange: true });
  }
}
