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
            "password":"2323"
        },
        {
            "id": 2,
            "name": "Daw Mya",
            "address": "Tamwa",
            "phoneNo": "09456",
            "password":"2323"
        }
        , {
            "id": 3,
            "name": "Nyi Nyi",
            "address": "InSain",
            "phoneNo": "09789",
             "password":"2323"
        }
 ];

let userBankAccountDetails = [
    {
        "userAccountId": 1,
         "leftAmount": 30000,
    }
]

let avaliableService = true;

// do{
let sercive = +prompt("Enter a service option")

switch (sercive) {
    case bankingServices["Cash in"]:
         cashIn();
        break;
    case bankingServices["Cash out"]:
         cashOut();
         break;
    case bankingServices["Cash out"]:
        console.log("cash out service")
         break;
    default:
        console.log("Invalid Service");
        break;
    }  
    
// } while(avaliableService);

function cashOut() {
  const useraccount = getUserAccountDetail();
  if (useraccount)
  {
     let ammount = +prompt("Enter ammount");
      const userBalance = userBankAccountDetails.find(u => u.userAccountId === useraccount.id);
      console.log(userBalance);
      if (userBalance.leftAmount >= ammount) {
          const index = userBankAccountDetails.findIndex(u => u.userAccountId == useraccount.id);
          if (index != -1) {
              const updatedBalance = userBalance.leftAmount - ammount;
              userBankAccountDetails[index]["leftAmount"] = updatedBalance;
          }
      } else {
          console.log("Not enough money")
      }
  }
   else {
       console.log("Invalid User account")
   }
}

function cashIn() {
    const useraccount = getUserAccountDetail();
    if (useraccount) {
        let amount = +prompt("Enter a amount");
        if (amount > 0) {
            const index = userBankAccountDetails.findIndex(u => u.userAccountId === useraccount.id);
            if (index != -1) {
                userBankAccountDetails[index]["leftAmount"] += amount;
            }
        } else {
            console.log("Invalid ammount")
        }
    } else {
        console.log("Invalid user account");
     }
}


function checkAmount() {
    
}

function getUserAccountDetail() {
    let phoneNo =  prompt("Enter your phone number");
    let password = prompt("Enter your password");
    const userAccountDetails = userAccounts.find(u => u.password === password && u.phoneNo === phoneNo);
    return userAccountDetails;
}