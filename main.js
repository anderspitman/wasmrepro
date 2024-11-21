import createPlugin from "jsr:@extism/extism@2.0.0-rc10";

const plugin = await createPlugin(
  "./target/wasm32-unknown-unknown/debug/wasmrepro.wasm",
);

const out = await plugin.call("test");
console.log(out);

plugin.close();
