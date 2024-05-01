import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let modelsCarousselList = [];

renderModelsList();
renderCaroussel();

function renderCaroussel() {
   const canvasCaroussel = document.querySelector("#canvas-caroussel");

   /*--------------------
   Renderer
   --------------------*/
   const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#canvas-caroussel"),
      antialias: true
   });
   renderer.setSize(window.innerWidth, window.innerHeight);

   /*--------------------
   Camera & Scene
   --------------------*/
   const camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight);
   camera.position.set(0, 20, 300);
   const scene = new THREE.Scene();
   scene.background = new THREE.Color(0xe0e0e0);

   /*--------------------
   Light
   --------------------*/
   const ambientLight = new THREE.AmbientLight(0xdddddd, 0.5);
   const directionalLight = new THREE.DirectionalLight(0xdddddd, 0.5);

   directionalLight.position.set(0, 20, 75);
   camera.position.set(0, 20, 75);
   scene.add(ambientLight);
   scene.add(directionalLight);

   renderer.shadowMap.enabled = true;
   renderer.shadowMap.type = THREE.PCFSoftShadowMap;

   /*--------------------
   Init
   --------------------*/
   const meshes = [];
   const init = () => {

      const loadingManager = new THREE.LoadingManager();

      const progressBarContainer = canvasCaroussel.previousElementSibling;

      loadingManager.onLoad = function () {
         console.log("test")
         progressBarContainer.classList.add("hidden");
      };

      loadingManager.onError = function (url) {
         console.log('There was an error loading ' + url);
      };

      const loader = new OBJLoader(loadingManager);

      for (let i = 0; i < modelsCarousselList.length; i++) {
         const group = new THREE.Group();
         scene.add(group);

         loader.load(modelsCarousselList[i].model_3d, function (object) {
            object.castShadow = true;
            object.receiveShadow = true;
            group.add(object);
         });

         group.position.x = -3 + i * 0.7;
         group.position.y = 6;

         meshes.push(group);
      }

      const geoPlane = new THREE.PlaneGeometry(200, 200);
      const mat3 = new THREE.MeshPhongMaterial({ color: 0xffffff });
      const plane = new THREE.Mesh(geoPlane, mat3);
      plane.rotation.x = -Math.PI / 2;
      plane.position.y = -20;
      plane.receiveShadow = true;
      scene.add(plane);
   };
   init();

   /*--------------------
   Renderer
   --------------------*/
   const render = () => {
      requestAnimationFrame(render);
      renderer.render(scene, camera);
      scene.rotation.y += 0.005;
   };
   render();
}


function init3dModel(projectName, model) {
   const canvasItem = document.querySelector(`.model_3d_item#${projectName} canvas`);

   /*--------------------
   Renderer
   --------------------*/
   const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector(`.model_3d_item#${projectName} canvas`),
      antialias: true
   });
   renderer.setSize(window.innerWidth, window.innerHeight);

   /*--------------------
   Camera & Scene
   --------------------*/
   const camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight);
   camera.position.set(0, 20, 75);
   const scene = new THREE.Scene();
   scene.background = new THREE.Color(0xe0e0e0);

   /*--------------------
   Light
   --------------------*/
   const ambientLight = new THREE.AmbientLight(0xdddddd, 0.5);
   const directionalLight = new THREE.DirectionalLight(0xdddddd, 0.5);

   directionalLight.position.set(0, 20, 75);
   camera.position.set(0, 20, 75);
   scene.add(ambientLight);
   scene.add(directionalLight);

   renderer.shadowMap.enabled = true;
   renderer.shadowMap.type = THREE.PCFSoftShadowMap;

   /*--------------------
   Init
   --------------------*/
   const init = () => {

      const loadingManager = new THREE.LoadingManager();

      const progressBarContainer = canvasItem.previousElementSibling;

      loadingManager.onLoad = function () {
         progressBarContainer.classList.add("hidden");
      };

      loadingManager.onError = function (url) {
         console.log('There was an error loading ' + url);
      };

      const loader = new OBJLoader(loadingManager);

      loader.load(model, function (object) {
         object.castShadow = true;
         object.receiveShadow = true;
         scene.add(object);
      });

      const geoPlane = new THREE.PlaneGeometry(200, 200);
      const mat3 = new THREE.MeshPhongMaterial({ color: 0xffffff });
      const plane = new THREE.Mesh(geoPlane, mat3);
      plane.rotation.x = -Math.PI / 2;
      plane.position.y = -20;
      plane.receiveShadow = true;
      scene.add(plane);
   };
   init();

   /*--------------------
   Renderer
   --------------------*/
   loop();
   function loop() {
      requestAnimationFrame(loop);
      scene.rotation.y += 0.005;
      renderer.render(scene, camera);
   }
}


function renderModelsList() {
   const listWrapper = document.querySelector("#models_3d_list");
   listWrapper.innerHTML = ``;
   Projects.forEach(project => {
      if (project.isDownloadable) {
         listWrapper.innerHTML += `<div class="model_3d_item" id="${project.name}">
            <div class="model_item_info">
               <p>${project.name}</p>
               <a href="${project.model_3d}" download="${project.name}.obj">
                  <img src="../assets/icons/download.svg" id="btn-download" />
               </a>
            </div>
            <div class="progress-bar-container">
                <label>Loading...</label>
            </div>
            <canvas id="canvas_${project.name}"></canvas>
         </div>`;
         modelsCarousselList.push(project);
         init3dModel(project.name, project.model_3d);
      }
   })
}