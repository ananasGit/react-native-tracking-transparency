export type TrackingStatus = 'unavailable' | 'denied' | 'authorized' | 'restricted' | 'not-determined';
export declare function getTrackingStatus(): Promise<TrackingStatus>;
export declare function requestTrackingPermission(): Promise<TrackingStatus>;
//# sourceMappingURL=index.d.ts.map