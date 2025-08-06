import { Platform } from 'react-native';
import TrackingTransparency from './NativeTrackingTransparency';

export type TrackingStatus = 
  | 'unavailable'
  | 'denied'
  | 'authorized'
  | 'restricted'
  | 'not-determined';

export async function getTrackingStatus(): Promise<TrackingStatus> {
  if (Platform.OS !== 'ios') return 'unavailable';
  return TrackingTransparency.getTrackingStatus() as Promise<TrackingStatus>;
}

export async function requestTrackingPermission(): Promise<TrackingStatus> {
  if (Platform.OS !== 'ios') return 'unavailable';
  return TrackingTransparency.requestTrackingPermission() as Promise<TrackingStatus>;
}
