
//scene
var scene = new THREE.Scene(); 

//camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight);

//render
var renderer = new THREE.WebGLRenderer();
rendered.setSize(window.innerWidth/window.innerHeight);
document.body.appendChild(renderer.domElement);

renderer.render(scene, camera);