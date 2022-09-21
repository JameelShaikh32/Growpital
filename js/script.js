let rechargeOne = document.getElementById('recharge-one');
let rechargeTwo = document.getElementById('recharge-two');
let rechargeThree = document.getElementById('recharge-three');
let rechargeFour = document.getElementById('recharge-four');

let moneyInput = document.getElementById('money-input');

rechargeOne.onclick = () => {
    moneyInput.value = rechargeOne.innerHTML.slice(1);
}

rechargeTwo.onclick = () => {
    moneyInput.value = rechargeTwo.innerHTML.slice(1);
}

rechargeThree.onclick = () => {
    moneyInput.value = rechargeThree.innerHTML.slice(1);
}

rechargeFour.onclick = () => {
    moneyInput.value = rechargeFour.innerHTML.slice(1);
}

function closeBtn() {
    var paymentBox = document.getElementById('payment-box');
    var paymentSuccess = document.getElementById('payment-success');
    paymentBox.classList.toggle('active');
    paymentSuccess.classList.toggle('active');
}

var data = {
    AccountName: "Current Account",
    BankBalance: "XXXXX",
    transactionamount: "15000",
    transactiondate: "12 Aug 2022, 03:55pm",
    PaymentType: {
        Id: "X",
        Name: "Bank to Wallet Transfer"
    },
    senderDetails: {
        sender: "Saurabh Sharma",
        bank: "SBI",
        IFSC: "SBIN016095",
        accountno: "xxxxxxxxx5736",
        transactiondate: "12 Aug 2022, 03:55pm"
    },
    recieverDetails: {
        reciever: "Saurabh Sharma",
        wallet: " Growpital Wallet ",
        referenceno: "DBTR/222201998174",
        transactiondate: "12 Aug 2022, 03:55pm"
    },
    paymentmethod: "UPI",
    transactionId: "DBTR/222201998174"
}


function loadData() {
    let transactionAmount = document.getElementById('transaction-amount');
    let transactionTime = document.getElementById('transaction-Time');

    let senderName = document.getElementById('sender-name');
    let senderBank = document.getElementById('sender-bank');
    let senderAccountNo = document.getElementById('sender-account-no');

    let receiverName = document.getElementById('receiver-name');
    let receiverBank = document.getElementById('receiver-bank');
    let receiverAccountNo = document.getElementById('receiver-account-no');

    let shotName = document.getElementById('shot-name');

    let paymentMethod = document.getElementById('method');
    let transactionID = document.getElementById('id');

    transactionAmount.innerHTML = data.transactionamount;
    transactionTime.innerHTML = data.transactiondate;

    senderName.innerHTML = data.senderDetails.sender;
    senderBank.innerHTML = data.senderDetails.bank + ", IFSC " + data.senderDetails.IFSC;

    senderAccountNo.innerHTML = data.senderDetails.accountno;

    receiverName.innerHTML =
        receiverBank.innerHTML =
        receiverAccountNo.innerHTML =

        shotName.innerHTML =

        paymentMethod.innerHTML =
        transactionID.innerHTML =
}

function continueBtn() {
    var paymentBox = document.getElementById('payment-box');
    var paymentSuccess = document.getElementById('payment-success');
    paymentBox.classList.toggle('active');
    paymentSuccess.classList.toggle('active');
}