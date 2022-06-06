// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.22 <0.9.0;

import "./Storage.sol";

contract Employees is Storage {
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function getNumberOfEmployees() public view returns (uint256) {
        return _uintStorage["Dogs"];
    }

    function setNumberOfEmployees(uint256 toSet) public {
        _uintStorage["Dogs"] = toSet;
    }
}
