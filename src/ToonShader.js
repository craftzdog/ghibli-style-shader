import { Color, Vector3 } from "three";

export const ToonShader = {
  uniforms: {
    uDirLightPos: {
      value: new Vector3(),
    },
    uDirLightColor: {
      value: new Color(0xeeeeee),
    },
    uAmbientLightColor: {
      value: new Color(0x050505),
    },
    uBaseColor: {
      value: new Color(0xeeeeee),
    },
    uLineColor1: {
      value: new Color(0x808080),
    },
    uLineColor2: {
      value: new Color(0x000000),
    },
    uLineColor3: {
      value: new Color(0x000000),
    },
    uLineColor4: {
      value: new Color(0x000000),
    },
  },
  vertexShader: /* glsl */ `
    varying vec3 vNormal;
    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      vNormal = normalize( normalMatrix * normal );
    }`,
  fragmentShader: /* glsl */ `
    #define TOON
    uniform vec3 uBaseColor;
    uniform vec3 uLineColor1;
    uniform vec3 uLineColor2;
    uniform vec3 uLineColor3;
    uniform vec3 uLineColor4;
    uniform vec3 uDirLightPos;
    uniform vec3 uDirLightColor;
    uniform vec3 uAmbientLightColor;
    varying vec3 vNormal;
    void main() {
      float camera = max( dot( normalize( vNormal ), vec3( 0.0, 0.0, 1.0 ) ), 0.4);
      float light = max( dot( normalize( vNormal ), uDirLightPos ), 0.0);
      gl_FragColor = vec4( uBaseColor, 1.0 );
      gl_FragColor = vec4(0.082, 0.212, 0.192, 1.0);
      if ( length(light) > 0.0 ) {
        gl_FragColor = vec4(0.094, 0.278, 0.29, 1.0);
      }
      if ( length(light) > 10.99 ) {
        gl_FragColor = vec4(0.2, 0.459, 0.376, 1.0);
      }
      if ( length(light) > 20.99 ) {
        gl_FragColor *= vec4( uLineColor1, 1.0 );
        gl_FragColor = vec4(0.286, 0.537, 0.486, 1.0);
      }
      if ( length(uAmbientLightColor + uDirLightColor * camera) < 0.50 ) {
        gl_FragColor *= vec4( uLineColor2, 1.0 );
        gl_FragColor = vec4(1.0, 1.0, 0.0, 0.0);
      }
    }
  `,
};
