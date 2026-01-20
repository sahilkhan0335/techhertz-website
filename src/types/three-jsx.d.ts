import type { ReactThreeFiber } from "@react-three/fiber";

declare global {
  namespace JSX {
    type IntrinsicElements = ReactThreeFiber.IntrinsicElements;
  }
}

export { };

