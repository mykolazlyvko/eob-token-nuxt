const abiCrowdSaleContract = [
   {
      "inputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"constructor"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"previousOwner",
            "type":"address"
         },
         {
            "indexed":true,
            "internalType":"address",
            "name":"newOwner",
            "type":"address"
         }
      ],
      "name":"OwnershipTransferred",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"uint256",
            "name":"_id",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"_totalTokens",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"_startTime",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"_endTime",
            "type":"uint256"
         }
      ],
      "name":"PresaleCreated",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"uint256",
            "name":"id",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"timestamp",
            "type":"uint256"
         }
      ],
      "name":"PresalePaused",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"prevValue",
            "type":"address"
         },
         {
            "indexed":true,
            "internalType":"address",
            "name":"newValue",
            "type":"address"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"timestamp",
            "type":"uint256"
         }
      ],
      "name":"PresaleTokenAddressUpdated",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"uint256",
            "name":"id",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"timestamp",
            "type":"uint256"
         }
      ],
      "name":"PresaleUnpaused",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"bytes32",
            "name":"key",
            "type":"bytes32"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"prevValue",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"newValue",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"timestamp",
            "type":"uint256"
         }
      ],
      "name":"PresaleUpdated",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"user",
            "type":"address"
         },
         {
            "indexed":true,
            "internalType":"uint256",
            "name":"id",
            "type":"uint256"
         },
         {
            "indexed":true,
            "internalType":"address",
            "name":"purchaseToken",
            "type":"address"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"tokensBought",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"amountPaid",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"tokenPriceUSD",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"timestamp",
            "type":"uint256"
         }
      ],
      "name":"TokensBought",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"user",
            "type":"address"
         },
         {
            "indexed":true,
            "internalType":"uint256",
            "name":"id",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"amount",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"timestamp",
            "type":"uint256"
         }
      ],
      "name":"TokensClaimed",
      "type":"event"
   },
   {
      "inputs":[
         
      ],
      "name":"BASE_MULTIPLIER",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"DAIInterface",
      "outputs":[
         {
            "internalType":"contract IERC20",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"MONTH",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"USDCInterface",
      "outputs":[
         {
            "internalType":"contract IERC20",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"USDTInterface",
      "outputs":[
         {
            "internalType":"contract IERC20",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"_id",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"amount",
            "type":"uint256"
         }
      ],
      "name":"buyWithDAI",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"_id",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"amount",
            "type":"uint256"
         }
      ],
      "name":"buyWithETH",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "stateMutability":"payable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"_id",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"amount",
            "type":"uint256"
         }
      ],
      "name":"buyWithUSDC",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"_id",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"amount",
            "type":"uint256"
         }
      ],
      "name":"buyWithUSDT",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"_id",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"_newPrice",
            "type":"uint256"
         }
      ],
      "name":"changePrice",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"_id",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"_startTime",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"_endTime",
            "type":"uint256"
         }
      ],
      "name":"changeSaleTimes",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"_id",
            "type":"uint256"
         },
         {
            "internalType":"address",
            "name":"_newAddress",
            "type":"address"
         }
      ],
      "name":"changeSaleTokenAddress",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"_id",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"_vestingStartTime",
            "type":"uint256"
         }
      ],
      "name":"changeVestingStartTime",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"user",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"_id",
            "type":"uint256"
         }
      ],
      "name":"claim",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address[]",
            "name":"users",
            "type":"address[]"
         },
         {
            "internalType":"uint256",
            "name":"_id",
            "type":"uint256"
         }
      ],
      "name":"claimMultiple",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"user",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"_id",
            "type":"uint256"
         }
      ],
      "name":"claimableAmount",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"_startTime",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"_endTime",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"_price",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"_tokensToSell",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"_baseDecimals",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"_vestingStartTime",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"_vestingCliff",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"_vestingPeriod",
            "type":"uint256"
         }
      ],
      "name":"createPresale",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"_id",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"amount",
            "type":"uint256"
         }
      ],
      "name":"daiBuyHelper",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"_id",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"amount",
            "type":"uint256"
         }
      ],
      "name":"ethBuyHelper",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"ethAmount",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"getLatestPrice",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"_oracle",
            "type":"address"
         },
         {
            "internalType":"address",
            "name":"_usdt",
            "type":"address"
         },
         {
            "internalType":"address",
            "name":"_usdc",
            "type":"address"
         },
         {
            "internalType":"address",
            "name":"_dai",
            "type":"address"
         }
      ],
      "name":"initialize",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"owner",
      "outputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"_id",
            "type":"uint256"
         }
      ],
      "name":"pausePresale",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "name":"paused",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "name":"presale",
      "outputs":[
         {
            "internalType":"address",
            "name":"saleToken",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"startTime",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"endTime",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"price",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"tokensToSell",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"baseDecimals",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"inSale",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"vestingStartTime",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"vestingCliff",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"vestingPeriod",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"presaleId",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"renounceOwnership",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"_id",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"amount",
            "type":"uint256"
         }
      ],
      "name":"stablecoinBuyHelper",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"usdPrice",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"newOwner",
            "type":"address"
         }
      ],
      "name":"transferOwnership",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"_id",
            "type":"uint256"
         }
      ],
      "name":"unPausePresale",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "name":"userVesting",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"totalAmount",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"claimedAmount",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"claimStart",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"claimEnd",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   }
];

export default abiCrowdSaleContract;
