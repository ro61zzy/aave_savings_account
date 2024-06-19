// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@aave/core-v3/contracts/interfaces/IPool.sol";
import "@aave/core-v3/contracts/interfaces/IAToken.sol";
import "@aave/core-v3/contracts/dependencies/openzeppelin/contracts/IERC20.sol";

contract AaveSavingsV3 {
    IPool public pool;         // Aave lending pool contract
    IERC20 public sepETH;      // SepoliaETH token contract
    IAToken public aSepETH;    // Corresponding aToken for SepoliaETH

    constructor(
        address _pool,        // Aave Pool contract address
        address _sepETH,      // SepoliaETH token address
        address _aSepETH      // aToken address for SepoliaETH
    ) {
        pool = IPool(_pool);          // Initialize Aave Lending Pool contract
        sepETH = IERC20(_sepETH);     // Initialize SepoliaETH token contract
        aSepETH = IAToken(_aSepETH);  // Initialize corresponding aToken contract for SepoliaETH
    }

    // Function to deposit SepoliaETH into the Aave LendingPool
    function deposit(uint256 amount) external {
        // Transfer SepoliaETH from the user to this contract
        sepETH.transferFrom(msg.sender, address(this), amount);

        // Approve the Aave LendingPool to spend SepoliaETH on behalf of this contract
        sepETH.approve(address(pool), amount);

        // Deposit SepoliaETH into Aave LendingPool
        pool.supply(address(sepETH), amount, msg.sender, 0);
    }

    // Function to withdraw SepoliaETH from the Aave LendingPool
    function withdraw(uint256 amount) external {
        // Withdraw SepoliaETH from Aave LendingPool
        pool.withdraw(address(sepETH), amount, msg.sender);
    }

    // Function to get the savings balance of a user in terms of aSepETH tokens
    function getSavingsBalance(address user) external view returns (uint256) {
        // Get the balance of aSepETH tokens held by the user
        return aSepETH.balanceOf(user);
    }
}
