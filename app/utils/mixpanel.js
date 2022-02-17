import ENV from 'website-my/config/environment';
import mixpanel from 'mixpanel-browser';

mixpanel.init(ENV.MIXPANEL_TOKEN);

const trackEvent = (event) => {
  mixpanel.track(event);
};

const identifyUser = () => {
  mixpanel.identify();
};

export { trackEvent, identifyUser };
