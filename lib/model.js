import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function loadGLTFModel(
  scene,
  gltfPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()

    loader.load(
      gltfPath,
      gltf => {
        const obj = gltf.scene
        obj.name = 'computer'
        obj.position.y = 0
        obj.position.x = 0
        obj.scale.x = 2.5
        obj.scale.y = 2.5
        obj.scale.z= 2.5
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        obj.position.set(0, -2, 0)
        scene.add(obj)

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })

        resolve(obj)
      },
      undefined,
      function (error) {
        reject(error)
      }
    )
  })
}
