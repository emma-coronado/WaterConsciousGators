document.getElementById("submitButton").onclick = onClick;
    
function onClick() {
    var showerTimeComp = document.getElementById("showerTimeInput");
    var dishwasherFreqComp = document.getElementById("dishwasherFreqInput");
    var handwashAmtComp = document.getElementById("handwashAmtInput");
    var laundryFreqComp = document.getElementById("laundryFreqInput");

    const showerTime = showerTimeComp.valueAsNumber;
    const dishwasherFreq = dishwasherFreqComp.valueAsNumber;
    const handwashAmt = handwashAmtComp.valueAsNumber;
    const laundryFreq = laundryFreqComp.valueAsNumber;

    // https://www.portland.gov/water/water-efficiency-programs/save-water-home#toc-dishwasher-water-use
    var waterAmt = showerTime*2*30 + dishwasherFreq*12 + handwashAmt*15*7 + laundryFreq*30;
    
    var modalContent = document.getElementById("modalBody");
    modalContent.innerText = `You use an estimated ${waterAmt} gallons of water a month.`;

    var modalIF = document.getElementById("exampleModal");
    var modal = bootstrap.Modal.getOrCreateInstance(modalIF);
    modal.show();
}
