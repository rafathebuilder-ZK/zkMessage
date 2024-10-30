// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract zkMessage {
    address public admin;

    // Event to be emitted with the message
    event MessageSent(address indexed user, string tag, string message);

    // Event to be emitted when a role is assigned
    event MessengerApproved(address indexed user, string tag, string message);

    // Event to be emitted when a role is revoked
    event MessengerRevoked(address indexed user, string tag, string message);

    // Modifier to restrict access to the admin
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can call this function.");
        _;
    }

    // Struct to hold messenger information
    struct Messenger {
        bool hasRole;
        string tag;
    }

    // Mapping to store messengers and their tags
    mapping(address => Messenger) public messengers;

    // Constructor to set the admin to the contract deployer
    constructor() {
        admin = msg.sender;
    }

    // Function to update the admin address (Optional, but useful)
    function setAdmin(address newAdmin) external onlyAdmin {
        require(newAdmin != address(0), "Invalid admin address");
        admin = newAdmin;
    }

    // Function to assign a role with a tag to a specific address
    function assignMessenger(address user, string calldata tag) external onlyAdmin {
        require(user != address(0), "Invalid address");
        messengers[user] = Messenger(true, tag);
        emit MessengerApproved(user, tag, "Messenger role assigned.");
    }

    // Function to revoke a messenger's role
    function revokeMessenger(address user) external onlyAdmin {
        require(user != address(0), "Invalid address");
        require(messengers[user].hasRole, "User does not have a messenger role.");

        // Get the tag for the user before revoking
        string memory tag = messengers[user].tag;

        // Revoke the role
        messengers[user].hasRole = false;

        // Emit the MessengerRevoked event with user, tag, and a message
        emit MessengerRevoked(user, tag, "Messenger role revoked.");
    }

    // Function to send a message (restricted to admin or assigned users)
    function sendMessage(string calldata _message) external {
        require(msg.sender == admin || messengers[msg.sender].hasRole, "Not authorized to send messages.");

        // Get the tag for the sender
        string memory tag = msg.sender == admin ? "Admin" : messengers[msg.sender].tag;

        // Emit the MessageSent event with the message, user, and tag
        emit MessageSent(msg.sender, tag, _message);
    }
}
