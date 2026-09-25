import * as amplitude from '@amplitude/analytics-browser';
import { sessionReplayPlugin } from '@amplitude/plugin-session-replay-browser';

const AMPLITUDE_API_KEY = '71877f985de6e4b8c8fb11ae17a76e4a';

export const initAmplitude = () => {
  // Skip analytics on the local dev server so testing doesn't pollute production data
  if (import.meta.env.DEV) {
    console.info('[analytics] Amplitude disabled in development');
    return;
  }

  amplitude.init(AMPLITUDE_API_KEY, undefined, {
    defaultTracking: {
      pageViews: true,        
      sessions: true,         
      formInteractions: true, 
    },
    autocapture: {
      elementInteractions: true, 
    }
  });

  const sessionReplayTracking = sessionReplayPlugin({
    sampleRate: 1.0, 
  });

  amplitude.add(sessionReplayTracking);
};