#import "TrackingTransparency.h"
#import <AppTrackingTransparency/AppTrackingTransparency.h>

@implementation TrackingTransparency
RCT_EXPORT_MODULE()

- (NSString *)trackingStatusToString:(ATTrackingManagerAuthorizationStatus)status {
    switch (status) {
        case ATTrackingManagerAuthorizationStatusNotDetermined:
            return @"not-determined";
        case ATTrackingManagerAuthorizationStatusRestricted:
            return @"restricted";
        case ATTrackingManagerAuthorizationStatusDenied:
            return @"denied";
        case ATTrackingManagerAuthorizationStatusAuthorized:
            return @"authorized";
        default:
            return @"unavailable";
    }
}

- (void)getTrackingStatus:(RCTPromiseResolveBlock)resolve
                   reject:(RCTPromiseRejectBlock)reject {
    if (@available(iOS 14, *)) {
        ATTrackingManagerAuthorizationStatus status = [ATTrackingManager trackingAuthorizationStatus];
        NSString *statusString = [self trackingStatusToString:status];
        resolve(statusString);
    } else {
        resolve(@"unavailable");
    }
}

- (void)requestTrackingPermission:(RCTPromiseResolveBlock)resolve
                           reject:(RCTPromiseRejectBlock)reject {
    if (@available(iOS 14, *)) {
        [ATTrackingManager requestTrackingAuthorizationWithCompletionHandler:^(ATTrackingManagerAuthorizationStatus status) {
            NSString *statusString = [self trackingStatusToString:status];
            resolve(statusString);
        }];
    } else {
        resolve(@"unavailable");
    }
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeTrackingTransparencySpecJSI>(params);
}

@end
