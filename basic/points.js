var groupObject3D = document.querySelector('#track1').object3D;
/*groupObject3D.children[2].position.set(100, 20, 30);
console.log(groupObject3D.children[2])

for (i=0; i < groupObject3D.children.length; i++){
    console.log(groupObject3D.children[i])
}*/

var pointlist = [
    (0, 1, 2),
    (4, 7, 3),
    (9, 3, 6)
]

function defaultTrack(){
    console.log("Ich funktioniere!")
    
}

function arTrack(){
    console.log("Ich funktioniere!")
    for (i=0; i < groupObject3D.children.length; i++){
        groupObject3D.children[i].position.set(100, 20, 30);
    }
}
/*
fs.writeFile('./indexdefault.html', newhtml, (err) => {
    // In case of a error throw err.
    if (err) throw err;
})*/