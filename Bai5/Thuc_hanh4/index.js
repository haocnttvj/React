function calculate(){
    let amount = prompt("Enter amount:");
    let rate = prompt("Enter rate:");
    let months = prompt("Enter months:");

    //Tính lãi suất
    const interest = (amount * (rate * 0.01))/months;
    //Tính số tiền phải thanh toán
    const total = ((amount/months) + interest).toFixed(2);
    //Thực hiện gọi alert() để hiển thị kết quả
    alert("EMI:" + total);
}