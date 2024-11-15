import { SessionProvider } from '@/contexts/SessionContext';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import '../global.css';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    return (
        <SessionProvider>
            <Slot />
        </SessionProvider>
    );
}
