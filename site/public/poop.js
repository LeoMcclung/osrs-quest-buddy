function goshitonyourself(){
	var username= getUsername("username");
	if(username === "bane"){
		alert("youre cool bro");
	}
	else {
		alert("you suck douche");
	}
}
function getUsername(msg){
	return prompt(msg);
}