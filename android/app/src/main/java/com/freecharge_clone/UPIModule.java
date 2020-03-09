package com.freecharge_clone;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;
import android.widget.Toast;
import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import static android.content.ContentValues.TAG;

public class UPIModule extends ReactContextBaseJavaModule {
    private Promise promiseUpi;
    private final ActivityEventListener mActivityEventListener = new BaseActivityEventListener() {
        // listener for activity
        @Override
        public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
            Log.d(TAG, "onActivityResult: requestCode: " + requestCode);
            Log.d(TAG, "onActivityResult: resultCode: " + resultCode);
            if (promiseUpi != null) {
                if (data != null) {
                    String res = data.getStringExtra("response");
                    promiseUpi.resolve(res);
                } else {
                    promiseUpi.reject("Failed", data.toString());
                }
            }
        }
    };

    public UPIModule(ReactApplicationContext reactContext) {
        super(reactContext);
        // register the listener for `onActivityResult`
        reactContext.addActivityEventListener(mActivityEventListener);
    }

    @Override
    public String getName() {
        return "UPI"; // this will be name of key we can fetch from NativeModules to use this module
    }

    // this will be method called back javascript via NativeModules
    @ReactMethod
    public void openLink(String url, final Promise promise) {
        Activity currentActivity = getCurrentActivity();
        promiseUpi = promise;
        Uri uri = Uri.parse(url);
        Intent intent = new Intent(Intent.ACTION_VIEW, uri);
        // start activity with mentioned intent and as we need result we will use
        // startActivityForResult
        currentActivity.startActivityForResult(intent, 1);
    }
}