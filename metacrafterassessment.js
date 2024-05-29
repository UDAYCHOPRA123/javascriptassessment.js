/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let bollywoodActors=[];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

function mintNFT (actorName,age,bestMovie,birthPlace) {
    const bollywood={
        actorName:actorName,
        age:age,
        bestMovie:bestMovie,
        birthPlace:birthPlace
    };
    bollywoodActors.push(bollywood);
    console.log("Minted NFT: "+ actorName);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()

function listNFTs () {
for (i=0;i<bollywoodActors.length;i++){
    console.log("***************************************");
    console.log("Actor Name: "+bollywoodActors[i].actorName+"\n");
    console.log("Age: "+bollywoodActors[i].age+"\n");
    console.log("Best Movie: "+bollywoodActors[i].bestMovie+"\n");
    console.log("Birth Place: "+bollywoodActors[i].birthPlace+"\n");
    console.log("***************************************");

}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return(bollywoodActors.length);

}

// call your functions below this line
mintNFT("Shahrukh Khan","58","Jawan","Delhi");
mintNFT("Salman Khan","59","Sultan","Mumbai");
mintNFT("Kartik Aaryan","33","Dhamaka","Chandigarh");
mintNFT("Varun Dhawan","38","Badlapur","Pune");



listNFTs();

console.log("Total Number of Enteries:  "+ getTotalSupply());


