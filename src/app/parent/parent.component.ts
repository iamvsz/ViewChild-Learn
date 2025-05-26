import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements AfterViewInit{
  @ViewChild(ChildComponent) child!: ChildComponent;
  childMessage: string = '';

  ngAfterViewInit(): void {
    this.childMessage = this.child.message;
  }

  getChildData(): void {
    alert(this.child.showMessage());
  }
}
