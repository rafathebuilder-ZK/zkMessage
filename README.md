# zkMessage
A simple contract for onchain broadcasting

The zkMessage smart contract is a role-based messaging system deployed on the ZKsync network. This contract allows an admin to assign specific users as "messengers" and enable them to broadcast messages on-chain. The admin has the ability to assign or revoke messenger roles, ensuring only authorized users can send messages.

The intention is that this contract can be used to broadcast a message that can be picked up by an RSS feed, composable with other software such as Slack, Telegram, Discord, Discourse, etc.

# Methods / Functions

Assign Messenger: 
The admin can assign a user as a messenger by calling the assignMessenger function with the user's address and a role tag.

Send Message: 
Authorized messengers or the admin can call the sendMessage function with a string message. The contract will emit the MessageSent event.

Revoke Messenger:
The admin can revoke a messenger's role using the revokeMessenger function.

Transfer Admin Role: 
The admin can transfer their role to a new address using the setAdmin function.
