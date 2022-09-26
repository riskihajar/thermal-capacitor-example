import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'Example',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.1.17:3333',
    cleartext: true,
  },
};

export default config;
