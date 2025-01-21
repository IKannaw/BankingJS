const bankingServices = {
    "Cash out": 1,
    "Cash in": 2,
    "Check Amount In Bank": 3
}

let userAccounts =
    [
        {
            "id": 1,
            "name": "U Aung",
            "address": "Hlaing",
            "phoneNo": "09123",
        },
        {
            "id": 2,
            "name": "Daw Mya",
            "address": "Tamwa",
            "phoneNo": "09456",
        }
        , {
            "id": 3,
            "name": "Nyi Nyi",
            "address": "InSain",
            "phoneNo": "09789",
        }
    ];

let userBankAccountDetails = [
    {
       
    }
]

let sercive = +prompt("Enter a service option")

switch (sercive) {
    case bankingServices["Cash in"]:
         cashOut();
        break;
    case bankingServices["Cash out"]:
        console.log("cash out service");
         break;
    case bankingServices["Cash out"]:
        console.log("cash out service")
         break;
    default:
        console.log("Invalid Service");
        break;
}

function cashOut() {
    let ammount = +prompt("Enter a amount");
    console.log(ammount);
}

function cashIn() {
    
}


function checkAmount() {
    
}