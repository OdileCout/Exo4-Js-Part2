document.getElementById('reset').addEventListener('click', deleteFeild);
function deleteFeild(){
  document.getElementById('lastname').value = "";
  document.getElementById('firstname').value = "";
  document.getElementById('city').value = "";
}
