import { Address } from "ethereumjs-util";
import {ethers} from "ethers";
import { acceptHMRUpdate, defineStore } from "pinia";
import {ref} from "vue";
import contractAbi from "../artifacts/contracts/votes.sol/votes.json";

//defining parameters that will interact with the deployed smart contracts.
const deployingPrivateKey = "ddd7a86b5bb5bb8d0c987cd942ad49b0d63a32f76eb230b144d8b4fbfe37fb3e";
const contractAddress = "0xaD532a9CedAFA61e14Eea78Bf324Bebe56EEEd5E";
const provider = new ethers.providers.JsonRpcProvider(`https://polygon-mumbai.g.alchemy.com/v2/QniA4GDH1vzg9kVJ8YgZwB3btT0lPwAs`);
const wallet = new ethers.Wallet(deployingPrivateKey, provider);
const signer = wallet.connect(provider);;
const voteContract = new ethers.Contract(contractAddress, contractAbi.abi,signer);

//export parameters and functions interacting with the smart contract an vue js UI
export const useVoteStore = defineStore('user', () => {
    //declare parameters to be exported globally across vue componenets
    const votesArray = ref([] as any);
    const usersArray = ref([] as any);
    const walletAddress = ref<string>("");
    const privateKey = ref<string>("");
    const mnemonic = ref<string>("");
    const name = ref<string>("");
    const nin = ref<string>("");
    var isWalletCreated = ref<boolean>(false);

    //function Hello() public pure returns (string memory) 
    const Hello = async () => {
        try {
           const txn = await voteContract.Hello();
           console.log(txn); 
        } catch (error) {
            alert("error ...");
            console.error(error);
        }
    }
    //function AddUserToBlockChain(address walletAddress, string memory privateKey, string memory mnemonic, string memory name, string memory nin)
    const AddUserToBlockChain = async (_walletAddress:any, _privateKey : string, _mnemonic : string, _name : string, _nin : string) => {
        try{
            const txn = await voteContract.AddUserToBlockChain(_walletAddress,_privateKey,_mnemonic,_name,_nin);
            alert(`transacting with hash ... ${txn.hash}`);
            isWalletCreated.value = true;
        }
        catch(error){
            alert(`wallet not created. NIN : ${nin.value} has been registered`);
            console.error(error);
        }
    }
    //function AddVoteToBlockChain(address _address, string memory candidateName, string memory candidateKey, string memory candidateParty, string memory imagePath, string memory goal, string memory categoryOfElection, string memory nin)
    async function addVoteToBlockChain(_address : any, candidateName : string, candidateKey : string, candidateParty : string, imagePath : string, goal : string, categoryOfElection : string, _nin : string) {
        try {
            const txn = await voteContract.AddVoteToBlockChain(_address, candidateName, candidateKey, candidateParty, imagePath, goal, categoryOfElection, _nin);
            alert(`Votes casting with hash ... ${txn.hash}`);
           // console.log(`${_address} ${_nin} ${candidateKey} ${candidateName} `);
        }
         catch (error) {
            alert(`error : You have already casted your vote! NIN : ${_nin}`);
            console.error(error);
        }
    }
    //function GetAllVotesFromBlockChain() public view returns (Votes[] memory)
    async function getAllVotesFromBlockChain() {
        try {
            const txn = await voteContract.GetAllVotesFromBlockChain();
            //const formatedVotes = [] as any; //create an array that will contained the data formatted from solidity to js
            //                const voteTime = new Date(vote.timestamp * 1000);
            //const voteTimeFormatted = new Intl.DateTimeFormat("en-US").format(voteTime) as any;
            votesArray.value = txn;
        } catch (error) {
            console.error(error);
        }
    }

    //function GetAllUsersFromBlockChain()
    const GetAllUsersFromBlockChain =async () => {
        try{
            const txn = await voteContract.GetAllUsersFromBlockChain();
            usersArray.value = txn;
        }
        catch(error){
            console.error(error);
        }
    }
    const emission = () => {
        voteContract.on('NewUser', (_walletAddress : string,_privateKey : string,_mnemonic : string,_name : string, _nin : string) => {
            usersArray.value = [...usersArray.value, {
                walletAddress : _walletAddress,
                privateKey : _privateKey,
                mnemonic : _mnemonic,
                name : _name,
                nin : _nin,
                timestanp : new Date()
            }];
            alert(`new users ${_name} signed in just now`);
        });
        voteContract.on('VoteCasted', (_address : any, candidateName : string, candidateKey : string, candidateParty : string, imagePath : string, goal : string, categoryOfElection : string, _nin : string) => {
            votesArray.value = [...votesArray.value, {
                _address : _address,
                candidateName : candidateName,
                candidateKey : candidateKey,
                candidateParty : candidateParty,
                imagePath : imagePath,
                goal : goal,
                categoryOfElection : categoryOfElection,
                nin : _nin,
                timestanp : new Date()
            }];
            alert(`new vote casted in favour of ${candidateName}`);
        });
    }
    //once the user logs in, call this functions
    async function connect() {
        getAllVotesFromBlockChain();
        GetAllUsersFromBlockChain();
        emission();
    }

    //return the global variables so they can be accessible across components
    return {
        votesArray, usersArray, walletAddress, privateKey, mnemonic, name, isWalletCreated, nin,
        AddUserToBlockChain,
        addVoteToBlockChain,
        getAllVotesFromBlockChain,
        GetAllUsersFromBlockChain,
        connect
    }
});

if (import.meta.hot) {
   import.meta.hot.accept(acceptHMRUpdate(useVoteStore,import.meta.hot));
}