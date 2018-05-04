const path = require('path');
var Q = require('q');
var service = {};
var paySlips = [];
service.fetch = fetch;
service.create = create;
module.exports = service;

function fetch() {
  var deferred = Q.defer();
  deferred.resolve({PaySlip: paySlips});
  return deferred.promise;
}

function create(inputData) {
  var deferred = Q.defer();
  calculatePay(inputData)
  return deferred.promise;

  function calculatePay(inputData) {
    var paySlip = inputData.data;
    paySlip.grossIncome = paySlip.annualSalary / 12;
    paySlip.superAmount = (paySlip.grossIncome * paySlip.superRate) / 100;

    if (paySlip.annualSalary >= 0 && paySlip.annualSalary <= 18200) {
      paySlip.incomeTax = 0;
      paySlip.netIncome = paySlip.grossIncome;
    }
    else if (paySlip.annualSalary >= 18201 && paySlip.annualSalary <= 37000) {
      paySlip.incomeTax = (( Math.round((paySlip.annualSalary - 18200) * 19) / 100)) / 12;
      paySlip.netIncome = paySlip.grossIncome - paySlip.incomeTax;
    }
    else if (paySlip.annualSalary >= 37001 && paySlip.annualSalary <= 87000) {
      paySlip.incomeTax = ( 3572 + ( Math.round(( paySlip.annualSalary - 37000 ) * 32.5) / 100 )  ) / 12;
      paySlip.netIncome = paySlip.grossIncome - paySlip.incomeTax;

    }
    else if (paySlip.annualSalary >= 87001 && paySlip.annualSalary <= 180000) {
      paySlip.incomeTax = (19822 + ( Math.round((paySlip.annualSalary - 87000) * 37) / 100)) / 12;
      paySlip.netIncome = paySlip.grossIncome - paySlip.incomeTax;
    }
    else {
      paySlip.incomeTax = (54232 + ( Math.round((paySlip.annualSalary - 180000) * 45) / 100)) / 12;
      paySlip.netIncome = paySlip.grossIncome - paySlip.incomeTax;
    }

    paySlip.grossIncome = Math.round(paySlip.grossIncome);
    paySlip.superAmount = Math.round(paySlip.superAmount);
    paySlip.incomeTax = Math.round(paySlip.incomeTax);
    paySlip.netIncome = Math.round(paySlip.netIncome);
    paySlips.push(paySlip);
    deferred.resolve();
  }
}

