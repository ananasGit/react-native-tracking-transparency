import { Platform } from 'react-native';

export type TrackingStatus = 
  | 'unavailable'
  | 'denied'
  | 'authorized'
  | 'restricted'
  | 'not-determined';

export async function getTrackingStatus(): Promise<TrackingStatus> {
  if (Platform.OS !== 'ios') return 'unavailable';
  
  try {
    const TrackingTransparency = require('./NativeTrackingTransparency').default;
    if (!TrackingTransparency) return 'unavailable';
    return TrackingTransparency.getTrackingStatus() as Promise<TrackingStatus>;
  } catch {
    return 'unavailable';
  }
}

export async function requestTrackingPermission(): Promise<TrackingStatus> {
  if (Platform.OS !== 'ios') return 'unavailable';
  
  try {
    const TrackingTransparency = require('./NativeTrackingTransparency').default;
    if (!TrackingTransparency) return 'unavailable';
    return TrackingTransparency.requestTrackingPermission() as Promise<TrackingStatus>;
  } catch {
    return 'unavailable';
  }
}
