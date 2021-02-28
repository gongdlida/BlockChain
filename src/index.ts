import * as CryptoJs from "crypto-js"

class Block {
  
  static calculateBlockHash = (
     index:number, 
     previousHash: string, 
     timestamp: number, 
     data: string):string => 
     CryptoJs.SHA256(index + previousHash + timestamp + data).toString();
  
  static validateStructure = (aBlock:Block) :boolean=> typeof aBlock.index === "number" && typeof aBlock.hash === "string" && typeof aBlock.previousHash === "string" && typeof aBlock.data ==="string"
    
  public index:number
  public hash : string
  public previousHash: string
  public data : string
  public timestamp: number
   constructor( 
    index : number,
    hash : string,
    previousHash : string,
    data: string, 
    timestamp: number
    
  ){
    this.index = index,
    this.hash = hash,
    this.previousHash = previousHash,
    this.data= data, 
    this.timestamp= timestamp

  }
}


const genesisBlock : Block = new Block(0,"2012", "" , "Hi",234)

let blockChain : Block[] = [genesisBlock];

const getBlockChain = () : Block[] => blockChain;
const getLatestBlock = (): Block => blockChain[blockChain.length-1];
const getNewTimestamp = () : number => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data:string) : Block => {
  const previousBlock:Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const newTimestamp: number = getNewTimestamp();
  const newHash : string = Block.calculateBlockHash(newIndex,previousBlock.hash,newTimestamp,data)

  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previousBlock.hash,
    data,
    newTimestamp
  );
addBlock(newBlock)
  return newBlock;

}

const getHashforBlock= (aBlock : Block) : string => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data)


const isBlockValid = (candidateBlcok : Block, previousBlock: Block) : boolean=>{
 if (!Block.validateStructure(candidateBlcok)) {
   return false
 } else if (previousBlock.index + 1 !== candidateBlcok.index){
   return false
 }else if (previousBlock.hash !== candidateBlcok.previousHash){
   return false
 } else if (getHashforBlock(candidateBlcok) !== candidateBlcok.hash){
   return false
 } else {
   return true
 }
}


const addBlock = (candidateBlcok : Block):void =>{
  if(isBlockValid(candidateBlcok, getLatestBlock())){
    blockChain.push(candidateBlcok)
  }
}

createNewBlock("first")
createNewBlock("second")
createNewBlock("third")
console.log(blockChain)
export {};

// Typescript needs "export" keyword. when it was not here, Typescript won't work
  
