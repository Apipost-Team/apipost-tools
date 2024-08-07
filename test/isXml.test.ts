import ATools from '../src/index';

describe('works', () => {
  const { isXml } = ATools;
  const xml = `<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
      package="osg.AndroidExample"
      android:installLocation="preferExternal"
      android:versionCode="1"
      android:versionName="1.0">
    <uses-sdk android:targetSdkVersion="8" android:minSdkVersion="8"></uses-sdk>
    <uses-feature android:glEsVersion="0x00020000"/> <!-- OpenGL min requierements (2.0) -->
    <uses-permission android:name="android.permission.INTERNET"/>

    <application android:label="@string/app_name" android:icon="@drawable/osg">
        <activity android:name=".osgViewer"
                  android:label="@string/app_name" android:screenOrientation="landscape"> <!--  Force screen to landscape -->
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>

    </application>
</manifest>`;
  const str = '1234qwe';
  it('测试isXml pass', () => {
    expect(isXml(xml)).toEqual(true);
  });
  it('测试isXml faild', () => {
    expect(isXml(str)).toEqual(false);
  });
});
