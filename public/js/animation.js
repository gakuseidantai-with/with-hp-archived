function userAgent() {
  return (navigator.userAgent.indexOf("iPhone") > 0 && -1 == navigator.userAgent.indexOf("iPad")) ||
    navigator.userAgent.indexOf("iPod") > 0 ||
    navigator.userAgent.indexOf("Android") > 0
    ? "mobile"
    : "desktop";
}

$(function () {
  var visualElement = document.getElementById("visual"),
    perspectiveCamera,
    scene,
    group,
    webGLRenderer,
    loadingManager = new THREE.LoadingManager(),
    geometryList = [],
    particlePositionFittingImageListList = [],
    defaultParticlePositionListList = [],
    particlePositionListList = [],
    particleMeshList = [],
    particleMaterialList = [],
    particleImagePathList = ["/images/particle.png"],
    picturePathList = particleImagePathList.concat(["/images/visual.png"]),
    pictureDataList = [],
    animationList = ["rotateX", "rotateY", "zoomUp", "zoomOut"],
    particleTextureList = [],
    particlePositionRatio = "mobile" == userAgent() ? 1 : 1.5,
    dispersionRate = "mobile" == userAgent() ? 2 : 1.5,
    currentPictureIndex = -1,
    trajectoryList = [];
  initialize();

  function initialize() {
    loadingManager.onProgress = function (url, itemsLoaded, itemsTotal) {
      itemsLoaded == itemsTotal &&
        $(function () {
          (function () {
            const aspectRatio = visualElement.offsetWidth / visualElement.offsetHeight;
            group = new THREE.Group();
            scene = new THREE.Scene();
            scene.add(group);
            perspectiveCamera = new THREE.PerspectiveCamera(75, aspectRatio, 1, 2e3);
            perspectiveCamera.position.z = 1e3;
            if (
              ((function () {
                for (var i = 0; i < particleImagePathList.length; i++) {
                  for (
                    var j = 0,
                      geometry = new THREE.Geometry(),
                      defaultParticlePositionList = [],
                      particlePositionList = [],
                      n = 0;
                    j < pictureDataList.length;
                    j++
                  ) {
                    for (
                      var particlePositionFittingImageList = [], s = 0, h = 0;
                      h < pictureDataList[j].imgW / dispersionRate;
                      h += 2
                    )
                      for (var d = 0; d < pictureDataList[j].imgH / dispersionRate; d += 2) {
                        var c = 4 * (h * dispersionRate + d * dispersionRate * pictureDataList[j].imgW);
                        var f =
                          pictureDataList[j].imgPixelArray[c] ??
                          pictureDataList[j].imgPixelArray[c + 1] ??
                          pictureDataList[j].imgPixelArray[c + 2] ??
                          pictureDataList[j].imgPixelArray[c + 3];
                        const randRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
                        const weakColor = () => Math.floor(200 * randRange(0.4, 0.6)) + 55;
                        const strongColor = () => Math.floor(100 * randRange(0.3, 0.5)) + 155;
                        const particleRgbColor = {
                          r: strongColor(),
                          g: strongColor(),
                          b: weakColor(),
                        };
                        if (f > 0) {
                          s++;
                          const calcCenterOffsetDistance = () => Math.random() * pictureDataList[j].imgW + 200;
                          const calcDiamater = () => Math.random() * Math.PI * 2;
                          const initialParticlePosition = new THREE.Vector3(0, 0, 0);
                          const defaultParticlePosition = new THREE.Vector3(
                            calcCenterOffsetDistance() * Math.sin(calcDiamater()) * Math.cos(calcDiamater()),
                            calcCenterOffsetDistance() * Math.sin(calcDiamater()) * Math.sin(calcDiamater()),
                            calcCenterOffsetDistance() * Math.cos(calcDiamater())
                          );
                          const particlePosition = new THREE.Vector3(
                            calcCenterOffsetDistance() * Math.sin(calcDiamater()) * Math.cos(calcDiamater()),
                            calcCenterOffsetDistance() * Math.sin(calcDiamater()) * Math.sin(calcDiamater()),
                            calcCenterOffsetDistance() * Math.cos(calcDiamater())
                          );
                          const defaultParticlePositionFittingImage = new THREE.Vector3(
                            calcCenterOffsetDistance() * Math.sin(calcDiamater()) * Math.cos(calcDiamater()),
                            calcCenterOffsetDistance() * Math.sin(calcDiamater()) * Math.sin(calcDiamater()),
                            calcCenterOffsetDistance() * Math.cos(calcDiamater())
                          );
                          const particlePositionFittingImage = new THREE.Vector3(
                            (h * dispersionRate - pictureDataList[j].imgW / 2 + 2 * Math.random() - 1) *
                              particlePositionRatio,
                            -(d * dispersionRate - pictureDataList[j].imgH / 2 + 2 * Math.random() - 1) *
                              particlePositionRatio,
                            0
                          );

                          if (0 != Math.floor(20 * Math.random())) {
                            particlePositionFittingImageList.push(particlePositionFittingImage);
                          } else {
                            particlePositionFittingImageList.push(defaultParticlePositionFittingImage);
                          }

                          if (n < s) {
                            n++;
                            defaultParticlePositionList.push(defaultParticlePosition);
                            geometry.vertices.push(initialParticlePosition);
                            geometry.colors.push(
                              new THREE.Color(
                                "rgb(" +
                                  particleRgbColor.r +
                                  ", " +
                                  particleRgbColor.g +
                                  ", " +
                                  particleRgbColor.b +
                                  ")"
                              )
                            );
                            particlePositionList.push(particlePosition);
                          }
                        }
                      }
                    particlePositionFittingImageListList.push(particlePositionFittingImageList);
                  }
                  defaultParticlePositionListList.push(defaultParticlePositionList);
                  particlePositionListList.push(particlePositionList);
                  geometryList.push(geometry);
                  particleMaterialList[i] = new THREE.PointsMaterial({
                    size: 8,
                    map: particleTextureList[i],
                    depthTest: false,
                    transparent: true,
                    opacity: 1,
                    vertexColors: true,
                    overdraw: false,
                  });
                  particleMeshList[i] = new THREE.Points(geometryList[i], particleMaterialList[i]);
                  group.add(particleMeshList[i]);
                }
              })(),
              (webGLRenderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true,
              })))
            ) {
              const renderWidth = window.innerWidth;
              const renderHeight = window.innerHeight;
              webGLRenderer.setSize(renderWidth, renderHeight);
              webGLRenderer.setPixelRatio(window.devicePixelRatio);
              perspectiveCamera.aspect = renderWidth / renderHeight;
              perspectiveCamera.updateProjectionMatrix();
              webGLRenderer.setClearColor(0, 0);
              visualElement.appendChild(webGLRenderer.domElement);
              window.addEventListener("resize", resizeHandler, false);
              document.addEventListener("mousemove", mouseMoveHander, false);
              document.addEventListener("touchmove", touchMoveHandler, false);
              tickAnimation();
            }
          })();
          resetParticle();
          setInterval(function () {
            resetParticle();
          }, 1e4);
        });
    };
    for (var i = 0; i < picturePathList.length; ++i) {
      (function (i) {
        new THREE.ImageLoader(loadingManager).load(picturePathList[i], function (image) {
          if (i < particleImagePathList.length) {
            const particleTexture = new THREE.Texture(image);
            particleTexture.needsUpdate = true;
            particleTextureList[i] = particleTexture;
          } else {
            const canvas = document.createElement("canvas");
            canvas.width = image.width;
            canvas.height = image.height;

            const rendering2DContext = canvas.getContext("2d");
            rendering2DContext.drawImage(image, 0, 0);
            const imageBinary = rendering2DContext.getImageData(0, 0, image.width, image.height).data;

            pictureDataList.push({
              imgW: image.width,
              imgH: image.height,
              imgPixelArray: imageBinary,
            });
          }
        });
      })(i);
    }
  }
  function resizeHandler() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    webGLRenderer.setPixelRatio(window.devicePixelRatio);
    webGLRenderer.setSize(width, height);

    perspectiveCamera.aspect = width / height;
    perspectiveCamera.updateProjectionMatrix();
  }

  function mouseMoveHander(e) {
    e.preventDefault();
    const trajectory = new THREE.Vector2(
      (e.clientX / visualElement.offsetWidth) * 2 - 1,
      -(e.clientY / visualElement.offsetHeight) * 2 + 1
    );
    trajectoryList.push(trajectory);
    trajectoryList.length > 100 && trajectoryList.shift();
  }

  function touchMoveHandler(e) {
    e.preventDefault();
    const trajectory = new THREE.Vector2(
      (e.changedTouches[0].clientX / visualElement.offsetWidth) * 2 - 1,
      -(e.changedTouches[0].clientY / visualElement.offsetHeight) * 2 + 1
    );
    trajectoryList.push(trajectory);
    trajectoryList.length > 5 && trajectoryList.shift();
  }
  function resetParticle() {
    console.log("called resetParticle()");
    trajectoryList = [];

    const prevPictureIndex = currentPictureIndex;
    var nextPictureIndex = 0;
    currentPictureIndex = -1;
    moveParticle();
    nextPictureIndex = pictureDataList.length - 1 > prevPictureIndex ? prevPictureIndex + 1 : 0;
    setTimeout(function () {
      currentPictureIndex = nextPictureIndex;
      moveParticle();
    }, 1e3 + 5e2);
  }
  function moveParticle() {
    console.log("called moveParticle()");
    for (var i = 0; i < particleImagePathList.length; i++) {
      for (var j = 0; j < geometryList[i].vertices.length; ++j) {
        if (-1 == currentPictureIndex) {
          particlePositionListList[i][j].x = defaultParticlePositionListList[i][j].x;
          particlePositionListList[i][j].y = defaultParticlePositionListList[i][j].y;
          particlePositionListList[i][j].z = defaultParticlePositionListList[i][j].z;
        } else if (particlePositionFittingImageListList[currentPictureIndex][j]) {
          particlePositionListList[i][j].x = particlePositionFittingImageListList[currentPictureIndex][j].x;
          particlePositionListList[i][j].y = particlePositionFittingImageListList[currentPictureIndex][j].y;
          particlePositionListList[i][j].z = particlePositionFittingImageListList[currentPictureIndex][j].z;
        } else {
          particlePositionListList[i][j].x = defaultParticlePositionListList[i][j].x;
          particlePositionListList[i][j].y = defaultParticlePositionListList[i][j].y;
          particlePositionListList[i][j].z = defaultParticlePositionListList[i][j].z;
        }
      }
    }
  }
  function tickAnimation() {
    console.log("called tickAnimation()");
    requestAnimationFrame(tickAnimation);
    (function () {
      (group.position.x = 0),
        (group.position.y = "mobile" == userAgent() ? 120 : 40),
        -1 == currentPictureIndex
          ? (trajectoryList.length > 0 &&
              ((perspectiveCamera.position.x +=
                0.04 * (500 * trajectoryList[trajectoryList.length - 1].x - perspectiveCamera.position.x)),
              (perspectiveCamera.position.y +=
                0.04 * (500 * trajectoryList[trajectoryList.length - 1].y - perspectiveCamera.position.y))),
            perspectiveCamera.lookAt(scene.position))
          : (trajectoryList.length > 0 &&
              ((perspectiveCamera.position.x +=
                0.01 * (500 * trajectoryList[trajectoryList.length - 1].x - perspectiveCamera.position.x)),
              (perspectiveCamera.position.y +=
                0.01 * (500 * trajectoryList[trajectoryList.length - 1].y - perspectiveCamera.position.y))),
            perspectiveCamera.lookAt(scene.position));
      for (var e = 0; e < particleImagePathList.length; e++) {
        (geometryList[e].verticesNeedUpdate = true), (geometryList[e].colorsNeedUpdate = true);
        for (var t = 0; t < geometryList[e].vertices.length; ++t) {
          var i = particlePositionListList[e][t].x,
            particlePositionList = particlePositionListList[e][t].y,
            n = particlePositionListList[e][t].z;
          Math.abs(i - geometryList[e].vertices[t].x) > 1 &&
            (geometryList[e].vertices[t].x += 0.06 * (i - geometryList[e].vertices[t].x)),
            Math.abs(particlePositionList - geometryList[e].vertices[t].y) > 1 &&
              (geometryList[e].vertices[t].y += 0.06 * (particlePositionList - geometryList[e].vertices[t].y)),
            Math.abs(n - geometryList[e].vertices[t].z) > 1 &&
              (geometryList[e].vertices[t].z += 0.06 * (n - geometryList[e].vertices[t].z));
        }
      }
      if (-1 == currentPictureIndex) {
        Math.abs(group.rotation.x) > 0 && (group.rotation.x += 0.06 * -group.rotation.x);
        Math.abs(group.rotation.y) > 0 && (group.rotation.y += 0.06 * -group.rotation.y);
        Math.abs(perspectiveCamera.position.z) < 1e3 &&
          (perspectiveCamera.position.z += 0.06 * (1e3 - perspectiveCamera.position.z));
        Math.abs(perspectiveCamera.position.z) > 1e3 &&
          (perspectiveCamera.position.z += 0.06 * (1e3 - perspectiveCamera.position.z));
      } else {
        switch (animationList[currentPictureIndex]) {
          case "rotateX":
            group.rotation.x += 6e-4;
            break;
          case "rotateY":
            group.rotation.y += 6e-4;
            break;
          case "zoomUp":
            perspectiveCamera.position.z += -0.6;
            break;
          case "zoomOut":
            perspectiveCamera.position.z += 0.6;
        }
      }
      webGLRenderer.render(scene, perspectiveCamera);
    })();
  }
});
