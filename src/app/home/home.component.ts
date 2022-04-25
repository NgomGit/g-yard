import {DecimalPipe} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';
import {Country} from '../../models/Country';
import {YardService} from '../yard.service';
import {NgbdSortableHeader, SortEvent} from '../sortable.directive';
import { Death } from 'src/models/Death';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[YardService, DecimalPipe]
})
export class HomeComponent implements OnInit {

  countries$: Observable<Country[]>;
  total$: Observable<number>;
  deaths: Death[] ;
  death: Death


  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: YardService, private modalService: NgbModal) {
    this.countries$ = service.countries$;
    this.total$ = service.total$;
    this.deaths = []
  }

  ngOnInit() {
    if(this.service.getDeaths() != undefined){
      let stringDeaths = this.service.getDeaths().split(";")
      stringDeaths.forEach((str) =>{
        let  death = JSON.parse(str)
        console.log("death ",  death)
        if(death != null){
          console.log("this . deaths ", this.deaths)
          this.deaths.push(death)
        }
      }) 
    }
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  handleClickEvent(death: Death, content){

    this.death = death
    // console.log("Death ", death):
    this.modalService.open(content, {size: 'l', centered: true });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

}
