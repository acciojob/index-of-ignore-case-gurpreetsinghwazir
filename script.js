function indexOfIgnoreCase(s1, s2) {
	let s1Low = s1.toLowerCase();
    let s2Low = s2.toLowerCase();	
    let text = s1Low.indexOf(s2Low);
    console.log(text);

	
}

// Please do not change the code below
 const s1 = prompt("Enter s1:");
 const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
