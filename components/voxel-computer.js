import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'
import { useColorModeValue } from '@chakra-ui/react'
import { ComputerSpinner, ComputerContainer } from './voxel-computer-loader'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const VoxelComputer = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const refRenderer = useRef()
  const pointLightColor = useColorModeValue('orange', 'purple')
  console.log(pointLightColor)


  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer
    if (container) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })

      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)

      refRenderer.current = renderer

      const scene = new THREE.Scene()

      const initialCameraPosition = new THREE.Vector3(
        20 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI)
      )

      const camera = new THREE.PerspectiveCamera(
        75,
        scW / scH,
        0.1,
        1000
      )
      
      camera.position.copy(initialCameraPosition)

      const pointLight = new THREE.PointLight(pointLightColor, 2, 100)
      pointLight.position.set(2,7,0)
      scene.add(pointLight)

      const ambientLight = new THREE.AmbientLight(0xcccccc, 0.5)
      scene.add(ambientLight)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.autoRotateSpeed = -2

      loadGLTFModel(scene, '/desk_and_pc.glb', {
        receiveShadow: false,
        castShadow: false
      }).then(() => {
        animate()
        setLoading(false)
      })

      let req = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

          scene.rotation.y = 0.5 * rotSpeed
        } else {
          controls.update()
        }

        renderer.render(scene, camera)
      }

      return () => {
        cancelAnimationFrame(req)
        renderer.domElement.remove()
        renderer.dispose()
      }
    }
  }, [pointLightColor])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [handleWindowResize])

  return (
    <ComputerContainer ref={refContainer}>{loading && <ComputerSpinner />}</ComputerContainer>
  )
}

export default VoxelComputer
