"use strict";

import TrackingTransparency from "./NativeTrackingTransparency.js";
export async function getTrackingStatus() {
  return TrackingTransparency.getTrackingStatus();
}
export async function requestTrackingPermission() {
  return TrackingTransparency.requestTrackingPermission();
}
//# sourceMappingURL=index.js.map