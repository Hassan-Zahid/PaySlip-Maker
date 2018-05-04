import {Component, OnInit, ViewChild, trigger, state, style, animate, transition} from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {ModalDirective} from 'ngx-bootstrap';
import {PaySlip} from "../../models/payslip";
import {MainService} from "../../services/main.service";
import {NotificationService} from "../../services/notification.service";
import {IMyDrpOptions} from 'mydaterangepicker';

@Component({
  moduleId: module.id,
  selector: 'app-main',
  templateUrl: 'main.component.html',
  animations: [
    trigger('flyInOut', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.5s ease-in')
      ]),
      transition('* => void', [
        animate('0.2s  ease-out', style({
          opacity: 0,
          transform: 'translateX(100%)'
        }))
      ])
    ])
  ]
})
export class MainComponent implements OnInit {

  // variables
  @ViewChild('childModal') public childModal: ModalDirective;
  paySlipArr: PaySlip[] = [];
  paySlipModel: PaySlip = new PaySlip;
  myDateRangePickerOptions: IMyDrpOptions = {dateFormat: 'dd mmm yyyy', monthSelector: true};

  // Modal properties
  @ViewChild('modal')
  modal: any;

  constructor(private paySlipService: MainService, private notificationService: NotificationService,
              private loadingBarService: SlimLoadingBarService) {
  }

  ngOnInit() {
    this.fetchPaySlips();
  }

  //fetch PaySlips
  fetchPaySlips() {
    this.loadingBarService.start();
    this.paySlipService.fetchPaySlips()
      .subscribe((res) => {
          this.paySlipArr = [];
          this.paySlipArr = PaySlip.fillFromJSON(res);
          this.loadingBarService.complete();
          this.notificationService.printSuccessMessage('All PaySlips has been fetched');
        },
        error => {
          this.loadingBarService.complete();
          this.notificationService.printErrorMessage('Failed to load PaySlips. Status: ' + error);
        });
  }


  //create a payslip
  createPaySlip() {
    this.loadingBarService.start();
    this.paySlipModel.paymentDate = this.paySlipModel.paymentDate['formatted'];
    this.paySlipService.createPaySlip(this.paySlipModel)
      .subscribe(() => {
          this.paySlipModel = new PaySlip;
          this.hideChildModal();
          this.loadingBarService.complete();
          this.notificationService.printSuccessMessage('PaySlip has been created');
          this.fetchPaySlips();
        },
        error => {
          this.loadingBarService.complete();
          this.notificationService.printErrorMessage('Failed to create PaySlip. Status: ' + error);
        });
  }


  //open PaySlip creater modal
  viewPaySlipCreator() {
    this.childModal.show();
  }

  //close PaySlip creater modal
  public hideChildModal(): void {
    this.childModal.hide();
  }

}
