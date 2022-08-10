package com.alarmclock;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.media.Ringtone;
import android.media.RingtoneManager;
import android.net.Uri;
import android.os.Build;
import android.os.Vibrator;
import android.widget.Toast;

public class AlarmReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context k1, Intent k2) {

        Intent startIntent = new Intent(k1, AlarmPlayingService.class);
        k1.startService(startIntent);

        // System.out.println("hi");

        //  Vibrator vibrator = (Vibrator) k1.getSystemService(k1.VIBRATOR_SERVICE);
        //  vibrator.vibrate(4000);
   
        //  Toast.makeText(k1, "Alarm! Wake up! Wake up!", Toast.LENGTH_LONG).show();
        //  Uri alarmUri = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_ALARM);
        //  if (alarmUri == null) {
        //      alarmUri = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION);
        //  }
           
        //  // setting default ringtone
        //  Ringtone ringtone = RingtoneManager.getRingtone(k1, alarmUri);
   
        //  // play ringtone
        //  ringtone.play();
    }
}
