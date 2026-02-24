'use strict';

/**
 * Stub for react-native-reanimated on doc site (web).
 * Reanimated expects react-native/Libraries/Renderer/shims/ReactNative;
 * we alias that to this file so the docs build does not pull in real RN.
 */
const RNRenderer = {
  findHostInstance_DEPRECATED: () => null,
};

module.exports = RNRenderer;
