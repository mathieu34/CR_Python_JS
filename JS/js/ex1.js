var entity;
var entity2;
entity=10;
entity2="lol";
function compare(entity,entity2){
	if (typeof (entity) === typeof (entity2)){
	console.log("types identitques");
	}else{
	console.log("types différents");
}
}
compare(entity,entity2);