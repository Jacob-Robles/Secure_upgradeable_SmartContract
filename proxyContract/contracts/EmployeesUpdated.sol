// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.22 <0.9.0;

import "./Storage.sol";

contract EmployeesUpdated is Storage {
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    constructor() {
        initialize(msg.sender);
    }

    function initialize(address _owner) public {
        require(!_initialize);
        owner = _owner;
        _initialize = true;
    }

    function getNumberOfEmployees() public view returns (uint256) {
        return _uintStorage["Dogs"];
    }

    function setNumberOfEmployees(uint256 toSet) public onlyOwner {
        _uintStorage["Dogs"] = toSet;
    }
}
