export interface SmartLink {
  originalUrl: string;
  smartUrl: string;
  iosUrl?: string;
  fallbackUrl?: string;
  timestamp: number;
}

export interface ValidationResult {
  isValid: boolean;
  message: string;
}