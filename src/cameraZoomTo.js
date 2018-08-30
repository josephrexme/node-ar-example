import {
  Box3,
  Vector3
} from "three";

function getDistance(camera, object) {
  var box = new Box3();
  var size = new Vector3();

  box.setFromObject(object);
  box.getSize(size);

  var width = size.x, //helper.scale.x,
    height = size.y; //helper.scale.y;

  // Set camera distance
  var vFOV = camera.fov * Math.PI / 180,
    ratio = 2 * Math.tan(vFOV / 2),
    screen = ratio * camera.aspect, //( renderer.domElement.width / renderer.domElement.height ),
    size = Math.max(height, width),
    distance = size / screen + box.max.z / screen * 1.25;

  //     console.log( distance, 'y', (size/screen) + (box.max.y / screen), 'x', (size/screen) + (box.max.x / screen)  );

  return distance;
};

/* //////////////////////////////////////// */

function cameraZoomTo(camera, object) {
  if (!object) {
    return;
  }

  var distance = getDistance(camera, object);

  camera.position.z = distance;
};

export default cameraZoomTo;
export {
  cameraZoomTo,
  getDistance
}
