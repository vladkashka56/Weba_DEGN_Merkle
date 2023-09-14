const {MerkleTree} = require('merkletreejs');
const keccak256 = require('keccak256');

let whitelistAddresses = 
[
    "0x6eeb3b1c76d796dc92096f7a1879c781be511e11_23",
    "0x5c6334be30054882bb6803448f141097740744a6_47",
    "0x1add41d2e704e835b7269d677c09ec4d7ec56a5e_1",
    "0xf2aee5841dac5dda9992f0b88460b8f2804fa07b_1"
];






const leafNodes = whitelistAddresses.map(addr => keccak256(Buffer.from(addr)));
const merkleTree = new MerkleTree(leafNodes, keccak256, {sortPairs: true});

const claimingAddress = keccak256(Buffer.from("0x5c6334be30054882bb6803448f141097740744a6_47"));
// const rootHash = merkleTree.getRoot();
const hexProof = merkleTree.getHexProof(claimingAddress);

// console.log(rootHash.toString('hex'))
console.log("hexproof:", hexProof)

console.log("claim addr:", Buffer.from("0x5c6334be30054882bb6803448f141097740744a6_47").toString('hex'))
console.log("claim addr keccak:", claimingAddress.toString('hex'))

const rootHash = "0x3293ed32085e6c32ecf54755fd1fe045b12f9048f6b7d80e4efc8e09d2a68f6b";

// const claimingAddress = keccak256("0xF05a15c929652adFa934DbB407cD81381c3a1684")

// const hexProof = merkleTree.getHexProof(claimingAddress);

console.log(merkleTree.verify(hexProof, claimingAddress, rootHash));




