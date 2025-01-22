const bankingServices = {
    "Cash out": 1,
    "Cash in": 2,
    "Check Amount": 3,
    "Transfer":4
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
    },
    {
        "userAccountId": 2,
         "leftAmount": 20000,
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
    case bankingServices["Check Amount"]:
        checkAmount();
        break;
     case bankingServices["Transfer"]:
        transfer();
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
    const useraccount = getUserAccountDetail();
    if (useraccount) {
        const userAccountDetail = userBankAccountDetails.find(u => u.userAccountId == useraccount.id);
        console.table(userAccountDetail);
    } else {
        console.log("Invalid user account");
    }
}

function getUserAccountDetail() {
    let phoneNo =  prompt("Enter your phone number");
    let password = prompt("Enter your password");
    const userAccountDetails = userAccounts.find(u => u.password === password && u.phoneNo === phoneNo);
    return userAccountDetails;
}


function transfer() {
    let phoneNo = prompt("Enter transfer phone number");
    const recipientUserAccount = userAccounts.find(u => u.phoneNo === phoneNo);
    if (recipientUserAccount) {
        const trnasferAmount = +prompt("Enter amount");
        const senderAccountDetails = getUserAccountDetail();
        const senderAccountBalance = userBankAccountDetails.find(u => u.userAccountId == senderAccountDetails.id);

        if (trnasferAmount > 0 && senderAccountBalance.leftAmount >= trnasferAmount)
        {
            const recipientAccountDetails = userBankAccountDetails.find(r => r.userAccountId == recipientUserAccount.id);
            if (recipientAccountDetails) {
                const recipientUserIndex = userBankAccountDetails.findIndex(r => r.userAccountId == recipientAccountDetails.userAccountId);
                userBankAccountDetails[recipientUserIndex]["leftAmount"] += trnasferAmount;
                const senderIndex = userBankAccountDetails.findIndex(s => s.userAccountId == senderAccountDetails.id);
                userBankAccountDetails[senderIndex]['leftAmount'] -= trnasferAmount;
                checkAmount();
                checkAmount();
            } else {
                console.log("Recipient user acccount does not exist in bank")
            }
        } else {
            console.log("Not enough money to transfer")
        }
    } else {
        console.log("phone number does not exist")
    }
}

