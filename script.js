	
	//Exercise 1: Simple If/Else Statement
	//Instructions
	//Create 2 variables, x and y. Each of them should have a different numeric value.
	//Write an if/else statement that checks which number is bigger.
	//Example :

	//let x = 5;
	//let y = 2;

	//You should display:
	//x is the biggest number

	// let x = 34
	// let y = 100

	// if (x>y){
	// 	console.log(`x is the bigger number`)
	// }

	// else{
	// 	console.log(`y is the bigger number`)
	// }


//Modulo % 

//Exercise 2: Chihuahua
// let newDog = "Chihuahua";
// console.log(newDog.length)
// console.log(newDog.toLowerCase())
// console.log(newDog.toUpperCase())

// if (newDog="Chihuahua"){
// 	console.log("I love Chihuahuas, its my favorite dog breed")
// }
// else{
// 	console.log("I dont care, I prefer cats")
// }

//Exercise 3: Even Or Odd

// number= prompt("Choose a number")
// if(number%2==0){
// 	console.log(`${number} is an even number.`)
// }
// else{
// 	console.log(`${number} is an odd number.`)
// }

//Exercise 4: Group Chat
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]


//If there is no users (the users array is empty), console.log “no one is online”

// switch(users.length<=0){
// 	console.log(`no one is online`)

// 	users.length==1{
// 		console.log(users[0] + "is online")
// 	}
// 	break;
// 	users.length==2{
// 		console.log(`${users[0]} and ${users[1]} are online`)
// 	}
// 	break;
// 	users.length>2{
// 		console.log(`${users[0]}, ${users[1]} and ${users.length-2} more are online`}
// 	}
// }
if (users.length<=0){
	console.log(`no one is online`)
}
else if (users.length==1){
	console.log(users[0] + "is online")}

	else if (users.length==2){
		console.log(`${users[0]} and ${users[1]} are online`)}

		else{ console.log(`${users[0]}, ${users[1]} and ${users.length-2} more are online`)}

