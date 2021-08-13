import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})

export class BookdetailsComponent implements OnInit {
  id: any;
  result: any[] = [];


  // bookarray: any[] = []




  constructor(private router: Router, private _Activatedroute: ActivatedRoute, private dataservice: DataService) {
    // this.bookarray = this.dataservice.book;

  }

  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
    console.log(this.id);



    this.dataservice.getlist()
      .subscribe((result: any) => {

        console.log(result)

        for (let elements of result['results']) {
          for (let key in elements) {
            if (key == "rows") {
              this.result = elements['rows']
              console.log(this.result)



            }
          }
        }

      })

  }

  edit() {
    this.router.navigateByUrl("edit")
  }
  del(bid: any) {

    this.dataservice.delData(bid)
      .subscribe((result: any) => {
        this.router.navigateByUrl("/librerytable")

        console.log(result)



      })


  }

}


