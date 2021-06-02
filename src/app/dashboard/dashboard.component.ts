
import { AppConstants } from '../app.constants';

import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  toggle = true;
  status = 'Enable';
  finalObj: any = [];
  finalobj: any;
  childArr: any = [];
  childData: any = [];
  enableTable2: boolean;
  enableTable1: boolean;
  tabsEnable: boolean;
  showPopup: boolean;
  DOMSavingsObj: any = {};
  enableTable4: boolean;
  enableTable3: boolean;
  interestRatedAllLoansEnable: boolean;
  domSavingsDepositsEnable: boolean;
  domesticTermDepositsObj: any = {};
  domesticTermDepositsEnable: boolean;
  enableTable5: boolean;
  enableTable6: boolean;
  nriDepositsObj: any = {};
  NRIDepositsEnable: boolean;
  enableTable7: boolean;
  foreignCurrencyExpObj: any = {};
  foreignCurrencyExpCreditEnable: boolean;
  enableTable8: boolean;
  selected: any;
  popup: boolean;
  text: string;
  childDetails : any = {};
  jsonData:any=[];
  enableTable9: boolean;
  enableTable10: boolean;
  enableTable11: boolean;
  showPopup1: boolean;
  enableCollapse: boolean;
  first: boolean;
  second: boolean;
  third: boolean;
  fourth: boolean;
  fifth: boolean;
  comments: string;
  constructor(
 
    private constants: AppConstants,
    private dashboardService:DashboardService
   
  ) { }



  ngOnInit() {

    this.finalObj = {
      "A": [
      
        {
          "SNo": "1.",
          "Item": "1. Cash Credit",
          "InterestRange": "AmountOutstanding",
          "col_num": "2",
          "value": "30104.2",
          "child": [
            {
              "SNo": "1.",
              "Item": "1. Cash Credit",
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Min",
              "col_num": "3",
              "value": "0"
            },
            {
              "SNo": "1.",
              
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Max",
              "col_num": "4",
              "value": "25.38"
            },
            {
              "SNo": "1.",
             
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Min",
              "col_num": "5",
              "value": "0"
            },
            {
              "SNo": "1.",
             
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Max",
              "col_num": "6",
              "value": "0"
            }
          ]
        },
        {
          "SNo": "2.",
          "Item": "2. Demand Loans",
          "InterestRange": "AmountOutstanding",
          "col_num": "2",
          "value": "12504.92",
          "child": [
            {
              "SNo": "2.",
              "Item": "2. Demand Loans",
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Min",
              "col_num": "3",
              "value": "0"
            },
            {
              "SNo": "2.",
             
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Max",
              "col_num": "4",
              "value": "23.5"
            },
            {
              "SNo": "2.",
             
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Min",
              "col_num": "5",
              "value": "0"
            },
            {
              "SNo": "2.",
             
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Max",
              "col_num": "6",
              "value": "0"
            }
          ]
        },
        {
          "SNo": "3.",
          "Item": "3. Overdrafts",
          "InterestRange": "AmountOutstanding",
          "col_num": "2",
          "value": "930.76",
          "child": [
            {
              "SNo": "3.",
              "Item": "3. Overdrafts",
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Min",
              "col_num": "3",
              "value": "0"
            },
            {
              "SNo": "3.",
             
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Max",
              "col_num": "4",
              "value": "17"
            },
            {
              "SNo": "3.",
             
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Min",
              "col_num": "5",
              "value": "0"
            },
            {
              "SNo": "3.",
             
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Max",
              "col_num": "6",
              "value": "0"
            }
          ]
        },
        {
          "SNo": "4.",
          "Item": "4. Inland Bills financed and discounted",
          "InterestRange": "AmountOutstanding",
          "col_num": "2",
          "value": "560.19",
          "child": [
            {
              "SNo": "4.",
              "Item": "4. Inland Bills financed and discounted",
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Min",
              "col_num": "3",
              "value": "0"
            },
            {
              "SNo": "4.",
             
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Max",
              "col_num": "4",
              "value": "9"
            },
            {
              "SNo": "4.",
             
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Min",
              "col_num": "5",
              "value": "0"
            },
            {
              "SNo": "4.",
             
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Max",
              "col_num": "6",
              "value": "0"
            }
          ]
        },
        {
          "SNo": "5.",
          "Item": "5. Term Loans (5.1+5.2+5.3+5.4+5.5)",
          "InterestRange": "AmountOutstanding",
          "col_num": "2",
          "value": "47002.86",
          "child": [
            {
              "SNo": "5.",
              "Item": "5. Term Loans (5.1+5.2+5.3+5.4+5.5)",
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Min",
              "col_num": "3",
              "value": "0"
            },
            {
              "SNo": "5.",
             
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Max",
              "col_num": "4",
              "value": "0"
            },
            {
              "SNo": "5.",
              
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Min",
              "col_num": "5",
              "value": "0"
            },
            {
              "SNo": "5.",
              
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Max",
              "col_num": "6",
              "value": "0"
            }
          ]
        },
        {
          "SNo": "5.1",
          "Item": "5.1 1 day to 180 days",
          "InterestRange": "AmountOutstanding",
          "col_num": "2",
          "value": "16.72",
          "child": [
            {
              "SNo": "5.1",
              "Item": "5.1 1 day to 180 days",
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Min",
              "col_num": "3",
              "value": "5"
            },
            {
              "SNo": "5.1",
              
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Max",
              "col_num": "4",
              "value": "18"
            },
            {
              "SNo": "5.1",
              
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Min",
              "col_num": "5",
              "value": "0"
            },
            {
              "SNo": "5.1",
             
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Max",
              "col_num": "6",
              "value": "18"
            }
          ]
        },
        {
          "SNo": "5.2",
          "Item": "5.2 181 days to 1 year",
          "InterestRange": "AmountOutstanding",
          "col_num": "2",
          "value": "907.68",
          "child": [
            {
              "SNo": "5.2",
              "Item": "5.2 181 days to 1 year",
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Min",
              "col_num": "3",
              "value": "0"
            },
            {
              "SNo": "5.2",
             
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Max",
              "col_num": "4",
              "value": "17.75"
            },
            {
              "SNo": "5.2",
            
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Min",
              "col_num": "5",
              "value": "8.75"
            },
            {
              "SNo": "5.2",
              
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Max",
              "col_num": "6",
              "value": "17.75"
            }
          ]
        },
        {
          "SNo": "5.3",
          "Item": "5.3 Above 1 year and up to 3 years",
          "InterestRange": "AmountOutstanding",
          "col_num": "2",
          "value": "981.04",
          "child": [
            {
              "SNo": "5.3",
              "Item": "5.3 Above 1 year and up to 3 years",
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Min",
              "col_num": "3",
              "value": "0"
            },
            {
              "SNo": "5.3",
              
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Max",
              "col_num": "4",
              "value": "19"
            },
            {
              "SNo": "5.3",
             
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Min",
              "col_num": "5",
              "value": "0"
            },
            {
              "SNo": "5.3",
              
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Max",
              "col_num": "6",
              "value": "19"
            },
            {
              "SNo": "5.4",
              "Item": "5.4 Above 3 years and up to 5 years",
              "InterestRange": "AmountOutstanding",
              "col_num": "2",
              "value": "6078.27",
              "child": [
                {
                  "SNo": "5.4",
                  "Item": "5.4 Above 3 years and up to 5 years",
                  "InterestRange": "Rate of Interest (Range)",
                  "min_max": "Min",
                  "col_num": "3",
                  "value": "0"
                },
                {
                  "SNo": "5.4",
                 
                  "InterestRange": "Rate of Interest (Range)",
                  "min_max": "Max",
                  "col_num": "4",
                  "value": "33.75"
                },
                {
                  "SNo": "5.4",
                 
                  "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
                  "min_max": "Min",
                  "col_num": "5",
                  "value": "0"
                },
                {
                  "SNo": "5.4",
                 
                  "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
                  "min_max": "Max",
                  "col_num": "6",
                  "value": "33.75"
                }
              ]
            }
          ]
        },
        {
          "SNo": "5.5",
          "Item": "5.5 Above 5 years",
          "InterestRange": "AmountOutstanding",
          "col_num": "2",
          "value": "39019.15",
          "child": [
            {
              "SNo": "5.5",
              "Item": "5.5 Above 5 years",
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Min",
              "col_num": "3",
              "value": "0"
            },
            {
              "SNo": "5.5",
             
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Max",
              "col_num": "4",
              "value": "19"
            },
            {
              "SNo": "5.5",
             
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Min",
              "col_num": "5",
              "value": "0"
            },
            {
              "SNo": "5.5",
             
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Max",
              "col_num": "6",
              "value": "19"
            }
          ]
        },
        {
          "SNo": "6.",
          "Item": "6. Gross Bank Credit",
          "InterestRange": "AmountOutstanding",
          "col_num": "2",
          "value": "90670.87"
        },
        {
          "SNo": "7.",
          "Item": "II Purpose of Credit",
          "InterestRange": "AmountOutstanding",
          "col_num": "2"
        },
        {
          "SNo": "7.",
          "Item": "7. Agriculture",
          "InterestRange": "AmountOutstanding",
          "col_num": "2",
          "value": "15055.62",
          "child": [
            {
              "Item": "7. Agriculture",
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Min",
              "col_num": "3",
              "value": "0"
            },
            {
              
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Max",
              "col_num": "4",
              "value": "24.75"
            },
            {
              
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Min",
              "col_num": "5",
              "value": "0"
            },
            {
              
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Max",
              "col_num": "6",
              "value": "24.75"
            }
          ]
        },
        {
          "SNo": "8.",
          "Item": "8. Industry (Large)",
          "InterestRange": "AmountOutstanding",
          "col_num": "2",
          "value": "31475.46",
          "child": [
            {
              "Item": "8. Industry (Large)",
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Min",
              "col_num": "3",
              "value": "0"
            },
            {
              
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Max",
              "col_num": "4",
              "value": "23.65"
            },
            {
              
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Min",
              "col_num": "5",
              "value": "0"
            },
            {
              
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Max",
              "col_num": "6",
              "value": "23.65"
            }
          ]
        },
        {
          "SNo": "9",
          "Item": "9. MSMEs",
          "InterestRange": "AmountOutstanding",
          "col_num": "2",
          "value": "7193.59",
          "child": [
            {
              "Item": "9. MSMEs",
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Min",
              "col_num": "3",
              "value": "0"
            },
            {
             
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Max",
              "col_num": "4",
              "value": "23.2"
            },
            {
              
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Min",
              "col_num": "5",
              "value": "0"
            },
            {
              
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Max",
              "col_num": "6",
              "value": "23.2"
            }
          ]
        },
        {
          "SNo": "10",
          "Item": "10. Infrastructure",
          "InterestRange": "AmountOutstanding",
          "col_num": "2",
          "value": "8821.41",
          "child": [
            {
              "Item": "10. Infrastructure",
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Min",
              "col_num": "3",
              "value": "0"
            },
            {
              
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Max",
              "col_num": "4",
              "value": "19.25"
            },
            {
             
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Min",
              "col_num": "5",
              "value": "0"
            },
            {
            
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Max",
              "col_num": "6",
              "value": "19.25"
            }
          ]
        },
        {
          "SNo": "11",
          "Item": "11. Trade",
          "InterestRange": "AmountOutstanding",
          "col_num": "2",
          "value": "5093.05",
          "child": [
            {
              "Item": "11. Trade",
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Min",
              "col_num": "3",
              "value": "0"
            },
            {
              
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Max",
              "col_num": "4",
              "value": "33.75"
            },
            {
              
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Min",
              "col_num": "5",
              "value": "0"
            },
            {
             
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Max",
              "col_num": "6",
              "value": "33.75"
            }
          ]
        },
        {
          "SNo": "12",
          "Item": "12. Professional Services",
          "InterestRange": "AmountOutstanding",
          "col_num": "2",
          "value": "3845.6",
          "child": [
            {
              "Item": "12. Professional Services",
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Min",
              "col_num": "3",
              "value": "0"
            },
            {
              
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Max",
              "col_num": "4",
              "value": "33.75"
            },
            {
              
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Min",
              "col_num": "5",
              "value": "0"
            },
            {
             
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Max",
              "col_num": "6",
              "value": "33.75"
            }
          ]
        },
        {
          "SNo": "13",
          "Item": "13. Personal Loans (13.1+13.2+13.3+13.4+13.5)",
          "InterestRange": "AmountOutstanding",
          "col_num": "2",
          "value": "18767.48",
          "child": [
            {
              "Item": "13. Personal Loans (13.1+13.2+13.3+13.4+13.5)",
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Min",
              "col_num": "3",
              "value": "0"
            },
            {
              
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Max",
              "col_num": "4",
              "value": "0"
            },
            {
              
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Min",
              "col_num": "5",
              "value": "0"
            },
            {
              
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Max",
              "col_num": "6",
              "value": "0"
            }
          ]
        },
        {
          "SNo": "13",
          "Item": "13.1 Credit Card",
          "InterestRange": "AmountOutstanding",
          "col_num": "2",
          "value": "0.03",
          "child": [
            {
              "Item": "13.1 Credit Card",
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Min",
              "col_num": "3",
              "value": "0"
            },
            {
              
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Max",
              "col_num": "4",
              "value": "0"
            },
            {
             
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Min",
              "col_num": "5",
              "value": "0"
            },
            {
             
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Max",
              "col_num": "6",
              "value": "0"
            }
          ]
        },
        {
          "SNo": "13.2",
          "Item": "13.2 Education",
          "InterestRange": "AmountOutstanding",
          "col_num": "2",
          "value": "1094.1",
          "child": [
            {
              "Item": "13.2 Education",
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Min",
              "col_num": "3",
              "value": "6.25"
            },
            {
             
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Max",
              "col_num": "4",
              "value": "14.75"
            },
            {
              
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Min",
              "col_num": "5",
              "value": "0"
            },
            {
              
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Max",
              "col_num": "6",
              "value": "14.75"
            },
            {
              
              "InterestRange": "AmountOutstanding",
              "col_num": "2",
              "value": "1328.79"
            }
          ]
        },
        {
          "SNo": "13.3",
          "Item": "13.3 Vehicle",
          "InterestRange": "Rate of Interest (Range)",
          "col_num": "3",
          "value": "4",
          "min_max": "Min",
          "child": [
            {
              "Item": "13.3 Vehicle",
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Max",
              "col_num": "4",
              "value": "16.75"
            },
            {
              "Item": "13.3 Vehicle",
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Min",
              "col_num": "5",
              "value": "0"
            },
            {
              "Item": "13.3 Vehicle",
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Max",
              "col_num": "6",
              "value": "16.75"
            }
          ]
        },
        {
          "SNo": "13.4",
          "Item": "13.4 housing",
          "InterestRange": "AmountOutstanding",
          "col_num": "2",
          "value": "12893.07"
        },
        {
          "Item": "13.4 housing",
          "InterestRange": "Rate of Interest (Range)",
          "min_max": "Min",
          "col_num": "3",
          "value": "0",
          "child": [
            {
              "Item": "13.4 housing",
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Max",
              "col_num": "4",
              "value": "15.75"
            },
            {
              "Item": "13.4 housing",
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Min",
              "col_num": "5",
              "value": "0"
            },
            {
              "Item": "13.4 housing",
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Max",
              "col_num": "6",
              "value": "15.75"
            }
          ]
        },
        {
          "SNo": "13.5",
          "Item": "13.5 Other Personal Loans",
          "InterestRange": "AmountOutstanding",
          "col_num": "2",
          "value": "3451.49",
          "child": [
            {
              "Item": "13.5 Other Personal Loans",
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Min",
              "col_num": "3",
              "value": "0"
            },
            {
              "Item": "13.5 Other Personal Loans",
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Max",
              "col_num": "4",
              "value": "25.38"
            },
            {
              "Item": "13.5 Other Personal Loans",
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Min",
              "col_num": "5",
              "value": "0"
            },
            {
              "Item": "13.5 Other Personal Loans",
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Max",
              "col_num": "6",
              "value": "25.38"
            }
          ]
        },
        {
          "SNo": "14",
          "Item": "14. Rupee Export Credit (14.1+14.2)",
          "InterestRange": "AmountOutstanding",
          "col_num": "2",
          "value": "418.67",
          "child": [
            {
              "Item": "14. Rupee Export Credit (14.1+14.2)",
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Min",
              "col_num": "3",
              "value": "0"
            },
            {
              "Item": "14. Rupee Export Credit (14.1+14.2)",
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Max",
              "col_num": "4",
              "value": "0"
            },
            {
              "Item": "14. Rupee Export Credit (14.1+14.2)",
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Min",
              "col_num": "5",
              "value": "0"
            },
            {
              "Item": "14. Rupee Export Credit (14.1+14.2)",
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Max",
              "col_num": "6",
              "value": "0"
            }
          ]
        },
        {
          "SNo": "14.1",
          "Item": "14.1 Pre-shipment Credit (14.1.1+14.1.2+14.1.3)",
          "InterestRange": "AmountOutstanding",
          "col_num": "2",
          "value": "63.43",
          "child": [
            {
              "Item": "14.1 Pre-shipment Credit (14.1.1+14.1.2+14.1.3)",
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Min",
              "col_num": "3",
              "value": "0"
            },
            {
              "Item": "14.1 Pre-shipment Credit (14.1.1+14.1.2+14.1.3)",
              "InterestRange": "Rate of Interest (Range)",
              "min_max": "Max",
              "col_num": "4",
              "value": "0"
            },
            {
              "Item": "14.1 Pre-shipment Credit (14.1.1+14.1.2+14.1.3)",
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Min",
              "col_num": "5",
              "value": "0"
            },
            {
              "Item": "14.1 Pre-shipment Credit (14.1.1+14.1.2+14.1.3)",
              "InterestRange": "InterestRate range in which 60 percent or more business is contracted",
              "min_max": "Max",
              "col_num": "6",
              "value": "0"
            }
          ]
        },
       
       
         
    
      
       
      ]
    };
    this.DOMSavingsObj = {
      "DomSavingsDeposits": [
        {
          "Buckets": "Up to Rs. 1 Lakh",
          "InterestRange": "AmountOutstanding (Rs. Crore)",
          "Value": "13186.04",
          "child": [
            {
              "Buckets": "Up to Rs. 1 Lakh",
              "InterestRange": "InterestRange (%)",
              "Value": "4"
            },
            {
              "Buckets": "Between Rs. 1 lakh to Rs. 3 Lakhs",
              "InterestRange": "AmountOutstanding (Rs. Crore)",
              "Value": "10663.22"
            }]
        },

        {
          "Buckets": "Between Rs. 1 lakh to Rs. 3 Lakhs",
          "InterestRange": "InterestRange (%)",
          "min_max": "Min",
          "Value": "4",
          "child": [
            {
              "Buckets": "Between Rs. 1 lakh to Rs. 3 Lakhs",
              "InterestRange": "InterestRange (%)",
              "min_max": "Max",
              "Value": "4.5"
            }]
        },

        {
          "Buckets": "Between Rs. 3 Lakhs to Rs. 5 Lakhs",
          "InterestRange": "AmountOutstanding (Rs. Crore)",
          "Value": "5079.81",
          "child": [
            {
              "Buckets": "Between Rs. 3 Lakhs to Rs. 5 Lakhs",
              "InterestRange": "InterestRange (%)",
              "min_max": "Min",
              "Value": "5"
            },
            {
              "Buckets": "Between Rs. 3 Lakhs to Rs. 5 Lakhs",
              "InterestRange": "InterestRange (%)",
              "min_max": "Max",
              "Value": "4.5"
            }]
        },

        {
          "Buckets": "Above 5 Lakh",
          "InterestRange": "AmountOutstanding (Rs. Crore)",
          "Value": "24588.36",
          "child": [
            {
              "Buckets": "Above 5 Lakh",
              "InterestRange": "InterestRange (%)",
              "min_max": "Min",
              "Value": "4"
            },
            {
              "Buckets": "Above 5 Lakh",
              "InterestRange": "InterestRange (%)",
              "min_max": "Max",
              "Value": "4.5"
            }]
        },

        {
          "Buckets": "Weighted Average Savings Deposit Rate for saving deposits above Rs. 1 lakh",
          "InterestRange": "AmountOutstanding (Rs. Crore)",
          "Value": "0",
          "child": [
            {
              "Buckets": "Weighted Average Savings Deposit Rate for saving deposits above Rs. 1 lakh",
              "InterestRange": "InterestRange (%)",
              "min_max": "Min",
              "Value": "4.05"
            },
            {
              "Buckets": "Weighted Average Savings Deposit Rate for saving deposits above Rs. 1 lakh",
              "InterestRange": "InterestRange (%)",
              "min_max": "Max",
              "Value": "0"
            }]
        }

      ]
    };
    this.domesticTermDepositsObj = {
      "DomesticTermDeposit": [
        {
          "DomesticTermDeposits": "7 days to 14 days",
          "Type1": "Deposit less than Rs. 1 Crore",
          "Type2": "Effective from 07.12.2012",
          "AmountOutstanding": "82.95",
          "RateofInterest": "4.28",
          "child": [
            {
              "DomesticTermDeposits": "7 days to 14 days",
              "Type1": "Deposit above Rs. 1 Crore",
              "AmountOutstanding": "76.43",
              "RateofInterest": "3.61"
            }]
        },

        {
          "DomesticTermDeposits": "15 days to 30 days",
          "Type1": "Deposit less than Rs. 1 Crore",
          "Type2": "Effective from 07.12.2012",
          "AmountOutstanding": "137.74",
          "RateofInterest": "4.35",
          "child": [
            {
              "DomesticTermDeposits": "15 days to 30 days",
              "Type1": "Deposit above Rs. 1 Crore",
              "AmountOutstanding": "214.95",
              "RateofInterest": "3.9"
            }]
        },

        {
          "DomesticTermDeposits": "31 days to 45 days",
          "Type1": "Deposit less than Rs. 1 Crore",
          "Type2": "Effective from 07.12.2012",
          "AmountOutstanding": "90.57",
          "RateofInterest": "4.27",
          "child": [
            {
              "DomesticTermDeposits": "31 days to 45 days",
              "Type1": "Deposit above Rs. 1 Crore",
              "AmountOutstanding": "93.56",
              "RateofInterest": "4.19"
            }]
        },

        {
          "DomesticTermDeposits": "46 days to 90 days",
          "Type1": "Deposit less than Rs. 1 Crore",
          "Type2": "Effective from 07.12.2012",
          "AmountOutstanding": "463.83",
          "RateofInterest": "5.26",
          "child": [
            {
              "DomesticTermDeposits": "46 days to 90 days",
              "Type1": "Deposit above Rs. 1 Crore",
              "AmountOutstanding": "76.58",
              "RateofInterest": "4.19"
            }]
        },

        {
          "DomesticTermDeposits": "91 days to 180 days",
          "Type1": "Deposit less than Rs. 1 Crore",
          "Type2": "Effective from 07.12.2012",
          "AmountOutstanding": "2008.26",
          "RateofInterest": "6.16",
          "child": [
            {
              "DomesticTermDeposits": "91 days to 180 days",
              "Type1": "Deposit above Rs. 1 Crore",
              "AmountOutstanding": "1041.75",
              "RateofInterest": "4.4"
            }]
        },

        {
          "DomesticTermDeposits": "181 days to 364 days",
          "Type1": "Deposit less than Rs. 1 Crore",
          "Type2": "Effective from 07.12.2012",
          "AmountOutstanding": "2569.92",
          "RateofInterest": "6.13",
          "child": [
            {
              "DomesticTermDeposits": "181 days to 364 days",
              "Type1": "Deposit above Rs. 1 Crore",
              "AmountOutstanding": "218.54",
              "RateofInterest": "4.3"
            }]
        },

        {
          "DomesticTermDeposits": "1 year to less than 2 years",
          "Type1": "Deposit less than Rs. 1 Crore",
          "Type2": "Effective from 07.12.2012",
          "AmountOutstanding": "42833.7",
          "RateofInterest": "6.71",
          "child": [
            {
              "DomesticTermDeposits": "1 year to less than 2 years",
              "Type1": "Deposit above Rs. 1 Crore",
              "AmountOutstanding": "1853.53",
              "RateofInterest": "4.83"
            }]
        },

        {
          "DomesticTermDeposits": "2 year to less than 3 years",
          "Type1": "Deposit less than Rs. 1 Crore",
          "Type2": "Effective from 07.12.2012",
          "AmountOutstanding": "6825.36",
          "RateofInterest": "7",
          "child": [
            {
              "DomesticTermDeposits": "2 year to less than 3 years",
              "Type1": "Deposit above Rs. 1 Crore",
              "AmountOutstanding": "236.21",
              "RateofInterest": "5.74"
            }]
        },

        {
          "DomesticTermDeposits": "3 year to less than 5 years",
          "Type1": "Deposit less than Rs. 1 Crore",
          "Type2": "Effective from 07.12.2012",
          "AmountOutstanding": "8506.06",
          "RateofInterest": "6.75",
          "child": [
            {
              "DomesticTermDeposits": "3 year to less than 5 years",
              "Type1": "Deposit above Rs. 1 Crore",
              "AmountOutstanding": "284.69",
              "RateofInterest": "4.82"
            }]
        },

        {
          "DomesticTermDeposits": "5 year to less than 8 years",
          "Type1": "Deposit less than Rs. 1 Crore",
          "Type2": "Effective from 07.12.2012",
          "AmountOutstanding": "3775.76",
          "RateofInterest": "7.61",
          "child": [
            {
              "DomesticTermDeposits": "5 year to less than 8 years",
              "Type1": "Deposit above Rs. 1 Crore",
              "AmountOutstanding": "88.51",
              "RateofInterest": "7.32"
            }]
        },

        {
          "DomesticTermDeposits": "8 year to 10 years",
          "Type1": "Deposit less than Rs. 1 Crore",
          "Type2": "Effective from 07.12.2012",
          "AmountOutstanding": "1591.76",
          "RateofInterest": "8.27",
          "child": [
            {
              "DomesticTermDeposits": "8 year to 10 years",
              "Type1": "Deposit above Rs. 1 Crore",
              "AmountOutstanding": "45.22",
              "RateofInterest": "7.51"
            }]
        }

      ]
    };
    this.nriDepositsObj = {
      "NRIDeposits": [
        {
          "Items": "I. NRE Deposits"
        },
        {
          "Items": "(i) Current Deposits",
          "AmountOutstanding": "129.49",
          "EffectiveDateRateofInterest": "0"
        },
        {
          "Items": "(ii) Savings Deposit",
          "AmountOutstanding": "439.67",
          "EffectiveDateRateofInterest": "4"
        },
        {
          "Items": "(iii) Term Deposits",
          "AmountOutstanding": "662.44"
        },
        {
          "Items": "1 year to less than 2 years",
          "AmountOutstanding": "374.2",
          "EffectiveDateRateofInterest": "6.48"
        },
        {
          "Items": "2 years to less than 3 years",
          "AmountOutstanding": "87.02",
          "EffectiveDateRateofInterest": "6.41"
        },
        {
          "Items": "3 years and above",
          "AmountOutstanding": "201.22",
          "EffectiveDateRateofInterest": "7.4"
        },
        {
          "Items": "II. FCNR(B)"
        },
        {
          "Items": "Term Deposits"
        },
        {
          "Items": "1 year to less than 2 years",
          "USD": "10.58",
          "GBP": "0.51",
          "AUD": "5.46",
          "CAD": "0.03",
          "EUR": "0.91",
          "InterestRate": "2.58"
        },
        {
          "Items": "2 years to less than 3 years",
          "USD": "1.21",
          "GBP": "0.08",
          "AUD": "0",
          "CAD": "0",
          "EUR": "0",
          "InterestRate": "2.74"
        },
        {
          "Items": "3 years and above",
          "USD": "30.73",
          "GBP": "1.26",
          "AUD": "1.55",
          "CAD": "0.14",
          "EUR": "0.59",
          "InterestRate": "4.2"
        }
      ]
    };
    this.foreignCurrencyExpObj = {
      "ForeignCurrencyExpCredit": [
        {
          "Items": "I. Pre-shipment Credit (i+ii+iii)"
        },
        {
          "Items": "(i) Up to 180 days"
        },
        {
          "Items": "(ii) 181 days to 270 days"
        },
        {
          "Items": "(iii) Beyond 270 days"
        },
        {
          "Items": "II. Post-shipment Credit (a+b)"
        },
        {
          "Items": "(a) On Demand Bills for transit period (as specified by FEDAI)",
          "USD": "0",
          "GBP": "0",
          "MAX": "0",
          "CAD": "0",
          "EUR": "0",
          "InterestRate": "0"
        },
        {
          "Items": "(b) Usance Bills (i+ii+iii)",
          "USD": "0",
          "GBP": "0",
          "MAX": "0",
          "CAD": "0",
          "EUR": "0",
          "InterestRate": "0"
        },
        {
          "Items": "(i) Up to 90 days",
          "USD": "0",
          "GBP": "0",
          "MAX": "0",
          "CAD": "0",
          "EUR": "0",
          "InterestRate": "0"
        },
        {
          "Items": "(ii) 91 days to 180 days",
          "USD": "0",
          "GBP": "0",
          "MAX": "0",
          "CAD": "0",
          "EUR": "0",
          "InterestRate": "0"
        },
        {
          "Items": "(iii) Beyond 180 days",
          "USD": "0",
          "GBP": "0",
          "MAX": "0",
          "CAD": "0",
          "EUR": "0",
          "InterestRate": "0"
        }
      ]
    }
    this.childDetails  = {
      "Sheet1": [
          {
              "cust_id": "712176505",
              "item": "1. Cash Credit",
              "amount": "4016.08",
              "Key1": "1."
          },
          {
              "cust_id": "9100567326",
              "item": "1. Cash Credit",
              "amount": "9530.29",
              "Key1": "1."
          },
          {
              "cust_id": "9859516374",
              "item": "1. Cash Credit",
              "amount": "8384.04",
              "Key1": "1."
          },
          {
              "cust_id": "1507389966",
              "item": "1. Cash Credit",
              "amount": "4568.16",
              "Key1": "1."
          },
          {
              "cust_id": "2180569624",
              "item": "1. Cash Credit",
              "amount": "3605.70",
              "Key1": "1."
          },
          {
              "cust_id": "1243022678",
              "item": "2. Demand Loans",
              "amount": "2500.984",
              "Key1": "2."
          },
          {
              "cust_id": "5879481453",
              "item": "2. Demand Loans",
              "amount": "2500.984",
              "Key1": "2."
          },
          {
              "cust_id": "6725082798",
              "item": "2. Demand Loans",
              "amount": "2500.984",
              "Key1": "2."
          },
          {
              "cust_id": "7942631500",
              "item": "2. Demand Loans",
              "amount": "2500.984",
              "Key1": "2."
          },
          {
              "cust_id": "3922169138",
              "item": "2. Demand Loans",
              "amount": "2500.984",
              "Key1": "2."
          },
          {
              "cust_id": "5621755968",
              "item": "3. Overdrafts",
              "amount": "186.15",
              "Key1": "3."
          },
          {
              "cust_id": "7970392191",
              "item": "3. Overdrafts",
              "amount": "186.15",
              "Key1": "3."
          },
          {
              "cust_id": "4409228734",
              "item": "3. Overdrafts",
              "amount": "186.15",
              "Key1": "3."
          },
          {
              "cust_id": "4007620641",
              "item": "3. Overdrafts",
              "amount": "186.15",
              "Key1": "3."
          },
          {
              "cust_id": "9744941255",
              "item": "3. Overdrafts",
              "amount": "186.15",
              "Key1": "3."
          },
          {
              "cust_id": "9419770705",
              "item": "4. Inland Bills financed and discounted",
              "amount": "112.04",
              "Key1": "4."
          },
          {
              "cust_id": "672293809",
              "item": "4. Inland Bills financed and discounted",
              "amount": "112.04",
              "Key1": "4."
          },
          {
              "cust_id": "3500399403",
              "item": "4. Inland Bills financed and discounted",
              "amount": "112.04",
              "Key1": "4."
          },
          {
              "cust_id": "1981915386",
              "item": "4. Inland Bills financed and discounted",
              "amount": "112.04",
              "Key1": "4."
          },
          {
              "cust_id": "7515919056",
              "item": "4. Inland Bills financed and discounted",
              "amount": "112.04",
              "Key1": "4."
          },
          {
              "cust_id": "7612300392",
              "item": "5.1 1 day to 180 days",
              "amount": "3.34",
              "Key1": "5.1"
          },
          {
              "cust_id": "6733349503",
              "item": "5.1 1 day to 180 days",
              "amount": "3.34",
              "Key1": "5.1"
          },
          {
              "cust_id": "6607661959",
              "item": "5.1 1 day to 180 days",
              "amount": "3.34",
              "Key1": "5.1"
          },
          {
              "cust_id": "8945531217",
              "item": "5.1 1 day to 180 days",
              "amount": "3.34",
              "Key1": "5.1"
          },
          {
              "cust_id": "37519954",
              "item": "5.1 1 day to 180 days",
              "amount": "3.34",
              "Key1": "5.1"
          },
       
      ]
  }


  this.jsonData= [
      {
          "cust_id": "712176505",
          "item": "1. Cash Credit",
          "amount": "4016.08",
          "Key1": "1."
      },
      {
          "cust_id": "9100567326",
          "item": "1. Cash Credit",
          "amount": "9530.29",
          "Key1": "1."
      },
      {
          "cust_id": "9859516374",
          "item": "1. Cash Credit",
          "amount": "8384.04",
          "Key1": "1."
      },
      {
          "cust_id": "1507389966",
          "item": "1. Cash Credit",
          "amount": "4568.16",
          "Key1": "1."
      },
      {
          "cust_id": "2180569624",
          "item": "1. Cash Credit",
          "amount": "3605.70",
          "Key1": "1."
      },
      {
          "cust_id": "1243022678",
          "item": "2. Demand Loans",
          "amount": "2500.984",
          "Key1": "2."
      },
      {
          "cust_id": "5879481453",
          "item": "2. Demand Loans",
          "amount": "2500.984",
          "Key1": "2."
      },
      {
          "cust_id": "6725082798",
          "item": "2. Demand Loans",
          "amount": "2500.984",
          "Key1": "2."
      },
      {
          "cust_id": "7942631500",
          "item": "2. Demand Loans",
          "amount": "2500.984",
          "Key1": "2."
      },
      {
          "cust_id": "3922169138",
          "item": "2. Demand Loans",
          "amount": "2500.984",
          "Key1": "2."
      },
      {
          "cust_id": "5621755968",
          "item": "3. Overdrafts",
          "amount": "186.15",
          "Key1": "3."
      },
      {
          "cust_id": "7970392191",
          "item": "3. Overdrafts",
          "amount": "186.15",
          "Key1": "3."
      },
      {
          "cust_id": "4409228734",
          "item": "3. Overdrafts",
          "amount": "186.15",
          "Key1": "3."
      },
      {
          "cust_id": "4007620641",
          "item": "3. Overdrafts",
          "amount": "186.15",
          "Key1": "3."
      },
      {
          "cust_id": "9744941255",
          "item": "3. Overdrafts",
          "amount": "186.15",
          "Key1": "3."
      },
      {
          "cust_id": "9419770705",
          "item": "4. Inland Bills financed and discounted",
          "amount": "112.04",
          "Key1": "4."
      },
      {
          "cust_id": "672293809",
          "item": "4. Inland Bills financed and discounted",
          "amount": "112.04",
          "Key1": "4."
      },
      {
          "cust_id": "3500399403",
          "item": "4. Inland Bills financed and discounted",
          "amount": "112.04",
          "Key1": "4."
      },
      {
          "cust_id": "1981915386",
          "item": "4. Inland Bills financed and discounted",
          "amount": "112.04",
          "Key1": "4."
      },
      {
          "cust_id": "7515919056",
          "item": "4. Inland Bills financed and discounted",
          "amount": "112.04",
          "Key1": "4."
      },
      {
          "cust_id": "7612300392",
          "item": "5.1 1 day to 180 days",
          "amount": "3.34",
          "Key1": "5.1"
      },
      {
          "cust_id": "6733349503",
          "item": "5.1 1 day to 180 days",
          "amount": "3.34",
          "Key1": "5.1"
      },
      {
          "cust_id": "6607661959",
          "item": "5.1 1 day to 180 days",
          "amount": "3.34",
          "Key1": "5.1"
      },
      {
          "cust_id": "8945531217",
          "item": "5.1 1 day to 180 days",
          "amount": "3.34",
          "Key1": "5.1"
      },
      {
          "cust_id": "37519954",
          "item": "5.1 1 day to 180 days",
          "amount": "3.34",
          "Key1": "5.1"
      },
   
  ]
  
  }

  
  closePopup() {
    this.popup = false;
    this.interestRatedAllLoansEnable = true;
    this.enableTable1 = true;
    this.enableTable2 = false;
    this.domSavingsDepositsEnable = false;
    this.domesticTermDepositsEnable = false;
    this.NRIDepositsEnable = false;
    this.foreignCurrencyExpCreditEnable = false;
  }

  getItems(item) {
    this.childData = item.child;
    if (this.childData) {
      this.enableTable2 = true;
      this.enableTable1 = false;
      this.enableTable9 = false;
      this.popup = true
    }

  }
  
  getchildDetails(childData){
this.enableTable9 = true;
this.enableTable10=true;
this.enableTable4 = false;
this.enableTable3 = false;
this.enableTable2 = false;
this.enableTable1 = false;
this.enableTable11 = true;
this.enableTable6 = false;
this.enableTable5 = false;
this.enableTable11 = true;

  }
  
  getDomSavingsItems(item) {
    this.childData = item.child;
    if (this.childData) {
      this.enableTable4 = true;
      this.enableTable3 = false;
      this.enableTable10=false;

    }
  }
  getDomesticTermItems(item) {
    this.childData = item.child;
    if (this.childData) {
      this.enableTable6 = true;
      this.enableTable5 = false;
      this.enableTable11=false;
      

    }
  }
  tabsBtn() {
    this.tabsEnable = true;
  }
  interestRatedAllLoans() {
    this.first=true;
    this.interestRatedAllLoansEnable = true
    this.enableTable1 = true;
    this.enableTable2 = false;
    this.domSavingsDepositsEnable = false;
    this.domesticTermDepositsEnable = false;
    this.NRIDepositsEnable = false;
    this.foreignCurrencyExpCreditEnable = false;
    this.enableTable10=false;
    this.enableTable11 = false;
  }
  domSavingsDeposits() {
    this.second=true;
    this.domSavingsDepositsEnable = true;
    this.enableTable3 = true;
    this.enableTable4 = false;
    this.interestRatedAllLoansEnable = false;
    this.domesticTermDepositsEnable = false;
    this.NRIDepositsEnable = false;
    this.foreignCurrencyExpCreditEnable = false;
    this.enableTable10=false;
    this.enableTable9=false;
    this.enableTable11 = false;
  }
  domesticTermDeposits() {
    this.third=true;
    this.domesticTermDepositsEnable = true;
    this.enableTable5 = true;
    this.enableTable6 = false;
    this.interestRatedAllLoansEnable = false;
    this.domSavingsDepositsEnable = false;
    this.NRIDepositsEnable = false;
    this.enableTable10=false;
    this.enableTable9=false;
    this.foreignCurrencyExpCreditEnable = false;
    this.enableTable11 = false;
  }
  NRIDeposits() {
    this.fourth=true;
    this.NRIDepositsEnable = true;
    this.enableTable7 = true;
    this.interestRatedAllLoansEnable = false;
    this.domSavingsDepositsEnable = false;
    this.domesticTermDepositsEnable = false;
    this.foreignCurrencyExpCreditEnable = false;
    this.enableTable10=false;
    this.enableTable9=false;
    this.enableTable11 = false;
  }
  ForeignCurrencyExpCreditEnable() {
    this.fifth=true;
    this.foreignCurrencyExpCreditEnable = true;
    this.enableTable8 = true;
    this.interestRatedAllLoansEnable = false;
    this.domSavingsDepositsEnable = false;
    this.domesticTermDepositsEnable = false;
    this.NRIDepositsEnable = false;
    this.enableTable9=false;
    this.enableTable10=false;
  }
  approved() {
    this.showPopup = true;
    this.showPopup1 = false;
    this.text ="Report “RBI207_Special Fortnightly Return-VI-AB” is Verified and Approved. Final Approval is sent to “Regional Manager”."
  }
  rejected() {
    this.showPopup = false;
    this.showPopup1 = true;
    this.text ="Report “RBI207_Special Fortnightly Return-VI-AB” has been rejected. Please fill in the Valid Reason for Rejection in the Comments section for further process.";
  }
  bakToBankDetails() {
    this.interestRatedAllLoansEnable = false;
    this.domSavingsDepositsEnable = false;
    this.domesticTermDepositsEnable = false;
    this.NRIDepositsEnable = false;
    this.foreignCurrencyExpCreditEnable = false;
    this.tabsEnable = false;
    this.enableCollapse=true;
  }
  closeModal(){
    this.interestRatedAllLoansEnable = false;
    this.domSavingsDepositsEnable = false;
    this.domesticTermDepositsEnable = false;
    this.NRIDepositsEnable = false;
    this.foreignCurrencyExpCreditEnable = false;
    this.tabsEnable = true;
    this.showPopup1=false;
  }
  closeModal1(){
    this.interestRatedAllLoansEnable = false;
    this.domSavingsDepositsEnable = false;
    this.domesticTermDepositsEnable = false;
    this.NRIDepositsEnable = false;
    this.foreignCurrencyExpCreditEnable = false;
    this.tabsEnable = true;
    this.comments='';
    this.showPopup1=false;
  }

  enableDisableRule(job) {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }
  isActive(val) {
    return this.selected === val;
  }



  download(){
    this.dashboardService.downloadFile(this.jsonData, 'jsontocsv');
  }






  test() {
    const a = document.createElement('a');
    document.body.appendChild(a);
    const blob = new Blob(['Test String'], { type: 'application/rtf' }),
      url = window.URL.createObjectURL(blob);
    console.log(navigator);
    if (
      navigator.appVersion.toString().indexOf('.NET') > 0 &&
      window.navigator.msSaveBlob
    ) {
      console.log('from Explorer', window.navigator);
      let val = window.navigator.msSaveBlob(blob, 'UnitDetails' + '.rtf');
      console.log(val);
    } else {
      a.href = url;
      a.download = 'UnitDetails' + '.rtf';
      a.click();
      window.URL.revokeObjectURL(url);
    }
  }

}
