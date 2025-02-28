//your JS code here. If required.
const selectElement=document.getElementById("colorSelect");
const removeBtn=document.querySelector("input[type='button']");

removeBtn.addEventListener('click',()=>{
	const selectedIndex=selectElement.selectedIndex;
	if(selectedIndex!=-1)
	selectElement.remove(selectedIndex);
})