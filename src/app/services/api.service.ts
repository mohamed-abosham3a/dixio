import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_SERVER = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  public readMessages() {
    return this.httpClient.get<Message[]>(`${this.API_SERVER}/messages`);
  }

  public createMessage(message: Message) {
    return this.httpClient.post<Message>(`${this.API_SERVER}/messages/create`, message);
  }

  public updateMessage(message: Message) {
    return this.httpClient.put<Message>(`${this.API_SERVER}/messages/${message.id}/update`, message);
  }

  public deleteMessage(id: number) {
    return this.httpClient.delete(`${this.API_SERVER}/messages/${id}/delete`);
  }

  public readUsers() {
    return this.httpClient.get<User[]>(`${this.API_SERVER}/users`);
  }

  public createUser(user: User) {
    return this.httpClient.post<User>(`${this.API_SERVER}/users/create`, user);
  }

  public updateUser(user: User) {
    return this.httpClient.put<User>(`${this.API_SERVER}/users/${user.id}/update`, user);
  }

  public deleteUser(id: number) {
    return this.httpClient.delete(`${this.API_SERVER}/users/${id}/delete`);
  }
}
