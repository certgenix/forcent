import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

interface CookiePreferences {
  analytics: boolean;
  performance: boolean;
  marketing: boolean;
}

const DEFAULT_PREFERENCES: CookiePreferences = {
  analytics: false,
  performance: false,
  marketing: false,
};

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    localStorage.setItem('cookiePreferences', JSON.stringify({
      analytics: true,
      performance: true,
      marketing: true,
    }));
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem('cookieConsent', 'essential');
    localStorage.setItem('cookiePreferences', JSON.stringify(DEFAULT_PREFERENCES));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', 'custom');
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    setIsVisible(false);
    setShowCustomize(false);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!isVisible) return null;

  return (
    <>
      {showCustomize && (
        <div 
          className="fixed inset-0 bg-black/50 z-[9998] backdrop-blur-sm"
          onClick={() => setShowCustomize(false)}
          data-testid="cookie-customize-overlay"
        />
      )}
      
      <div 
        className={`fixed z-[9999] transition-all duration-300 ease-out ${
          showCustomize 
            ? 'inset-4 sm:inset-auto sm:bottom-6 sm:left-1/2 sm:-translate-x-1/2 sm:w-full sm:max-w-lg'
            : 'bottom-0 left-0 right-0 sm:bottom-6 sm:left-6 sm:right-6 lg:left-auto lg:right-6 lg:max-w-xl'
        }`}
        data-testid="cookie-consent-banner"
      >
        <div className="bg-white dark:bg-card rounded-none sm:rounded-xl shadow-2xl border border-border overflow-hidden">
          {!showCustomize ? (
            <div className="p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 flex-shrink-0">
                  <Cookie className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm sm:text-base text-foreground leading-relaxed" data-testid="text-cookie-message">
                    We use cookies to improve your experience. You can accept all, continue with only essential cookies, or customize.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4">
                    <Button
                      onClick={handleAcceptAll}
                      className="w-full sm:w-auto"
                      data-testid="button-cookie-accept-all"
                    >
                      Accept All
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleEssentialOnly}
                      className="w-full sm:w-auto"
                      data-testid="button-cookie-essential"
                    >
                      Essential Only
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => setShowCustomize(true)}
                      className="w-full sm:w-auto"
                      data-testid="button-cookie-customize"
                    >
                      Customize
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
                    <Cookie className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground" data-testid="text-cookie-customize-title">
                    Cookie Preferences
                  </h3>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowCustomize(false)}
                  data-testid="button-cookie-close-customize"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                Choose which cookies you'd like to allow. Essential cookies are always enabled as they're required for the site to function.
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="text-sm font-medium text-foreground">Essential Cookies</p>
                    <p className="text-xs text-muted-foreground">Required for basic site functionality</p>
                  </div>
                  <Switch checked disabled data-testid="switch-cookie-essential" />
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover-elevate">
                  <div>
                    <p className="text-sm font-medium text-foreground">Analytics Cookies</p>
                    <p className="text-xs text-muted-foreground">Help us understand how visitors use our site</p>
                  </div>
                  <Switch
                    checked={preferences.analytics}
                    onCheckedChange={() => togglePreference('analytics')}
                    data-testid="switch-cookie-analytics"
                  />
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover-elevate">
                  <div>
                    <p className="text-sm font-medium text-foreground">Performance Cookies</p>
                    <p className="text-xs text-muted-foreground">Allow us to improve site speed and experience</p>
                  </div>
                  <Switch
                    checked={preferences.performance}
                    onCheckedChange={() => togglePreference('performance')}
                    data-testid="switch-cookie-performance"
                  />
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover-elevate">
                  <div>
                    <p className="text-sm font-medium text-foreground">Marketing Cookies</p>
                    <p className="text-xs text-muted-foreground">Enable personalized ads and content</p>
                  </div>
                  <Switch
                    checked={preferences.marketing}
                    onCheckedChange={() => togglePreference('marketing')}
                    data-testid="switch-cookie-marketing"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-6">
                <Button
                  onClick={handleSavePreferences}
                  className="w-full sm:w-auto"
                  data-testid="button-cookie-save-preferences"
                >
                  Save Preferences
                </Button>
                <Button
                  variant="outline"
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto"
                  data-testid="button-cookie-accept-all-customize"
                >
                  Accept All
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
