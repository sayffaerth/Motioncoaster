// Example point list
/*var pointlist = [
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
]*/

var data = JSON.parse(localStorage["artrack"]);
console.log(data)
var points = []
for (d in data){
    points.push(data[d].split(" ").map(num => Number(num)))
}

var dist = 0
for (o=1; o<points.length; o++){
    dist += calculatedist(points[o-1], points[o])
}

var multiplicator = 100 / dist

var pointlist = []
for (p in points){
    pointlist.push(points[p].map(num => num*multiplicator))
}



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

function calculatedist(point1, point2){
    return Math.sqrt((point2[0]-point1[0])*(point2[0]-point1[0]) + (point2[1]-point1[1])*(point2[1]-point1[1]) + (point2[2]-point1[2])*(point2[2]-point1[2]));
}