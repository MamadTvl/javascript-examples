var startTime;

//suppose this function request some data from an api endpoint or database and print it
const print = (str, ms) => {
	return new Promise((resolve) => {
		console.log(`we will print "${str}", in ${ms} ms`, new Date() - startTime);
		setTimeout(() => {
			console.log(str, new Date() - startTime);
			resolve();
			},ms);
	})	
}

const usingPromiseAll = async () => {
	startTime = new Date();
	await Promise.all([print("1", 3000), print("2", 1000), print("3", 2000)]);
	console.log("job is Done in ", new Date() - startTime, "ms");
}


const justUsingAsyncAwait = async () => {
	startTime = new Date();
	await print("1", 3000);
	await print("2", 1000);
	await print("3", 2000);
	console.log("job is Done in ", new Date() - startTime, "ms");
}


// comment one of these functions to see what happen
usingPromiseAll();
// justUsingAsyncAwait();

