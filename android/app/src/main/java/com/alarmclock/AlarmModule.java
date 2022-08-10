package com.alarmclock;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import android.app.AlarmManager;
import android.content.Intent;
import android.app.PendingIntent;
import android.util.Log;
import android.content.Context;
import android.media.Ringtone;
import android.media.RingtoneManager;
import android.net.Uri;


public class AlarmModule extends ReactContextBaseJavaModule {
    AlarmModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "AlarmModule";
    }

    @ReactMethod
    public void createAlarmEvent(String name, String time, Callback callback) {
        callback.invoke("Hi from java");

        Intent intent = new Intent(getCurrentActivity(), AlarmReceiver.class);
        PendingIntent pending = PendingIntent.getBroadcast(getCurrentActivity(), 0, intent, 0);
        AlarmManager alarmManager = (AlarmManager) getCurrentActivity().getSystemService(Context.ALARM_SERVICE);
        alarmManager.set(AlarmManager.RTC_WAKEUP, System.currentTimeMillis() + 1000, pending);
    }

    @ReactMethod
    public void endAlarmEvent(String name, String time, Callback callback) {
        callback.invoke("Alarm Ended");

        Intent stopIntent = new Intent(getCurrentActivity(), AlarmPlayingService.class);
        getCurrentActivity().stopService(stopIntent);

        Intent intent = new Intent(getCurrentActivity(), AlarmReceiver.class);
        PendingIntent pending = PendingIntent.getBroadcast(getCurrentActivity(), 0, intent, 0);
        AlarmManager alarmManager = (AlarmManager) getCurrentActivity().getSystemService(Context.ALARM_SERVICE);
        alarmManager.cancel(pending);
    }
}