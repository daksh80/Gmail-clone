import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageFile } from 'src/app/gmail/constants/image.constants';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
public imageFile = ImageFile; 
public placeHolderText:string = 'Search mail'; 
@ViewChild('searchElement') searchElement:any;
constructor() { }
ngOnInit(): void {

}

public onSearchBlur() {
  this.placeHolderText = 'Search mail';
}

public onSearchFocus() {
  this.placeHolderText = '';
}

public handleProfile(){
  
}
public toggleMenu(){

}

}
