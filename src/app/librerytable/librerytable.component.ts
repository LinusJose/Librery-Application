import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
// import { InsertDataComponent } from '../insert-data/insert-data.component';

@Component({
  selector: 'app-librerytable',
  templateUrl: './librerytable.component.html',
  styleUrls: ['./librerytable.component.css']
})
export class LibrerytableComponent implements OnInit {
  result: any[] = [];



  constructor(private router: Router, private dataservice: DataService) {
  }

  ngOnInit(): void {

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
  insertdt() {
    this.router.navigateByUrl('insert-data')
  }


}
