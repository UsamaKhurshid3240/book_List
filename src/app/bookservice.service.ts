import { Injectable } from '@angular/core';
import { ToastController, AlertController, } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

 

  books = [
    {id:'1', name:'Book A',author:'A',ed:'1'},
    {id:'2', name:'Book B',author:'B',ed:'2'},
    {id:'3', name:'Book C',author:'C',ed:'3'},
    {id:'4', name:'Book D',author:'D',ed:'4'},
    {id:'5', name:'Book E',author:'E',ed:'5'},
    {id:'6', name:'Book F',author:'F',ed:'6'},
    {id:'7', name:'Book G',author:'G',ed:'7'},
    {id:'8', name:'Book H',author:'H',ed:'8'}
    
  ];

id=18;
 

async addBook(i: { id:string; name: string; author: string; ed: string; }) {

  this.books.push(i);
  let options = {
    message: "Saved",
    duration: 3000,
    cssClass: "toast.scss"

    
   };
  
  (await this._tc.create(options)).present();

  
}
  constructor(public atrCtrl: AlertController,
    private _tc: ToastController,
    private router:Router,
    ) { }

   getBook(){
    return this.books;
  }
 getAllBooks(){
    return this.books;
  }

  
  removePost(selected){
    let index: number = this.books.indexOf(selected);
    if(index > -1){
    this.books.splice(index, 1);
   this.router.navigate(['/list']);
    }
  }
  
  async showConfirmAlert(item) {
    let alertConfirm = this.atrCtrl.create({
    
      message: 'Are You Sure You Want to Delete?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: async () => {
            console.log('No clicked');
            let options = {
              message:"Cancel",
              duration: 3000,
              cssClass: "toast"
              
             };
            
            (await this._tc.create(options)).present();
          }
        },
       
        {
         
          text: 'Yes',
          handler: async () => {
            console.log('Yes clicked');
            this.removePost(item);
            let options = {
              message:item.name+" Delete Success",
              duration: 3000,
              cssClass: "toast.scss"
              
             };
            
            (await this._tc.create(options)).present();
            
            
          }
          
        }
      
      ]
    });
    (await alertConfirm).present();
    
  }
  

 

}
