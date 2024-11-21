use extism_pdk::{plugin_fn,FnResult};
use openidconnect;


#[plugin_fn]
pub extern "C" fn test() -> FnResult<()> {
    Ok(())
}
