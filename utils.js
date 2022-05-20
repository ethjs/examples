async function connectWeb3() {

    // Check if Browser is Chrome or Firefox
    if (
      navigator.userAgent.indexOf("Firefox") != -1 ||
      navigator.userAgent.indexOf("Chrome") != -1
    ) {
      
      // Check if browser extension is installed
      try {
  
        // Get account
        if (window.ethereum) {
  
          // Request account
          let account = await ethereum.request({ method: "eth_accounts" });
  
          // If no account was found
          if (!account.length) {
  
            // Show login button 
            el("#login").style.display = "block";
            return false;
          } 
          else {
            return true;
          }
        }
      
      // Provider not set or invalid
      } catch (e) {
  
        // Show install extension notification
        el("#install").style.display = "block";
        return false;
      }
    }
    
    // Browser is not supported
    else {
  
      // Show unsupported browser notification
      el("#browser").style.display = "block";
      return false;
    }
}

async function checkMinimalBalance() {
    // Access web3
    const web3 = new Web3(window.ethereum);

    // Get account
    let accounts = await ethereum.request({ method: "eth_accounts" });

    // Get the account balance and check if it is above 0.25 LYXt
    if(web3.utils.fromWei(await web3.eth.getBalance(accounts[0]), 'ether') < 0.25){

        // Show low balance browser notification
      el("#lowBalance").style.display = "block";
    }
}