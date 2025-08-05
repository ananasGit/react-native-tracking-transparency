import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  getTrackingStatus(): Promise<string>;
  requestTrackingPermission(): Promise<string>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('TrackingTransparency');
