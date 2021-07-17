const scene = new THREE.Scene();

const light = new THREE.AmbientLight(0xFFFFFF, 0.5);
scene.add(light);

const light1 = new THREE.PointLight(0xFFFFFF, 0.5);
scene.add(light1);

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry( 100, 100, 100 );
const material = new THREE.MeshLambertMaterial({color: 0xF3FFE2} );
const cube = new THREE.Mesh( geometry, material );
cube.position.set(0,0,-200);
scene.add( cube );

camera.position.z = 250; 

function animate(){
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
    renderer.render(scene, camera);
}

animate();