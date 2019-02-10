import { Component, OnInit } from '@angular/core';
import {Dataservice} from '../dataservice.service';
import {AppComponent} from '../app.component';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  products:any=[];
  selected:any;
  isselected=false;
  isall=true;

  constructor(public dataservice:Dataservice, private router:Router, private http:HttpClient) {
    var p = this.http.get('http://127.0.0.1:3000/getproduct');
    p.subscribe(k=> {this.products = k;   console.log(this.products)});
    
   }

  ngOnInit() {
  }
  
  getdetails(selecteditem:any){
 
  this.router.navigate(['/product',selecteditem]);
  }
}
