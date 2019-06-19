import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'arcaweb';
  url = 'http://localhost:8080/helloWorld';
  data : string;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get(this.url).subscribe(data => {
      this.data = data as string;
    });
  }

}
