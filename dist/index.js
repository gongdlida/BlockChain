"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJs = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index,
            this.hash = hash,
            this.previousHash = previousHash,
            this.data = data,
            this.timestamp = timestamp;
    }
}
Block.calculateBlockHash = (index, previousHash, timestamp, data) => CryptoJs.SHA256(index + previousHash + timestamp + data).toString();
Block.validateStructure = (aBlock) => typeof aBlock.index === "number" && typeof aBlock.hash === "string" && typeof aBlock.previousHash === "string" && typeof aBlock.data === "string";
const genesisBlock = new Block(0, "2012", "", "Hi", 234);
let blockChain = [genesisBlock];
const getBlockChain = () => blockChain;
const getLatestBlock = () => blockChain[blockChain.length - 1];
const getNewTimestamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previousBlock = getLatestBlock();
    const newIndex = previousBlock.index + 1;
    const newTimestamp = getNewTimestamp();
    const newHash = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
    const newBlock = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
    addBlock(newBlock);
    return newBlock;
};
const getHashforBlock = (aBlock) => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data);
const isBlockValid = (candidateBlcok, previousBlock) => {
    if (!Block.validateStructure(candidateBlcok)) {
        return false;
    }
    else if (previousBlock.index + 1 !== candidateBlcok.index) {
        return false;
    }
    else if (previousBlock.hash !== candidateBlcok.previousHash) {
        return false;
    }
    else if (getHashforBlock(candidateBlcok) !== candidateBlcok.hash) {
        return false;
    }
    else {
        return true;
    }
};
const addBlock = (candidateBlcok) => {
    if (isBlockValid(candidateBlcok, getLatestBlock())) {
        blockChain.push(candidateBlcok);
    }
};
createNewBlock("first");
createNewBlock("second");
createNewBlock("third");
console.log(blockChain);
// Typescript needs "export" keyword. when it was not here, Typescript won't work
//# sourceMappingURL=index.js.map