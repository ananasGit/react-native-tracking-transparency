import type { TurboModule } from 'react-native';
export interface Spec extends TurboModule {
    getTrackingStatus(): Promise<string>;
    requestTrackingPermission(): Promise<string>;
}
declare const _default: Spec;
export default _default;
//# sourceMappingURL=NativeTrackingTransparency.d.ts.map