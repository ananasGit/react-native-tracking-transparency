# react-native-tracking-transparency

🕵️ iOS App Tracking Transparency for React Native 0.79+ with Turbo Modules

A modern React Native library for managing iOS 14+ App Tracking Transparency permissions using the new Turbo Module architecture, specifically designed for React Native 0.79+.

## Features

- ✅ **iOS 14+ App Tracking Transparency** - Full support for Apple's ATT framework
- ✅ **React Native 0.79+ Compatible** - Built with the new Turbo Module architecture
- ✅ **TypeScript** - Complete type definitions included
- ✅ **Async/Await API** - Modern promise-based interface
- ✅ **iOS Only** - Lightweight, no Android dependencies
- ✅ **Drop-in Replacement** - Compatible API with existing libraries

## Installation

### GitHub Package (Private)

```json
// package.json
{
  "dependencies": {
    "react-native-tracking-transparency": "https://github.com/ananasGit/react-native-tracking-transparency.git"
  }
}
```

Then run:
```sh
yarn install
cd ios && pod install
```

### Info.plist Configuration

Add the required tracking usage description to your `ios/YourApp/Info.plist`:

```xml
<key>NSUserTrackingUsageDescription</key>
<string>This app would like to track you across apps and websites to provide personalized ads.</string>
```

## Usage

```typescript
import {
  getTrackingStatus,
  requestTrackingPermission,
  type TrackingStatus
} from 'react-native-tracking-transparency';

// Check current tracking permission status
const checkTrackingStatus = async () => {
  const status: TrackingStatus = await getTrackingStatus();
  console.log('Tracking status:', status);
  // Possible values: 'authorized', 'denied', 'restricted', 'not-determined', 'unavailable'
};

// Request tracking permission from user
const requestPermission = async () => {
  const status: TrackingStatus = await requestTrackingPermission();
  
  if (status === 'authorized') {
    console.log('User granted tracking permission');
    // Enable tracking features
  } else {
    console.log('User denied tracking permission');
    // Disable tracking features
  }
};
```

### React Component Example

```typescript
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import {
  getTrackingStatus,
  requestTrackingPermission,
  type TrackingStatus
} from 'react-native-tracking-transparency';

const TrackingTransparencyExample = () => {
  const [status, setStatus] = useState<TrackingStatus>('not-determined');

  useEffect(() => {
    checkStatus();
  }, []);

  const checkStatus = async () => {
    const currentStatus = await getTrackingStatus();
    setStatus(currentStatus);
  };

  const requestPermission = async () => {
    const newStatus = await requestTrackingPermission();
    setStatus(newStatus);
  };

  return (
    <View>
      <Text>Tracking Status: {status}</Text>
      {status === 'not-determined' && (
        <Button
          title="Request Tracking Permission"
          onPress={requestPermission}
        />
      )}
    </View>
  );
};
```

## API Reference

### `getTrackingStatus(): Promise<TrackingStatus>`

Returns the current App Tracking Transparency authorization status.

**Returns:** Promise that resolves to one of:
- `'authorized'` - User has granted tracking permission
- `'denied'` - User has denied tracking permission  
- `'restricted'` - Device prevents tracking permission (parental controls)
- `'not-determined'` - User hasn't been asked yet
- `'unavailable'` - iOS < 14 or not supported

### `requestTrackingPermission(): Promise<TrackingStatus>`

Shows the system tracking permission dialog to the user.

**Returns:** Promise that resolves to the user's choice (same values as `getTrackingStatus`)

**Note:** This can only be called once per app installation. Subsequent calls return the cached result.

### `TrackingStatus` Type

```typescript
type TrackingStatus = 
  | 'unavailable'
  | 'denied' 
  | 'authorized'
  | 'restricted'
  | 'not-determined';
```

## Requirements

- **React Native**: 0.79+
- **iOS**: 14.0+
- **Xcode**: 12.0+

## Platform Support

| Platform | Supported |
|----------|-----------|
| iOS      | ✅        |
| Android  | ❌        |

## Migration from Other Libraries

This library provides a drop-in replacement for `react-native-tracking-transparency` with React Native 0.79+ compatibility:

```typescript
// Before (old library)
import { getTrackingStatus, requestTrackingPermission } from 'react-native-tracking-transparency';

// After (this library) - same API!
import { getTrackingStatus, requestTrackingPermission } from 'react-native-tracking-transparency';
```

## Troubleshooting

### Build Issues

If you encounter build issues, try:

1. Clean your build folder: `cd ios && xcodebuild clean`
2. Delete Pods: `rm -rf ios/Pods ios/Podfile.lock`
3. Reinstall: `cd ios && pod install`
4. Clean React Native cache: `yarn start --reset-cache`

### Testing on Simulator

ATT permissions work differently on simulators:
- iOS Simulator 14.5+ supports ATT testing
- Go to Settings > Privacy & Security > Tracking to reset permissions
- Use physical devices for production testing

## License

MIT © [Ananas](https://github.com/ananasGit)

---

Built with React Native Turbo Modules for maximum performance and React Native 0.79+ compatibility.
