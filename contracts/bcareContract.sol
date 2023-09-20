// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BcareContract {
    address public owner;

    // Struct to store patient information
    struct PatientInfo {
        string cancerType;
        uint256 cancerStage;
        uint256 age;
        uint256 weight;
        uint256 height;
        string gender;
    }

    // Struct to store appointment information
    struct Appointment {
        uint256 appointmentDate;
        string[] prescribedMedicines;
        string[] processes;
        string[] examsAndAnalysis;
        string medRecommendations;
    }

    // Constructor to set the contract owner
    constructor() {
        owner = msg.sender;
    }

    // Mapping to associate patient addresses with their PatientInfo
    mapping(address => PatientInfo) public patientInfo;

    // Mapping to associate patient addresses with lists of appointments
    mapping(address => Appointment[]) public appointments;

    // Modifier to restrict access to doctors only
    modifier onlyDoctor() {
        require(
            msg.sender == owner,
            "Only the contract owner can call this function"
        );
        _;
    }

    // Function to add or update patient information (for doctors)
    function addOrUpdatePatientInfo(
        address patientAddress,
        string memory _cancerType,
        uint256 _cancerStage,
        uint256 _age,
        uint256 _weight,
        uint256 _height,
        string memory _gender
    ) public onlyDoctor {
        // Create a new PatientInfo struct with the provided information
        PatientInfo memory newPatientInfo = PatientInfo({
            cancerType: _cancerType,
            cancerStage: _cancerStage,
            age: _age,
            weight: _weight,
            height: _height,
            gender: _gender
        });

        // Store the patient information using the provided patient address as the key
        patientInfo[patientAddress] = newPatientInfo;
    }

    // Function to schedule an appointment (for doctors)
    function scheduleAppointment(
        address patientAddress,
        uint256 _appointmentDate,
        string[] memory _prescribedMedicines,
        string[] memory _processes,
        string[] memory _examsAndAnalysis,
        string memory _medRecommendations
    ) public onlyDoctor {
        // Create a new Appointment struct for the appointment
        Appointment memory newAppointment = Appointment({
            appointmentDate: _appointmentDate,
            prescribedMedicines: _prescribedMedicines,
            processes: _processes,
            examsAndAnalysis: _examsAndAnalysis,
            medRecommendations: _medRecommendations
        });

        // Add the appointment to the patient's list of appointments
        appointments[patientAddress].push(newAppointment);
    }

    // Function to retrieve a patient's appointments
    function getAppointments(
        address patientAddress
    ) public view returns (Appointment[] memory) {
        return appointments[patientAddress];
    }
}
