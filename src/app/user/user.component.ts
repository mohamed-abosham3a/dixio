import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name'];
  usersList: User[] = [];
  user = new User();
  message: string = '';
  
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.readUsers();
  }

  readUsers() {
    this.apiService.readUsers().subscribe((result) => {
      this.usersList = result;
    });
  }

  createUser(f: any) {
    let isFound: boolean = false;
    for (let i = 0; i < this.usersList.length; i++) {
      if (f.value.name.trim() == this.usersList[i].name.trim()) {
        isFound = true;
        this.message = 'user already exist';
      }
    }
    if(!isFound){
      this.apiService.createUser(f.value).subscribe((result) => {
        console.log(result);
        this.message = '';
        this.router.navigateByUrl('messages');
      });
    }
  }
}
