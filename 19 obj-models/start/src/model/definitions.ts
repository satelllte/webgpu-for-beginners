import { mat4 } from "gl-matrix";

export enum object_types {
    TRIANGLE,
    QUAD
}

export interface RenderData {
    view_transform: mat4;
    model_transforms: Float32Array;
    object_counts: {[obj in object_types]: number}
}