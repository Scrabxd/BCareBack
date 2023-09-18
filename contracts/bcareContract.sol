// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// This contract holds the information and processes of cancer patients
contract BcareContract {
    address public owner; // Owner of the contract
    uint256 public patientCount; // Total count of patients

    // Struct to store patient information and processes
    struct Patient {
        uint256 id;
        string name;
        uint256[] processes; // Array of process IDs
    }

    mapping(uint256 => Patient) public patients; // Map patient ID to patient struct

    // Modifier to restrict access to the contract owner
    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "Only the contract owner can call this function"
        );
        _;
    }

    // Constructor to set the contract owner
    constructor() {
        owner = msg.sender;
    }

    // Function to add a new patient
    function addPatient(string memory _name) public onlyOwner {
        uint256 id = patientCount++;
        patients[id] = Patient(id, _name, new uint256[](0));
    }

    // Function to add a process to a patient
    function addProcess(
        uint256 _patientId,
        uint256 _processId
    ) public onlyOwner {
        Patient storage patient = patients[_patientId];
        patient.processes.push(_processId);
    }

    // Retrieve patient information by ID
    function getPatient(uint256 _id) public view returns (Patient memory) {
        return patients[_id];
    }
}
