const Dogs = artifacts.require('Dogs');
const DogsUpdated = artifacts.require('DogsUpdated');
const Proxy = artifacts.require('Proxy');

module.exports = async function (deployer, network, accounts) {
    //Deploy Contracts
    const dogs = await Dogs.new();
    const proxy = await Proxy.new(Employees.address);

    //Create Proxy Dog to Fool Truffle
    var proxyDog = await Employees.at(proxy.address);

    //Set the nr of dogs through the proxy
    await proxyEmployees.setNumberOfEmployees(10);

    //Tested
    var nrOfEmployees = await proxyEmployee.getNumberOfEmployees();
    console.log("Before update: " + nrOfDogs.toNumber());

    //Deploy new version of Dogs
    const employeesUpdated = await EmployeesUpdated.new();
    proxy.upgrade(EmployeesUpdated.address);

    //Fool truffle once again. It now thinks proxyDog has all functions.
    proxyEmployee = await EmployeesUpdated.at(proxy.address);
    //Initialize proxy state.
    proxyDog.initialize(accounts[0]);

    //Check so that storage remained
    nrOfEmployees = await proxyEmployee.getNumberOfEmployees();
    console.log("After update: " + nrOfEmployees.toNumber());

    //Set the nr of dogs through the proxy with NEW FUNC CONTRACT
    await proxyEmployee.setNumberOfEmployees(30);

    //Check so that setNumberOfDogs worked with new func contract.
    nrOfDogs = await proxyEmployee.getNumberOfEmployees();
    console.log("After change: " + nrOfEmployees.toNumber());


}