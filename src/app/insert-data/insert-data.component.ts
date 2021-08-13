import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-insert-data',
  templateUrl: './insert-data.component.html',
  styleUrls: ['./insert-data.component.css']
})
export class InsertDataComponent implements OnInit {

  bid = "";
  name = "";
  author = "";
  price = "";
  publisher = "";
  stockdt = "";

   insertForm=this.fb.group({
    bid:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    name:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    author:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    price:['',[Validators.required,Validators.pattern('[0-9]*')]],
    publisher:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],

    stockdt:['',[Validators.required,Validators.pattern('[0-9]*')]]


  })






  constructor(private data: DataService, private router: Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }


  insert() {
    console.log(this.bid);

    this.data.insert(this.bid, this.name, this.author, this.price, this.publisher, this.stockdt)
      .subscribe((result: any) => {

        alert("inserted sucesfully")
        this.router.navigateByUrl("librerytable")
        console.log(result)


      })
  }
  tablenav() {
    this.router.navigateByUrl("librerytable")
  }

}
