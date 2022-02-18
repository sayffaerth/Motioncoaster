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

// Source: https://stackoverflow.com/questions/19706046/how-to-read-an-external-local-json-file-in-javascript
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("./testpoint.json", function(text){
    var data = JSON.parse(text);
    var pointlist = []
    for (d in data){
        pointlist.push(data[d].split(" ").map(num => Number(num)))
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

});