import {SerializationHelper} from "../helpers/index";
interface PaySlipSerialized {
  ////////Input////////////
  firstName: string;
  lastName: string;
  annualSalary: number;
  superRate: number;
  paymentDate: string;

  ////////Output////////////
  grossIncome: number;
  incomeTax: number;
  netIncome: number;
  superAmount: number;

}
export class PaySlip {

  private static _TABLE_NAME: string = 'PaySlip';

  constructor(public _firstName: string = '', public _lastName: string = '', public _annualSalary: number = 0, public _superRate: number = 0,
              public _paymentDate: string = '', public _grossIncome: number = 0,
              public _incomeTax: number = 0, public _netIncome: number = 0, public _superAmount: number = 0) {
  }

  //map class object to JSON
  toJSON(): PaySlipSerialized {
    return {
      firstName: this._firstName,
      lastName: this._lastName,
      annualSalary: this._annualSalary,
      superRate: this._superRate,
      paymentDate: this._paymentDate,
      grossIncome: this._grossIncome,
      incomeTax: this._incomeTax,
      netIncome: this._netIncome,
      superAmount: this._superAmount

    };
  }

  //map JSON to class object
  fromJSON(obj: PaySlipSerialized) {
    this._firstName = obj.firstName
    this._lastName = obj.lastName;
    this._annualSalary = obj.annualSalary;
    this._superRate = obj.superRate;
    this._paymentDate = obj.paymentDate;
    this._grossIncome = obj.grossIncome;
    this._incomeTax = obj.incomeTax;
    this._netIncome = obj.netIncome;
    this._superAmount = obj.superAmount;
  }

  //parse response json to get class object or list of objects
  static fillFromJSON(json: any) {
    let arrPaySlip: any;
    if (json[PaySlip._TABLE_NAME] != null) {
      arrPaySlip = [];
      for (var item in json[PaySlip._TABLE_NAME]) {
        arrPaySlip.push(SerializationHelper.toInstance(new PaySlip(), json[PaySlip._TABLE_NAME][item]));
      }
    }
    return arrPaySlip;
  }

  //  getters/setters //

  static get TABLE_NAME(): string {
    return this._TABLE_NAME;
  }

  static set TABLE_NAME(value: string) {
    this._TABLE_NAME = value;
  }

  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(value: string) {
    this._firstName = value;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public set lastName(value: string) {
    this._lastName = value;
  }

  public get annualSalary(): number {
    return this._annualSalary;
  }

  public set annualSalary(value: number) {
    this._annualSalary = value;
  }

  public get superRate(): number {
    return this._superRate;
  }

  public set superRate(value: number) {
    this._superRate = value;
  }

  public get paymentDate(): string {
    return this._paymentDate;
  }

  public set paymentDate(value: string) {
    this._paymentDate = value;
  }

  public get grossIncome(): number {
    return this._grossIncome;
  }

  public set grossIncome(value: number) {
    this._grossIncome = value;
  }

  public get incomeTax(): number {
    return this._incomeTax;
  }

  public set incomeTax(value: number) {
    this._incomeTax = value;
  }

  public get netIncome(): number {
    return this._netIncome;
  }

  public set netIncome(value: number) {
    this._netIncome = value;
  }

  public get superAmount(): number {
    return this._superAmount;
  }

  public set superAmount(value: number) {
    this._superAmount = value;
  }
}





