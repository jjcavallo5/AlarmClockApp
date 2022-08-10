package com.alarmclock;

import android.content.Context;
import android.content.Intent;
import android.media.Ringtone;
import android.media.RingtoneManager;
import android.net.Uri;
import android.os.Build;
import android.os.Vibrator;
import android.widget.Toast;
import android.app.Service;
import android.os.IBinder;
import androidx.core.app.NotificationCompat;
import android.app.Notification;

public class AlarmPlayingService extends Service {
    private Ringtone ringtone;
    private Vibrator vibrator;

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        Vibrator vibrator = (Vibrator) getSystemService(VIBRATOR_SERVICE);
        vibrator.vibrate(4000);

        Uri alarmUri = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_ALARM);
        if (alarmUri == null) {
            alarmUri = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION);
        }
        
        // setting default ringtone
        this.ringtone = RingtoneManager.getRingtone(this, alarmUri);
        ringtone.play();

        Toast.makeText(this, "Alarm! Wake up! Wake up!", Toast.LENGTH_LONG).show();

        return START_NOT_STICKY;
    }

    @Override
    public void onDestroy() {
        ringtone.stop();
    }

    @Override
    public IBinder onBind(Intent i) {
        return null;
    }
}