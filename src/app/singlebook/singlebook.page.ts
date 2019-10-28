import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.page.html',
  styleUrls: ['./singlebook.page.scss'],
})
export class SinglebookPage implements OnInit {

  
  
 
  constructor(private route: ActivatedRoute, private router: Router,
    public bookListService:BookserviceService,
    ) {
   
   
  }
  books = [];


  

  singleBook;


 ngOnInit() {
  this.books=this.bookListService.getBook();
    this.route.paramMap.subscribe(paramMap => {
     const val = paramMap.get("id");

      this.singleBook = this.books.find(obj => {
        return obj.id.includes(val);
        
     });
    });
  }
  
  back(){
    this.router.navigate(['/list']);
  }
}