import { Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import {YardService} from '../yard.service';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs';
import { Death } from 'src/models/Death';

@Component({
  selector: 'app-modal-basic',
  templateUrl: './modal-basic.component.html',
  styleUrls: ['./modal-basic.component.css'],
  providers:[YardService]
})


export class ModalBasicComponent implements OnInit{

    closeResult = ''
    deaths: Death[] ;
    death: Death 
    @Input() selectedDeath: Death
    constructor(private modalService: NgbModal, public service: YardService) {

      this.deaths = []
      // setValue(this.selectedDeath)

    }

    ngOnInit(): void {
      // this.service.resetAll()
     
    }

    onSubmit(f: NgForm) {
      console.log(f.value);  // { first: '', last: '' }
      console.log(f.valid);  // false
      if(!f.valid){
        alert("Veuillez remplir tous les champs")
       
        
      }else{
        this.death  = f.value
        this.death  = f.value
        this.death.burialDate = f.value.burialDate.day + "/" +  f.value.burialDate.month + "/"+ f.value.burialDate.year 
        this.death.dateOfBirth = f.value.dateOfBirth.day + "/" + f.value.dateOfBirth.month + "/" + f.value.dateOfBirth.year
        this.death.dateOfDeath = f.value.dateOfDeath.day + "/" + f.value.dateOfDeath.month + "/" + f.value.dateOfDeath.year
        this.death.recordDate = f.value.recordDate.day  + "/" + f.value.recordDate.month + "/" + f.value.recordDate.year
        console.log("this death ", this.death)
        let valueToSend = JSON.stringify(this.death)
        console.log("Json stringfy ", valueToSend)
        this.service.setDeaths(valueToSend)
        this.deaths.push(this.death)
        window.location.reload()
        this.modalService.dismissAll()

      }
    }
  
    open(content) {
      this.modalService.open(content,{size: 'xl',ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }

  }
