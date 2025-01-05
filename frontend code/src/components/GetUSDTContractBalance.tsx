import React from 'react'
import { useReadContract } from 'wagmi';
import { abi } from "../abi";

const GetUSDTContractBalance = () => {

        const {data, isLoading, error } = useReadContract({
          address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          abi,
          functionName: "balanceOf",
          args: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"]
        });
      
        if(isLoading) {
          return (
            <div>
              Loading...
            </div>
          )
        }
      return (
        <div>
          The Total USDT Contract Balance is: {data?.toString()}
        </div>
      )
}

export default GetUSDTContractBalance