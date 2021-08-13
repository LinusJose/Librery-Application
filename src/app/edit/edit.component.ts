import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';






@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  bid: any;
  bname: any;
  bauthor: any;
  bprice: any;
  bpublish: any;
  bstock: any;

  updateForm = this.fb.group({

    bid: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')]],
    bname: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    bauthor: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    bprice: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    bpublish: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    bstock: ['', [Validators.required, Validators.pattern('[0-9]*')]],






  })



  constructor(private router: Router, private data: DataService, private _Activatedroute: ActivatedRoute, private fb: FormBuilder) { }
  bookdetails: any[] = []




  ngOnInit(): void {


    this.bid = this._Activatedroute.snapshot.paramMap.get("id")
    this.getdata()
  }
  editbook() {

    this.data.editbook(this.bid, this.bname, this.bauthor, this.bprice, this.bpublish, this.bstock)
      .subscribe((result: any) => {
        if (result) {

          alert("Records Updated")
          console.log(result);

          this.router.navigateByUrl("/librerytable")

        }
      },
        (result: any) => {
          alert(result.error.message)
        })

  }

  getdata() {
    this.data.showdata()
      .subscribe((result: any) => {
        if (result) {
          this.bookdetails = result.results["0"]["rows"]
          for (let obj of this.bookdetails) {
            if (obj[0] == this.bid) {
              this.bname = obj[1]
              this.bauthor = obj[2]
              this.bprice = obj[3]
              this.bpublish = obj[4]
              this.bprice = obj[5]
              this.bstock = obj[6]

              console.log(obj[1]);

            }
          }
        }
      },
        (result: any) => {
          alert(result.error.message)
        })
  }



}
