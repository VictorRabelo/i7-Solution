import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-modal-select-client',
  templateUrl: './modal-select-client.component.html',
  styleUrls: ['./modal-select-client.component.scss']
})
export class ModalSelectClientComponent implements OnInit {

  loading: boolean = false;

  @Input() data: any;
  @Input() crud: string;

  dados: any = { uuid: '' };
  
  constructor(
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    this.dados.uuid = localStorage.getItem(environment.customerId)
  }
  
  close(params = undefined) {
    this.activeModal.close(params);
  }
  
  onSubmit(form: NgForm) {

    if (!form.valid) {
      return false;
    }

    this.loading = true;
    
    localStorage.setItem(environment.customerId, this.dados.uuid);
    
    this.close({success: true}); 
  }

}
