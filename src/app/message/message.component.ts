import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Message } from '../models/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {

  displayedColumns: string[] = ['messageContent'];
  messagesList: Message[] = [];
  message = new Message();

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.readMessages();
  }

  readMessages() {
    this.apiService.readMessages().subscribe((result) => {
      this.messagesList = result;
    });
  }

  createMessage(f: any) {
    if (f.value.messageContent != null && f.value.messageContent != '') {
      this.apiService.createMessage(f.value).subscribe((result) => {
        console.log(result);
        this.readMessages();
      });
    }
  }
}
