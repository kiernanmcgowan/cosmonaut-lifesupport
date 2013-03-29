module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';\n',
        stripBanners: true
      },
      dist: {
        //src: ['three.js/build/three.js', 'threex/threex.domevent.js', 'threex/threex.domevent.object3d.js', 'Physijs/physi.js'],
        src: [
          // three's build system
          'three.js/src/Three.js',
          'three.js/src/math/Color.js',
          'three.js/src/math/Quaternion.js',
          'three.js/src/math/Vector2.js',
          'three.js/src/math/Vector3.js',
          'three.js/src/math/Vector4.js',
          'three.js/src/math/Matrix3.js',
          'three.js/src/math/Matrix4.js',
          'three.js/src/math/Frustum.js',
          'three.js/src/math/Math.js',
          'three.js/src/math/Vertex.js',
          'three.js/src/math/UV.js',
          'three.js/src/math/Spline.js',
          'three.js/src/math/Box2.js',
          'three.js/src/math/Box3.js',
          'three.js/src/math/Triangle.js',
          'three.js/src/math/Sphere.js',
          'three.js/src/math/Plane.js',
          'three.js/src/math/Ray.js',
          'three.js/src/core/Clock.js',
          'three.js/src/core/EventDispatcher.js',
          'three.js/src/core/Raycaster.js',
          'three.js/src/core/Object3D.js',
          'three.js/src/core/Projector.js',
          'three.js/src/core/Face3.js',
          'three.js/src/core/Face4.js',
          'three.js/src/core/Geometry.js',
          'three.js/src/core/BufferGeometry.js',
          'three.js/src/cameras/Camera.js',
          'three.js/src/cameras/OrthographicCamera.js',
          'three.js/src/cameras/PerspectiveCamera.js',
          'three.js/src/lights/Light.js',
          'three.js/src/lights/AmbientLight.js',
          'three.js/src/lights/DirectionalLight.js',
          'three.js/src/lights/HemisphereLight.js',
          'three.js/src/lights/PointLight.js',
          'three.js/src/lights/SpotLight.js',
          'three.js/src/loaders/Loader.js',
          'three.js/src/loaders/ImageLoader.js',
          'three.js/src/loaders/JSONLoader.js',
          'three.js/src/loaders/SceneLoader.js',
          'three.js/src/loaders/TextureLoader.js',
          'three.js/src/materials/Material.js',
          'three.js/src/materials/LineBasicMaterial.js',
          'three.js/src/materials/LineDashedMaterial.js',
          'three.js/src/materials/MeshBasicMaterial.js',
          'three.js/src/materials/MeshLambertMaterial.js',
          'three.js/src/materials/MeshPhongMaterial.js',
          'three.js/src/materials/MeshDepthMaterial.js',
          'three.js/src/materials/MeshNormalMaterial.js',
          'three.js/src/materials/MeshFaceMaterial.js',
          'three.js/src/materials/ParticleBasicMaterial.js',
          'three.js/src/materials/ShaderMaterial.js',
          'three.js/src/materials/SpriteMaterial.js',
          'three.js/src/textures/Texture.js',
          'three.js/src/textures/CompressedTexture.js',
          'three.js/src/textures/DataTexture.js',
          'three.js/src/objects/Particle.js',
          'three.js/src/objects/ParticleSystem.js',
          'three.js/src/objects/Line.js',
          'three.js/src/objects/Mesh.js',
          'three.js/src/objects/Bone.js',
          'three.js/src/objects/SkinnedMesh.js',
          'three.js/src/objects/MorphAnimMesh.js',
          'three.js/src/objects/Ribbon.js',
          'three.js/src/objects/LOD.js',
          'three.js/src/objects/Sprite.js',
          'three.js/src/scenes/Scene.js',
          'three.js/src/scenes/Fog.js',
          'three.js/src/scenes/FogExp2.js',
          'three.js/src/renderers/WebGLShaders.js',
          'three.js/src/renderers/WebGLRenderer.js',
          'three.js/src/renderers/WebGLRenderTarget.js',
          'three.js/src/renderers/WebGLRenderTargetCube.js',
          'three.js/src/renderers/renderables/RenderableVertex.js',
          'three.js/src/renderers/renderables/RenderableFace3.js',
          'three.js/src/renderers/renderables/RenderableFace4.js',
          'three.js/src/renderers/renderables/RenderableObject.js',
          'three.js/src/renderers/renderables/RenderableParticle.js',
          'three.js/src/renderers/renderables/RenderableLine.js',
          'three.js/src/extras/core/Gyroscope.js',
          'three.js/src/extras/helpers/CameraHelper.js',
          'three.js/src/extras/helpers/DirectionalLightHelper.js',
          'three.js/src/extras/helpers/HemisphereLightHelper.js',
          'three.js/src/extras/helpers/PointLightHelper.js',
          'three.js/src/extras/helpers/SpotLightHelper.js',
          'three.js/src/extras/objects/LensFlare.js',
          'three.js/src/extras/objects/ImmediateRenderObject.js',
          'three.js/src/extras/renderers/plugins/LensFlarePlugin.js',
          'three.js/src/extras/renderers/plugins/ShadowMapPlugin.js',
          'three.js/src/extras/renderers/plugins/SpritePlugin.js',
          'three.js/src/extras/shaders/ShaderFlares.js',
          'three.js/src/extras/shaders/ShaderSprite.js',
          // extras
          'three.js/src/extras/GeometryUtils.js',
          'three.js/src/extras/ImageUtils.js',
          'three.js/src/extras/SceneUtils.js',
          'three.js/src/extras/FontUtils.js',
          'three.js/src/extras/core/Curve.js',
          'three.js/src/extras/core/CurvePath.js',
          'three.js/src/extras/core/Gyroscope.js',
          'three.js/src/extras/core/Path.js',
          'three.js/src/extras/core/Shape.js',
          'three.js/src/extras/animation/AnimationHandler.js',
          'three.js/src/extras/animation/Animation.js',
          'three.js/src/extras/animation/KeyFrameAnimation.js',
          'three.js/src/extras/cameras/CubeCamera.js',
          'three.js/src/extras/cameras/CombinedCamera.js',
          'three.js/src/extras/geometries/CircleGeometry.js',
          'three.js/src/extras/geometries/CubeGeometry.js',
          'three.js/src/extras/geometries/CylinderGeometry.js',
          'three.js/src/extras/geometries/ExtrudeGeometry.js',
          'three.js/src/extras/geometries/ShapeGeometry.js',
          'three.js/src/extras/geometries/LatheGeometry.js',
          'three.js/src/extras/geometries/PlaneGeometry.js',
          'three.js/src/extras/geometries/RingGeometry.js',
          'three.js/src/extras/geometries/SphereGeometry.js',
          'three.js/src/extras/geometries/TextGeometry.js',
          'three.js/src/extras/geometries/TorusGeometry.js',
          'three.js/src/extras/geometries/TorusKnotGeometry.js',
          'three.js/src/extras/geometries/TubeGeometry.js',
          'three.js/src/extras/geometries/PolyhedronGeometry.js',
          'three.js/src/extras/geometries/IcosahedronGeometry.js',
          'three.js/src/extras/geometries/OctahedronGeometry.js',
          'three.js/src/extras/geometries/TetrahedronGeometry.js',
          'three.js/src/extras/geometries/ParametricGeometry.js',
          'three.js/src/extras/geometries/ConvexGeometry.js',
          'three.js/src/extras/helpers/AxisHelper.js',
          'three.js/src/extras/helpers/ArrowHelper.js',
          'three.js/src/extras/helpers/CameraHelper.js',
          'three.js/src/extras/helpers/DirectionalLightHelper.js',
          'three.js/src/extras/helpers/GridHelper.js',
          'three.js/src/extras/helpers/HemisphereLightHelper.js',
          'three.js/src/extras/helpers/PointLightHelper.js',
          'three.js/src/extras/helpers/SpotLightHelper.js',
          'three.js/src/extras/objects/ImmediateRenderObject.js',
          'three.js/src/extras/objects/LensFlare.js',
          'three.js/src/extras/objects/MorphBlendMesh.js',
          'three.js/src/extras/renderers/plugins/LensFlarePlugin.js',
          'three.js/src/extras/renderers/plugins/ShadowMapPlugin.js',
          'three.js/src/extras/renderers/plugins/SpritePlugin.js',
          'three.js/src/extras/renderers/plugins/DepthPassPlugin.js',
          'three.js/src/extras/shaders/ShaderFlares.js',
          'three.js/src/extras/shaders/ShaderSprite.js',
          // cannon
          'cannon.js/build/cannon.js'
        ],
        dest: 'build/<%= pkg.name %>.js'
      }
    },
    wrap: {
      options: {
        header: 'header.js',
        footer: 'footer.js'
      },
      dist: {
        src: ['build/<%= pkg.name %>.js']
      }
    },
    uglify: {
      options: {

      },
      dist: {
        src: 'build/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    shell: {
      gruntCannon: {
        command: 'cd cannon.js/ && grunt && cd ..',
        options: {
          stdout: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-wrapper');
  grunt.loadNpmTasks('grunt-shell');

  // Default task(s).
  grunt.registerTask('default', ['shell', 'concat']);
  grunt.registerTask('min', ['shell', 'concat', 'uglify']);

};
