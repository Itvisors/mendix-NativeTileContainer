// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";
import { NativeModules } from 'react-native';

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * Checks if the user has granted the appropriate permissions to be able to send and receive messages.
 * Returns true if permission is granted, false otherwise.
 * @returns {Promise.<boolean>}
 */
export async function HasNotificationPermission() {
	// BEGIN USER CODE
    // Documentation https://rnfirebase.io/docs/v5.x.x/notifications/receiving-notifications
    const allowedAuthorizationStatuses = [1 /* permissionStatus.Authorized */, 2 /* permissionStatus.Provisional */];
    if (NativeModules && !NativeModules.RNFBMessagingModule) {
        return Promise.reject(new Error("Firebase module is not available in your app"));
    }
    return NativeModules.RNFBMessagingModule.hasPermission().then((authStatus) => {
        if (allowedAuthorizationStatuses.includes(authStatus)) {
            return Promise.resolve(true);
        }
        else {
            return Promise.resolve(false);
        }
    });
	// END USER CODE
}
