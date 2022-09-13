// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;
contract votes{
    struct Votes{
        address _address;
        string candidateName;
        string candidateKey;
        string candidateParty;
        string imagePath;
        string goal;
        uint256 timestamp;
        string categoryOfElection;
        string Nin;
    }
    struct User{
        address walletAddress;
        string privateKey;//In a standard setting, this information is meant to be encrypted
        string mnemonic;
        string name;
        string nin;
        uint256 timestamp;
        bool hasVoted;
        bool isRegistered;
    }

    event NewUser(address walletAddress, string privateKey, string mnemonic, string name, string nin, uint256 timestamp);
    event VoteCasted(address _address, string candidateName, string candidateKey, string candidateParty,string imagePath,string goal,string categoryOfElection, string nin);

    mapping(string => User) user;

    Votes[] votesContainer;
    User[] users;

    modifier verifyUsersVote(string memory nin){
        require(!user[nin].hasVoted, "You have already casted your vote.");
        _;//modifier functions continues when the return response is evaluated to true i.e. user has not voted
    }
    modifier verifyUserAccount(string memory nin){
        require(!user[nin].isRegistered,"This user NIN has been registered on the blockchain");
        _;
    }
    function Hello() public pure returns (string memory)
    {
        return "Hello World, Our votes contract has been deployed to the block chain with ... ";
    }
    function AddUserToBlockChain(address walletAddress, string memory privateKey, string memory mnemonic, string memory name, string memory nin) public verifyUserAccount(nin){
        bool hasVoted = false;
        bool isRegistered = true;
        users.push(User(walletAddress,privateKey,mnemonic,name,nin,block.timestamp,hasVoted, isRegistered));
        user[nin] = User(walletAddress,privateKey,mnemonic,name,nin,block.timestamp,hasVoted, isRegistered);
        emit NewUser(walletAddress, privateKey, mnemonic, name, nin, block.timestamp);
    }
    function AddVoteToBlockChain(address _address, string memory candidateName, string memory candidateKey, string memory candidateParty, string memory imagePath, string memory goal, string memory categoryOfElection, string memory nin) public verifyUsersVote(nin){
        votesContainer.push(Votes(_address,candidateName,candidateKey,candidateParty,imagePath,goal,block.timestamp,categoryOfElection,nin));
        user[nin].hasVoted = true;//verifying that user has voted
        emit VoteCasted(_address, candidateName, candidateKey, candidateParty, imagePath, goal, categoryOfElection, nin);
    }
    function GetAllVotesFromBlockChain() public view returns (Votes[] memory){
        return votesContainer;
    }
    function GetAllUsersFromBlockChain() public view returns (User[] memory){
        return users;
    }

}