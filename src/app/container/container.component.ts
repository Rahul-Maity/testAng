import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  searchText: string = '';

  listofString: string[] = ['Mark', 'steve', 'John'];
  setSearchText(value:string) {
    this.searchText = value;
    
  }
}
