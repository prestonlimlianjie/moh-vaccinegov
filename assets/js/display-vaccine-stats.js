axios.get('https://raw.githubusercontent.com/prestonlimlianjie/hello-alert/main/hello.js')
.then(function (response) {
  console.log(response);

  let totalVaccinatedNum = 'MY DUMMY CONTENT'

  // This is necessary because there are 3 Jekyll template sections: 
  // for mobile, tablet, and desktop with the same classname in `_includes/vaccine-stats.html`
  const vacTotalNumElemArray = document.getElementsByClassName('vaccinated-total-num')
  for (let i = 0, len = vacTotalNumElemArray.length; i < len; i++) {
    vacTotalNumElemArray[i].innerHTML = '1'
    console.log(vacTotalNumElemArray[i])
  }
})
.catch(function (error) {
  console.log(error);
})