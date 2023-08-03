<template>
  <div ref="canvasContainer"></div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { FlakesTexture } from 'three/addons/textures/FlakesTexture.js';

export default {
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  mounted() {
    this.initScene();
    this.createPoints();
    this.initControls();
    this.initGUI();
    this.animate();
  },
  methods: {
    initScene() {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      this.renderer = new THREE.WebGLRenderer({ alpha: true , antialias: true});
      this.renderer.setSize(this.$refs.canvasContainer.clientWidth, 400);
      this.renderer.setClearColor(0x000000, 0);
      this.$refs.canvasContainer.appendChild(this.renderer.domElement);
    },
    createPoints() {
      const minVal = 0;
      const maxVal = 300000; // You need to determine the maximum value in your data
      const newMin = 0;
      const newMax = 15;
      const positions = [];

      for (const key in this.data.datasets) {
        const pointData = this.data.datasets[key];
        let setColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        let index = 0;
        for (const key in pointData.data) {
          const x = this.scaleValue(parseFloat(index), minVal, 500, newMin, newMax);
          const y = this.scaleValue(parseFloat(pointData.data[key]), minVal, maxVal, newMin, newMax); // this.scaleValue(parseFloat(pointData.data[key]), minVal, maxVal, newMin, newMax);
          const z = 0;
          const pointGeometry = new THREE.SphereGeometry( 1, 32, 16 );
          const normalMap3 = new THREE.CanvasTexture( new FlakesTexture() );
							normalMap3.wrapS = THREE.RepeatWrapping;
							normalMap3.wrapT = THREE.RepeatWrapping;
							normalMap3.repeat.x = 10;
							normalMap3.repeat.y = 6;
							normalMap3.anisotropy = 16;
          const pointMaterial = new THREE.MeshPhysicalMaterial( {
								clearcoat: 1.0,
								clearcoatRoughness: 0.1,
								metalness: 0.9,
								roughness: 0.5,
								color: setColor,
                normalMap: normalMap3,
								normalScale: new THREE.Vector2( 0.15, 0.15 )
							} );
          const point = new THREE.Mesh(pointGeometry, pointMaterial);
          positions.push(new THREE.Vector3(x, y, z));
          point.position.set(x, y, z);
          this.scene.add(point);
          index = index + 50;
        }
      }

      const pointsGeometry = new THREE.BufferGeometry().setFromPoints(positions);

      // Calculate the center of all points
      const center = new THREE.Vector3();
      positions.forEach((position) => {
        center.add(position);
      });
      center.divideScalar(positions.length);

      // Calculate the distance to fit all points within the frustum
      const boundingBox = new THREE.Box3().setFromPoints(positions);
      const boundingBoxSize = new THREE.Vector3();
      boundingBox.getSize(boundingBoxSize);
      const maxDim = Math.max(boundingBoxSize.x, boundingBoxSize.y, boundingBoxSize.z);
      const fov = this.camera.fov * (Math.PI / 180); // Convert FOV to radians
      const distance = Math.abs(maxDim / Math.tan(fov / 2));

      // Update camera position and lookAt
      this.camera.position.copy(center);
      this.camera.position.z += distance * 0.5; // Add some extra distance for a better view
      console.log(center);
      this.camera.lookAt(center);

      const pointMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff }); // Update color as needed
      const point = new THREE.Points(pointsGeometry, pointMaterial);
      this.scene.add(point);
      const axesHelper = new THREE.AxesHelper( 100 ); // x=red, y=green, z=blue
      this.scene.add( axesHelper );

      // const ambientLight = new THREE.AmbientLight( 0xeeeeee, 20 );
      // this.scene.add( ambientLight );
      const hemiLight = new THREE.HemisphereLight( 0xddeeff, 0x0f0e0d, 2 );
      hemiLight.position.set( this.scaleValue(60, 0, 60, 0, 1), this.scaleValue(50, 0, 50, 0, 1), this.scaleValue(70, 0, 70, 0, 1) );

      // hemiLight.target = center;
			const helper = new THREE.HemisphereLightHelper( hemiLight, 5 );
      this.scene.add( helper );
    },
    initControls() {
      // this.controls = new OrbitControls(this.camera, this.renderer.domElement);

      // // Customize the controls (optional)
      // this.controls.enableRotate = true;
      // this.controls.autoRotate = false;
      // this.controls.enableDamping = true;
      // this.controls.dampingFactor = 0.1;
    },
    initGUI() {
      const gui = new GUI();
      // Add camera position properties to the GUI
      const cameraFolder = gui.addFolder('Camera Position');
      cameraFolder.add(this.camera.position, 'x', -1000, 1000).step(10).name('Camera X').setValue(60);
      cameraFolder.add(this.camera.position, 'y', -1000, 1000).step(10).name('Camera Y').setValue(50);
      cameraFolder.add(this.camera.position, 'z', -1000, 1000).step(10).name('Camera Z').setValue(70);
      cameraFolder.add(this.camera.rotation, 'x', -Math.PI, Math.PI).step(0.1).name('Camera Rotate X').setValue(0);
      cameraFolder.add(this.camera.rotation, 'y', -Math.PI, Math.PI).step(0.1).name('Camera Rotate Y').setValue(0);
      cameraFolder.add(this.camera.rotation, 'z', -Math.PI, Math.PI).step(0.1).name('Camera Rotate Z').setValue(0);
      cameraFolder.open();

      //toggle points/axis
      const toggleFolder = gui.addFolder('Toggle');
      toggleFolder.add(this, 'togglePoints').name('Toggle Points');
      // toggleFolder.add(this, 'toggleAxis').name('Toggle Axis');
      cameraFolder.open();
    },
    togglePoints() {
      this.scene.traverse((child) => {
        if (child instanceof THREE.Points) {
          console.log(child);
          child.visible = !child.visible;
        }
      });
    },
    animate() {
      const timer = Date.now() * 0.00025;
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
    },
    scaleValue(value, min, max, newMin, newMax) {
      return Math.floor(((value - min) * (newMax - newMin)) / (max - min) + newMin);
    },
  },
};
</script>

<style>
canvas {
  display: block;
}
</style>
