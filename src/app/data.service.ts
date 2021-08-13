import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }


  insert(bid: any, name: any, author: any, price: any, publisher: any, stockdt: any) {
    let data =
    {
      "batchStatus": "false",
      "detailArray":
        [{
          "Flag": "Insert",
          "BookId": bid,
          "Name": name,
          "Author": author,
          "Price": price,
          "Publisher": publisher,
          "Stock": stockdt

        }],
      "dbConn": "db5",
      "requestId": "600601",
      "outTblCount": "0"

    }

    return this.http.post(environment.url, data)
  }




  getlist() {
    const parameter = {
      "batchStatus": "false",
      "detailArray":
        [{
          "Flag": "View"
        }],
      "dbConn": "db5",
      "requestId": "600601",
      "outTblCount": "0"
    }

    return this.http.post(environment.url, parameter)
  }
  showdata() {
    const data = {
      "batchStatus": "false",
      "detailArray":
        [{
          "Flag": "View"
        }],
      "dbConn": "db5",
      "requestId": "600601",
      "outTblCount": "0"

    }
    return this.http.post(environment.url, data)
  }

  delData(bid: any) {
    const data = {
      "batchStatus": "false",
      "detailArray":
        [{
          "Flag": "Delete",
          "BookId": bid,


        }],
      "dbConn": "db5",
      "requestId": "600601",
      "outTblCount": "0"

    }
    return this.http.post(environment.url, data)
  }


  editbook(bid: any, name: any, author: any, price: any, publisher: any, stockdt: any) {
    const data = {
      "batchStatus": "false",
      "detailArray":
        [{
          "Flag": "Update",
          "BookId": bid,
          "Name": name,
          "Author": author,
          "Price": price,
          "Publisher": publisher,
          "Stock": stockdt


        }],
      "dbConn": "db5",
      "requestId": "600601",
      "outTblCount": "0",


    }
    return this.http.post(environment.url, data)
  }




  book: any[] = [
    { id: 101, title: "Oru Deshathinte Kadha", author: "SK Pottakkadu", publisher: "DC Books", price: 140 },
    { id: 102, title: "Oru Kudayum Kunju Pengalum", author: "Muttathu Varkey.", publisher: "VC Books", price: 110 },
    { id: 103, title: "Oru Theruvinte Kadha", author: "SK Pottakkadu", publisher: "DC Books", price: 240 },
    { id: 104, title: "Aadujeevitham", author: "Benyamin", publisher: "LB Books", price: 440 },

  ]
}
