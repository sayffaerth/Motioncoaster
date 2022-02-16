// Example point list
var pointlist = [
    [-2, 1, -3],
    [0, 0, -3],
    [2, 1, -5],
    [5, 1, -3],
    [5, 1, -5],
    [5, 0, -9],
    [0, 0,-13],
    [-1, -1, -9],
    [0, 1, 2],
    [4, 7, 3],
    [9, 3, 6]
]

// Get the trees of the tracks and black sphere
var groupObject3D_1 = document.querySelector('#track1');
var groupObject3D_2 = document.querySelector('#track2');
var groupObject3D_s = document.querySelector('#blacksphere');

// Iterate through the point list to make driving and track
for (i=0; i < pointlist.length; i++){
    window["El_1"+i] = document.createElement('a-curve-point')
    window["El_2"+i] = document.createElement('a-curve-point')
    window["El_1"+i].setAttribute('position', {x: pointlist[i][0], y: pointlist[i][1], z: pointlist[i][2]})
    window["El_2"+i].setAttribute('position', {x: pointlist[i][0], y: pointlist[i][1]+0.2, z: pointlist[i][2]})
    groupObject3D_1.appendChild(window["El_1"+i])
    groupObject3D_2.appendChild(window["El_2"+i])

    //var entityEl_1 = document.createElement('a-curve-point')
    //var entityEl_2 = document.createElement('a-curve-point')
    //entityEl_1.setAttribute('position', {x: 2, y: 4, z: 1})
    //entityEl_2.setAttribute('position', {x: 2, y: 4+0.2, z: 1})
    //groupObject3D_1.appendChild(entityEl_1);
    //groupObject3D_2.appendChild(entityEl_2); 
}

// Place black sphere at the start
var startSphere = document.createElement('a-sphere');
startSphere.setAttribute('position', {x: pointlist[0][0], y: pointlist[0][1], z: pointlist[0][2]});
startSphere.setAttribute('radius', 0.5)
startSphere.setAttribute('color', "black")
groupObject3D_s.appendChild(startSphere);

// Place black sphere at the end
var endSphere = document.createElement('a-sphere');
endSphere.setAttribute('position', {x: pointlist[pointlist.length-1][0], y: pointlist[pointlist.length-1][1], z: pointlist[pointlist.length-1][2]});
endSphere.setAttribute('radius', 0.5)
endSphere.setAttribute('color', "black")
groupObject3D_s.appendChild(endSphere);

//var speed = document.querySelector('#speed');
//speed.setAttribute('alongpath', {curve: '#track2', dur: 500, rotate: true, loop: true});