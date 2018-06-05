window.addEventListener('load', function() {

        connectWeb3();       
         
         if(web3.isConnected){
             console.log('Web3 is connected ');
         }else{
             console.log("There's not connection");
         }

  })



function connectWeb3(){

    if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
            web3 = new Web3(web3.currentProvider);
            console.log('Metamask')
        } else {
            console.log('No web3? You should consider trying MetaMask!')
            // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        }
}

function getWeb3(){
      return web3;
}

