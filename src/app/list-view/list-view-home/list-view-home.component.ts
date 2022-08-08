import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/storage.service';




@Component({
  selector: 'app-list-view-home',
  templateUrl: './list-view-home.component.html',
  styleUrls: ['./list-view-home.component.css']
})
export class ListViewHomeComponent implements OnInit {
  entries: any = [];

  constructor(private storageService: StorageService) {

  }

  ngOnInit(): void {
    this.entries = this.storageService.getEntries();
    

  
  }

  

}


