import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { AlertController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { BookserviceService } from '../bookservice.service';
import { Server } from 'selenium-webdriver/safari';
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  
  
  constructor(private router: Router ,
    public bookService:BookserviceService,
    public atrCtrl: AlertController,
    public sanitizer: DomSanitizer) {}
  
  books = [];
  
  ngOnInit(){
    this.books=this.bookService.getAllBooks();
    
  }
  delete(item){
    this.bookService.showConfirmAlert(item);
  }

  backhome(){
    this.router.navigate(['/home']);
  }
}
