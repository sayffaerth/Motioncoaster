//var groupObject3D = document.querySelector('#track1').object3D;
//console.log(groupObject3D)
/*groupObject3D.children[2].position.set(100, 20, 30);
console.log(groupObject3D.children[2])

for (i=0; i < groupObject3D.children.length; i++){
    console.log(groupObject3D.children[i])
}*/

var pointlist = [
    //(0, 1, 2),
    (4, 7, 3)
    //(9, 3, 6)
]

var groupObject3D_1 = document.querySelector('#track1');
var groupObject3D_2 = document.querySelector('#track2');
var groupObject3D_s = document.querySelector('#blacksphere');
//for (i=0; i < pointlist.length; i++){
    var entityEl_1 = document.createElement('a-curve-point')
    var entityEl_2 = document.createElement('a-curve-point')
    entityEl_1.setAttribute('position', {x: 2, y: 4, z: 1})
    entityEl_2.setAttribute('position', {x: 2, y: 4+0.2, z: 1})
    //entityEl.setAttribute('position', {x: pointlist[i][0], y: pointlist[i][1], z: pointlist[i][2]})
    groupObject3D_1.appendChild(entityEl_1);
    groupObject3D_2.appendChild(entityEl_2);

    var endSphere = document.createElement('a-sphere');
    endSphere.setAttribute('position', {x: 2, y: 4, z: 1});
    endSphere.setAttribute('radius', 0.5)
    endSphere.setAttribute('color', "black")
    groupObject3D_s.appendChild(endSphere);
//}
/*
var groupObject3D = document.querySelector('#track1');
var entityEl = document.createElement('a-curve-point');
entityEl.setAttribute('position', {x: -2, y: 1, z: 3});
console.log(entityEl)

*/

/*
fs.writeFile('./indexdefault.html', newhtml, (err) => {
    // In case of a error throw err.
    if (err) throw err;
})*/