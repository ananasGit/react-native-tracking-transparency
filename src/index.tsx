import { Platform } from 'react-native';

export type TrackingStatus = 
  | 'unavailable'
  | 'denied'
  | 'authorized'
  | 'restricted'
  | 'not-determined';

let TrackingTransparency: any = null;

if (Platform.OS === 'ios') {
  try {
    TrackingTransparency = require('./NativeTrackingTransparency').default;
  } catch (e) {
    console.warn('TrackingTransparency native module not available:', e);
  }
}

export async function getTrackingStatus(): Promise<TrackingStatus> {
  if (Platform.OS !== 'ios' || !TrackingTransparency) return 'unavailable';
  
  return TrackingTransparency.getTrackingStatus() as Promise<TrackingStatus>;
}

export async function requestTrackingPermission(): Promise<TrackingStatus> {
  if (Platform.OS !== 'ios' || !TrackingTransparency) return 'unavailable';
  
  return TrackingTransparency.requestTrackingPermission() as Promise<TrackingStatus>;
}
