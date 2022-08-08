import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-settings-home',
  templateUrl: './settings-home.component.html',
  styleUrls: ['./settings-home.component.css']
})
export class SettingsHomeComponent implements OnInit {
  departments: any = []

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.departments = this.storageService.getDepartments();
  }

}
