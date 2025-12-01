import * as THREE from 'three';

export class HeroScene {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private particles: THREE.Points;
  private logo: THREE.Mesh;
  private animationFrameId: number | null = null;

  constructor(container: HTMLElement) {

    // Scene setup
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x000000, 0.001);

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    this.camera.position.z = 50;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0);
    container.appendChild(this.renderer.domElement);

    // Create particles
    this.particles = this.createParticles();
    this.scene.add(this.particles);

    // Create logo/object
    this.logo = this.createLogo();
    this.scene.add(this.logo);

    // Add lights
    this.addLights();

    // Handle resize
    window.addEventListener('resize', this.handleResize);

    // Start render loop
    this.animate();
  }

  private createParticles(): THREE.Points {
    const particleCount = 2000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Position
      positions[i3] = (Math.random() - 0.5) * 200;
      positions[i3 + 1] = (Math.random() - 0.5) * 200;
      positions[i3 + 2] = (Math.random() - 0.5) * 100;

      // Color (red to white gradient)
      const brightness = Math.random();
      colors[i3] = 1; // R
      colors[i3 + 1] = brightness * 0.2; // G
      colors[i3 + 2] = brightness * 0.2; // B
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    return new THREE.Points(geometry, material);
  }

  private createLogo(): THREE.Mesh {
    // Create a stylized "ABZ" shape using geometry
    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const material = new THREE.MeshPhongMaterial({
      color: 0xC8102E,
      emissive: 0xC8102E,
      emissiveIntensity: 0.5,
      shininess: 100,
      transparent: true,
      opacity: 0.9,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, 0);
    return mesh;
  }

  private addLights(): void {
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    this.scene.add(ambientLight);

    // Point light (red)
    const pointLight = new THREE.PointLight(0xC8102E, 2, 100);
    pointLight.position.set(10, 10, 10);
    this.scene.add(pointLight);

    // Point light (white)
    const pointLight2 = new THREE.PointLight(0xffffff, 1, 100);
    pointLight2.position.set(-10, -10, 10);
    this.scene.add(pointLight2);
  }


  private handleResize = (): void => {
    const container = this.renderer.domElement.parentElement;
    if (!container) return;

    this.camera.aspect = container.clientWidth / container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(container.clientWidth, container.clientHeight);
  };

  private animate = (): void => {
    this.animationFrameId = requestAnimationFrame(this.animate);
    this.renderer.render(this.scene, this.camera);
  };

  /**
   * Update camera on scroll
   */
  public animateScroll(progress: number): void {
    // Dolly camera backward on scroll
    this.camera.position.z = 50 + progress * 30;
    this.logo.rotation.z = progress * Math.PI;
  }

  /**
   * Cleanup and dispose
   */
  public destroy(): void {
    // Stop render loop
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }

    // Remove event listeners
    window.removeEventListener('resize', this.handleResize);

    // Dispose Three.js resources
    this.particles.geometry.dispose();
    (this.particles.material as THREE.Material).dispose();
    this.logo.geometry.dispose();
    (this.logo.material as THREE.Material).dispose();
    this.renderer.dispose();

    // Remove DOM element
    if (this.renderer.domElement.parentElement) {
      this.renderer.domElement.parentElement.removeChild(this.renderer.domElement);
    }
  }
}

