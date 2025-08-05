import TrackingTransparency from './NativeTrackingTransparency';

export type TrackingStatus = 
  | 'unavailable'
  | 'denied'
  | 'authorized'
  | 'restricted'
  | 'not-determined';

export async function getTrackingStatus(): Promise<TrackingStatus> {
  return TrackingTransparency.getTrackingStatus() as Promise<TrackingStatus>;
}

export async function requestTrackingPermission(): Promise<TrackingStatus> {
  return TrackingTransparency.requestTrackingPermission() as Promise<TrackingStatus>;
}
