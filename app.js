// console.log(firebase);
function todo() {
    //making task node
    if (document.getElementById('task').value == "") {

        alert('Type Todos!')
        return false;

    } else {

        var val = document.getElementById('task');
        var list = document.createElement('li');
        var text = document.createTextNode(val.value);
        list.appendChild(text);
        //deleting item
        var del = document.createElement('button');
        var delTxt = document.createTextNode('DELETE');
        del.setAttribute('class', 'btn')
        del.setAttribute('onclick', 'delITEM(this)')

        del.appendChild(delTxt);
        list.appendChild(del);
        var messages = document.getElementById("text_area");
        messages.appendChild(list)
        val.value = "";
    }

}
function delITEM(p) {
    p.parentNode.remove();
}
//delete all nodes by pressing delete all button
function delAll() {
    text_area.innerHTML = "";
}
