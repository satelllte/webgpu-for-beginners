(()=>{"use strict";var e,t="undefined"!=typeof Float32Array?Float32Array:Array;function n(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e}function r(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.min(t[2],n[2]),e}function i(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e}function a(e,t,n){var r=t[0],i=t[1],a=t[2],s=n[0],o=n[1],c=n[2];return e[0]=i*c-a*o,e[1]=a*s-r*c,e[2]=r*o-i*s,e}Math.random,Math.PI,Math.hypot||(Math.hypot=function(){for(var e=0,t=arguments.length;t--;)e+=arguments[t]*arguments[t];return Math.sqrt(e)}),e=new t(3),t!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0);class s{build_from_center_and_offsets(e,t,r){this.corners=[],this.centroid=[0,0,0];const i=[.33333,.33333,.33333];t.forEach((t=>{var r=[0,0,0];n(r,e,t),this.corners.push(r),function(e,t,n){e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2]}(r,r,i),n(this.centroid,this.centroid,r)})),this.color=r}}class o{constructor(e){this.position=new Float32Array(e),this.theta=0,this.phi=0,this.recalculate_vectors()}recalculate_vectors(){this.forwards=new Float32Array([Math.cos(180*this.theta/Math.PI)*Math.cos(180*this.phi/Math.PI),Math.sin(180*this.theta/Math.PI)*Math.cos(180*this.phi/Math.PI),Math.sin(180*this.phi/Math.PI)]),this.right=new Float32Array([0,0,0]),a(this.right,this.forwards,[0,0,1]),this.up=new Float32Array([0,0,0]),a(this.up,this.right,this.forwards)}}class c{}const d="@group(0) @binding(0) var screen_sampler : sampler;\r\n@group(0) @binding(1) var color_buffer : texture_2d<f32>;\r\n\r\nstruct VertexOutput {\r\n    @builtin(position) Position : vec4<f32>,\r\n    @location(0) TexCoord : vec2<f32>,\r\n}\r\n\r\n@vertex\r\nfn vert_main(@builtin(vertex_index) VertexIndex : u32) -> VertexOutput {\r\n\r\n    var positions = array<vec2<f32>, 6>(\r\n        vec2<f32>( 1.0,  1.0),\r\n        vec2<f32>( 1.0, -1.0),\r\n        vec2<f32>(-1.0, -1.0),\r\n        vec2<f32>( 1.0,  1.0),\r\n        vec2<f32>(-1.0, -1.0),\r\n        vec2<f32>(-1.0,  1.0)\r\n    );\r\n\r\n    var texCoords = array<vec2<f32>, 6>(\r\n        vec2<f32>(1.0, 0.0),\r\n        vec2<f32>(1.0, 1.0),\r\n        vec2<f32>(0.0, 1.0),\r\n        vec2<f32>(1.0, 0.0),\r\n        vec2<f32>(0.0, 1.0),\r\n        vec2<f32>(0.0, 0.0)\r\n    );\r\n\r\n    var output : VertexOutput;\r\n    output.Position = vec4<f32>(positions[VertexIndex], 0.0, 1.0);\r\n    output.TexCoord = texCoords[VertexIndex];\r\n    return output;\r\n}\r\n\r\n@fragment\r\nfn frag_main(@location(0) TexCoord : vec2<f32>) -> @location(0) vec4<f32> {\r\n  return textureSample(color_buffer, screen_sampler, TexCoord);\r\n}";var u=function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function s(e){try{c(r.next(e))}catch(e){a(e)}}function o(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,o)}c((r=r.apply(e,t||[])).next())}))};class h{initialize(e,t){return u(this,void 0,void 0,(function*(){for(var n=new Array(6),r=0;r<6;r++){const e=yield fetch(t[r]),i=yield e.blob();n[r]=yield createImageBitmap(i)}yield this.loadImageBitmaps(e,n),this.view=this.texture.createView({format:"rgba8unorm",dimension:"cube",aspect:"all",baseMipLevel:0,mipLevelCount:1,baseArrayLayer:0,arrayLayerCount:6}),this.sampler=e.createSampler({addressModeU:"repeat",addressModeV:"repeat",magFilter:"linear",minFilter:"nearest",mipmapFilter:"nearest",maxAnisotropy:1})}))}loadImageBitmaps(e,t){return u(this,void 0,void 0,(function*(){const n={dimension:"2d",size:{width:t[0].width,height:t[0].height,depthOrArrayLayers:6},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT};this.texture=e.createTexture(n);for(var r=0;r<6;r++)e.queue.copyExternalImageToTexture({source:t[r]},{texture:this.texture,origin:[0,0,r]},[t[r].width,t[r].height])}))}}var l=function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function s(e){try{c(r.next(e))}catch(e){a(e)}}function o(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,o)}c((r=r.apply(e,t||[])).next())}))};const f=document.getElementById("gfx-main");document.getElementById("sphere-count").innerText=1024..toString();const v=new class{constructor(e){this.nodesUsed=0,this.triangleCount=e,this.triangles=new Array(e);for(let e=0;e<this.triangles.length;e++){const t=[100*Math.random()-50,100*Math.random()-50,100*Math.random()-50],n=[[6*Math.random()-3,6*Math.random()-3,6*Math.random()-3],[6*Math.random()-3,6*Math.random()-3,6*Math.random()-3],[6*Math.random()-3,6*Math.random()-3,6*Math.random()-3]],r=[.3+.7*Math.random(),.3+.7*Math.random(),.3+.7*Math.random()];this.triangles[e]=new s,this.triangles[e].build_from_center_and_offsets(t,n,r)}this.camera=new o([-20,0,0]),this.buildBVH()}buildBVH(){this.triangleIndices=new Array(this.triangles.length);for(var e=0;e<this.triangleCount;e+=1)this.triangleIndices[e]=e;for(this.nodes=new Array(2*this.triangles.length-1),e=0;e<2*this.triangles.length-1;e+=1)this.nodes[e]=new c;var t=this.nodes[0];t.leftChild=0,t.primitiveCount=this.triangles.length,this.nodesUsed+=1,this.updateBounds(0),this.subdivide(0)}updateBounds(e){var t=this.nodes[e];t.minCorner=[999999,999999,999999],t.maxCorner=[-999999,-999999,-999999];for(var n=0;n<t.primitiveCount;n+=1)this.triangles[this.triangleIndices[t.leftChild+n]].corners.forEach((e=>{r(t.minCorner,t.minCorner,e),i(t.maxCorner,t.maxCorner,e)}))}subdivide(e){var t=this.nodes[e];if(t.primitiveCount<=2)return;var n=[0,0,0];!function(e,t,n){e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2]}(n,t.maxCorner,t.minCorner);var r=0;n[1]>n[r]&&(r=1),n[2]>n[r]&&(r=2);const i=t.minCorner[r]+n[r]/2;for(var a=t.leftChild,s=a+t.primitiveCount-1;a<=s;)if(this.triangles[this.triangleIndices[a]].centroid[r]<i)a+=1;else{var o=this.triangleIndices[a];this.triangleIndices[a]=this.triangleIndices[s],this.triangleIndices[s]=o,s-=1}var c=a-t.leftChild;if(0==c||c==t.primitiveCount)return;const d=this.nodesUsed;this.nodesUsed+=1;const u=this.nodesUsed;this.nodesUsed+=1,this.nodes[d].leftChild=t.leftChild,this.nodes[d].primitiveCount=c,this.nodes[u].leftChild=a,this.nodes[u].primitiveCount=t.primitiveCount-c,t.leftChild=d,t.primitiveCount=0,this.updateBounds(d),this.updateBounds(u),this.subdivide(d),this.subdivide(u)}}(1024),m=new class{constructor(e,t){this.render=()=>{let e=performance.now();this.prepareScene();const t=this.device.createCommandEncoder(),n=t.beginComputePass();n.setPipeline(this.ray_tracing_pipeline),n.setBindGroup(0,this.ray_tracing_bind_group),n.dispatchWorkgroups(this.canvas.width,this.canvas.height,1),n.end();const r=this.context.getCurrentTexture().createView(),i=t.beginRenderPass({colorAttachments:[{view:r,clearValue:{r:.5,g:0,b:.25,a:1},loadOp:"clear",storeOp:"store"}]});i.setPipeline(this.screen_pipeline),i.setBindGroup(0,this.screen_bind_group),i.draw(6,1,0,0),i.end(),this.device.queue.submit([t.finish()]),this.device.queue.onSubmittedWorkDone().then((()=>{let t=performance.now();this.frametime=t-e;let n=document.getElementById("render-time");n&&(n.innerText=this.frametime.toString())})),requestAnimationFrame(this.render)},this.canvas=e,this.scene=t}Initialize(){return l(this,void 0,void 0,(function*(){yield this.setupDevice(),yield this.makeBindGroupLayouts(),yield this.createAssets(),yield this.makeBindGroups(),yield this.makePipelines(),this.frametime=16,this.render()}))}setupDevice(){var e,t;return l(this,void 0,void 0,(function*(){this.adapter=yield null===(e=navigator.gpu)||void 0===e?void 0:e.requestAdapter(),this.device=yield null===(t=this.adapter)||void 0===t?void 0:t.requestDevice(),this.context=this.canvas.getContext("webgpu"),this.format="bgra8unorm",this.context.configure({device:this.device,format:this.format,alphaMode:"opaque"})}))}makeBindGroupLayouts(){return l(this,void 0,void 0,(function*(){this.ray_tracing_bind_group_layout=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:"rgba8unorm",viewDimension:"2d"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage",hasDynamicOffset:!1}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage",hasDynamicOffset:!1}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage",hasDynamicOffset:!1}},{binding:5,visibility:GPUShaderStage.COMPUTE,texture:{viewDimension:"cube"}},{binding:6,visibility:GPUShaderStage.COMPUTE,sampler:{}}]}),this.screen_bind_group_layout=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{}}]})}))}createAssets(){return l(this,void 0,void 0,(function*(){this.color_buffer=this.device.createTexture({size:{width:this.canvas.width,height:this.canvas.height},format:"rgba8unorm",usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),this.color_buffer_view=this.color_buffer.createView(),this.sampler=this.device.createSampler({addressModeU:"repeat",addressModeV:"repeat",magFilter:"linear",minFilter:"nearest",mipmapFilter:"nearest",maxAnisotropy:1});const e={size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST};this.sceneParameters=this.device.createBuffer(e);const t={size:48*this.scene.triangleCount,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST};this.triangleBuffer=this.device.createBuffer(t);const n={size:32*this.scene.nodesUsed,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST};this.nodeBuffer=this.device.createBuffer(n);const r={size:4*this.scene.triangleCount,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST};this.triangleIndexBuffer=this.device.createBuffer(r),this.sky_texture=new h,yield this.sky_texture.initialize(this.device,["dist/gfx/sky_front.png","dist/gfx/sky_back.png","dist/gfx/sky_left.png","dist/gfx/sky_right.png","dist/gfx/sky_bottom.png","dist/gfx/sky_top.png"])}))}makeBindGroups(){return l(this,void 0,void 0,(function*(){this.ray_tracing_bind_group=this.device.createBindGroup({layout:this.ray_tracing_bind_group_layout,entries:[{binding:0,resource:this.color_buffer_view},{binding:1,resource:{buffer:this.sceneParameters}},{binding:2,resource:{buffer:this.triangleBuffer}},{binding:3,resource:{buffer:this.nodeBuffer}},{binding:4,resource:{buffer:this.triangleIndexBuffer}},{binding:5,resource:this.sky_texture.view},{binding:6,resource:this.sky_texture.sampler}]}),this.screen_bind_group=this.device.createBindGroup({layout:this.screen_bind_group_layout,entries:[{binding:0,resource:this.sampler},{binding:1,resource:this.color_buffer_view}]})}))}makePipelines(){return l(this,void 0,void 0,(function*(){const e=this.device.createPipelineLayout({bindGroupLayouts:[this.ray_tracing_bind_group_layout]});this.ray_tracing_pipeline=this.device.createComputePipeline({layout:e,compute:{module:this.device.createShaderModule({code:"struct Sphere {\n    center: vec3<f32>,\n    color: vec3<f32>,\n    radius: f32,\n}\n\nstruct Triangle {\n    corner_a: vec3<f32>,\n    corner_b: vec3<f32>,\n    corner_c: vec3<f32>,\n    color: vec3<f32>,\n}\n\nstruct ObjectData {\n    triangles: array<Triangle>,\n}\n\nstruct Node {\n    minCorner: vec3<f32>,\n    leftChild: f32,\n    maxCorner: vec3<f32>,\n    primitiveCount: f32,\n}\n\nstruct BVH {\n    nodes: array<Node>,\n}\n\nstruct ObjectIndices {\n    primitiveIndices: array<f32>,\n}\n\nstruct Ray {\n    direction: vec3<f32>,\n    origin: vec3<f32>,\n}\n\nstruct SceneData {\n    cameraPos: vec3<f32>,\n    cameraForwards: vec3<f32>,\n    cameraRight: vec3<f32>,\n    maxBounces: f32,\n    cameraUp: vec3<f32>,\n    primitiveCount: f32,\n}\n\nstruct RenderState {\n    t: f32,\n    color: vec3<f32>,\n    hit: bool,\n    position: vec3<f32>,\n    normal: vec3<f32>,\n}\n\n@group(0) @binding(0) var color_buffer: texture_storage_2d<rgba8unorm, write>;\n@group(0) @binding(1) var<uniform> scene: SceneData;\n@group(0) @binding(2) var<storage, read> objects: ObjectData;\n@group(0) @binding(3) var<storage, read> tree: BVH;\n@group(0) @binding(4) var<storage, read> triangleLookup: ObjectIndices;\n@group(0) @binding(5) var skyTexture: texture_cube<f32>;\n@group(0) @binding(6) var skySampler: sampler;\n\n@compute @workgroup_size(1,1,1)\nfn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {\n\n    let screen_size: vec2<i32> = vec2<i32>(textureDimensions(color_buffer));\n    let screen_pos : vec2<i32> = vec2<i32>(i32(GlobalInvocationID.x), i32(GlobalInvocationID.y));\n\n    let horizontal_coefficient: f32 = (f32(screen_pos.x) - f32(screen_size.x) / 2) / f32(screen_size.x);\n    let vertical_coefficient: f32 = (f32(screen_pos.y) - f32(screen_size.y) / 2) / f32(screen_size.x);\n\n    let forwards: vec3<f32> = scene.cameraForwards;\n    let right: vec3<f32> = scene.cameraRight;\n    let up: vec3<f32> = scene.cameraUp;\n\n    var myRay: Ray;\n    myRay.direction = normalize(forwards + horizontal_coefficient * right + vertical_coefficient * up);\n    myRay.origin = scene.cameraPos;\n\n    let pixel_color : vec3<f32> = rayColor(myRay);\n\n    textureStore(color_buffer, screen_pos, vec4<f32>(pixel_color, 1.0));\n}\n\nfn rayColor(ray: Ray) -> vec3<f32> {\n\n    var color: vec3<f32> = vec3(1.0, 1.0, 1.0);\n    var result: RenderState;\n\n    var temp_ray: Ray;\n    temp_ray.origin = ray.origin;\n    temp_ray.direction = ray.direction;\n\n    let bounces: u32 = u32(scene.maxBounces);\n    for(var bounce: u32 = 0; bounce < bounces; bounce++) {\n\n        result = trace(temp_ray);\n\n        //unpack color\n        color = color * result.color;\n\n        //early exit\n        if (!result.hit) {\n            break;\n        }\n\n        //Set up for next trace\n        temp_ray.origin = result.position;\n        temp_ray.direction = normalize(reflect(temp_ray.direction, result.normal));\n    }\n\n    //Rays which reached terminal state and bounced indefinitely\n    if (result.hit) {\n        color = vec3(0.0, 0.0, 0.0);\n    }\n\n    return color;\n}\n\nfn trace(ray: Ray) -> RenderState {\n\n    //Set up the Render State\n    var renderState: RenderState;\n    renderState.hit = false;\n    var nearestHit: f32 = 9999;\n\n    //Set up for BVH Traversal\n    var node: Node = tree.nodes[0];\n    var stack: array<Node, 15>;\n    var stackLocation: u32 = 0;\n\n    while (true) {\n\n        var primitiveCount: u32 = u32(node.primitiveCount);\n        var contents: u32 = u32(node.leftChild);\n\n        if (primitiveCount == 0) {\n            var child1: Node = tree.nodes[contents];\n            var child2: Node = tree.nodes[contents + 1];\n\n            var distance1: f32 = hit_aabb(ray, child1);\n            var distance2: f32 = hit_aabb(ray, child2);\n            if (distance1 > distance2) {\n                var tempDist: f32 = distance1;\n                distance1 = distance2;\n                distance2 = tempDist;\n\n                var tempChild: Node = child1;\n                child1 = child2;\n                child2 = tempChild;\n            }\n\n            if (distance1 > nearestHit) {\n                if (stackLocation == 0) {\n                    break;\n                }\n                else {\n                    stackLocation -= 1;\n                    node = stack[stackLocation];\n                }\n            }\n            else {\n                node = child1;\n                if (distance2 < nearestHit) {\n                    stack[stackLocation] = child2;\n                    stackLocation += 1;\n                }\n            }\n        }\n        else {\n            for (var i: u32 = 0; i < primitiveCount; i++) {\n        \n                var newRenderState: RenderState = hit_triangle(\n                    ray, \n                    objects.triangles[u32(triangleLookup.primitiveIndices[i + contents])], \n                    0.001, nearestHit, renderState\n                );\n\n                if (newRenderState.hit) {\n                    nearestHit = newRenderState.t;\n                    renderState = newRenderState;\n                }\n            }\n\n            if (stackLocation == 0) {\n                break;\n            }\n            else {\n                stackLocation -= 1;\n                node = stack[stackLocation];\n            }\n        }\n    }\n\n    if (!renderState.hit) {\n        //sky color\n        //renderState.color = vec3(1.0, 1.0, 1.0);\n        renderState.color = textureSampleLevel(skyTexture, skySampler, ray.direction, 0.0).xyz;\n    }\n\n    return renderState;\n}\n\nfn hit_sphere(ray: Ray, sphere: Sphere, tMin: f32, tMax: f32, oldRenderState: RenderState) -> RenderState {\n    \n    let co: vec3<f32> = ray.origin - sphere.center;\n    let a: f32 = dot(ray.direction, ray.direction);\n    let b: f32 = 2.0 * dot(ray.direction, co);\n    let c: f32 = dot(co, co) - sphere.radius * sphere.radius;\n    let discriminant: f32 = b * b - 4.0 * a * c;\n\n    var renderState: RenderState;\n    renderState.color = oldRenderState.color;\n\n    if (discriminant > 0.0) {\n\n        let t: f32 = (-b - sqrt(discriminant)) / (2 * a);\n\n        if (t > tMin && t < tMax) {\n\n            renderState.position = ray.origin + t * ray.direction;\n            renderState.normal = normalize(renderState.position - sphere.center);\n            renderState.t = t;\n            renderState.color = sphere.color;\n            renderState.hit = true;\n            return renderState;\n        }\n    }\n\n    renderState.hit = false;\n    return renderState;\n    \n}\n\nfn hit_triangle(ray: Ray, tri: Triangle, tMin: f32, tMax: f32, oldRenderState: RenderState) -> RenderState {\n    \n    //TODO: fill this out.\n    var renderState: RenderState;\n    renderState.hit = false;\n    return renderState;\n}\n\nfn hit_aabb(ray: Ray, node: Node) -> f32 {\n    var inverseDir: vec3<f32> = vec3(1.0) / ray.direction;\n    var t1: vec3<f32> = (node.minCorner - ray.origin) * inverseDir;\n    var t2: vec3<f32> = (node.maxCorner - ray.origin) * inverseDir;\n    var tMin: vec3<f32> = min(t1, t2);\n    var tMax: vec3<f32> = max(t1, t2);\n\n    var t_min: f32 = max(max(tMin.x, tMin.y), tMin.z);\n    var t_max: f32 = min(min(tMax.x, tMax.y), tMax.z);\n\n    if (t_min > t_max || t_max < 0) {\n        return 99999;\n    }\n    else {\n        return t_min;\n    }\n}"}),entryPoint:"main"}});const t=this.device.createPipelineLayout({bindGroupLayouts:[this.screen_bind_group_layout]});this.screen_pipeline=this.device.createRenderPipeline({layout:t,vertex:{module:this.device.createShaderModule({code:d}),entryPoint:"vert_main"},fragment:{module:this.device.createShaderModule({code:d}),entryPoint:"frag_main",targets:[{format:"bgra8unorm"}]},primitive:{topology:"triangle-list"}})}))}prepareScene(){const e={cameraPos:this.scene.camera.position,cameraForwards:this.scene.camera.forwards,cameraRight:this.scene.camera.right,cameraUp:this.scene.camera.up,triangleCount:this.scene.triangleCount};this.device.queue.writeBuffer(this.sceneParameters,0,new Float32Array([e.cameraPos[0],e.cameraPos[1],e.cameraPos[2],0,e.cameraForwards[0],e.cameraForwards[1],e.cameraForwards[2],0,e.cameraRight[0],e.cameraRight[1],e.cameraRight[2],4,e.cameraUp[0],e.cameraUp[1],e.cameraUp[2],e.triangleCount]),0,16);const t=new Float32Array(12*this.scene.triangleCount);for(let e=0;e<this.scene.triangleCount;e++){for(var n=0;n<3;n++)for(var r=0;r<3;r++)t[12*e+3*n+r]=this.scene.triangles[e].corners[n][r];for(var i=0;i<3;i++)t[12*e+9+i]=this.scene.triangles[e].color[i]}this.device.queue.writeBuffer(this.triangleBuffer,0,t,0,12*this.scene.triangleCount);const a=new Float32Array(8*this.scene.nodesUsed);for(let e=0;e<this.scene.nodesUsed;e++)a[8*e]=this.scene.nodes[e].minCorner[0],a[8*e+1]=this.scene.nodes[e].minCorner[1],a[8*e+2]=this.scene.nodes[e].minCorner[2],a[8*e+3]=this.scene.nodes[e].leftChild,a[8*e+4]=this.scene.nodes[e].maxCorner[0],a[8*e+5]=this.scene.nodes[e].maxCorner[1],a[8*e+6]=this.scene.nodes[e].maxCorner[2],a[8*e+7]=this.scene.nodes[e].primitiveCount;this.device.queue.writeBuffer(this.nodeBuffer,0,a,0,8*this.scene.nodesUsed);const s=new Float32Array(this.scene.triangleCount);for(let e=0;e<this.scene.triangleCount;e++)s[e]=this.scene.triangleIndices[e];this.device.queue.writeBuffer(this.triangleIndexBuffer,0,s,0,this.scene.triangleCount)}}(f,v);m.Initialize()})();