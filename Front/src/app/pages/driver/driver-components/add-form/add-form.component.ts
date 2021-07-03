import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  launchModal(){
    const modal = document.querySelector('.modal');
    modal?.classList.toggle('is-active');
  }

}
