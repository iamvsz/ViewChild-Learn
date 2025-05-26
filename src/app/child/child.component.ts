import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  message: string = "Hello from Child Component!";

  showMessage(): string {
    return 'Message from ShowMessage() method in Child Component.';
  }

}
