import * as wasm from './wasm_package_bg.wasm';

/**
* @returns {number}
*/
export function getAnswer() {
    const ret = wasm.getAnswer();
    return ret;
}

