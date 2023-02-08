export const vertexShader = `
  varying vec3 Normal;
  void main() {
    Normal = normalize(normalMatrix * normal);
    vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
    vec4 mvPosition =  viewMatrix * worldPosition;
    gl_Position = projectionMatrix * mvPosition;
  }
`;
export const fragmentShader = `
  varying vec3 Normal;
  void main() {
    vec3 n = normalize(Normal);
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
  }
`;
