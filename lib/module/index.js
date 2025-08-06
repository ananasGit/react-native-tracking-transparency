"use strict";

import { Platform } from 'react-native';
let TrackingTransparency = null;
if (Platform.OS === 'ios') {
  try {
    TrackingTransparency = require('./NativeTrackingTransparency').default;
  } catch (e) {
    console.warn('TrackingTransparency native module not available:', e);
  }
}
export async function getTrackingStatus() {
  if (Platform.OS !== 'ios' || !TrackingTransparency) return 'unavailable';
  return TrackingTransparency.getTrackingStatus();
}
export async function requestTrackingPermission() {
  if (Platform.OS !== 'ios' || !TrackingTransparency) return 'unavailable';
  return TrackingTransparency.requestTrackingPermission();
}
//# sourceMappingURL=index.js.map