import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.page.html',
  styleUrls: ['./addbook.page.scss'],
})
export class AddbookPage implements OnInit {
  id:string;
  name: string;
  author: string;
  edition: string;
 
  

  constructor(public modalCtrl: ModalController, public bookService:BookserviceService,
    private router:Router,
    ) { }

  ngOnInit() {
  }

addbook(){
  const i = {
    id:this.bookService.id.toString(),
    name: this.name,
    author: this.author,
    ed: this.edition


   
  };
 
  this.bookService.addBook(i);

 this.bookService.id+=1;

}

back(){
  this.router.navigate(['/list']);
}

}
