

message = "Hello World"

function toggleNavBar(){
    document.getElementById('navbar-container').classList.toggle("hidden");
}
function createObject(object, variableName){
    let execString = variableName + " = object"
    console.log("Running '" + execString + "'");
    eval(execString)
}

function showX(){
    document.getElementById('show-content').innerText = pyscript.runtime.globals.get('x')
    console.log(`In Python right now, x = ${pyscript.runtime.globals.get('x')}`)
}
