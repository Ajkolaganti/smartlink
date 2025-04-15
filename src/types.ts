export interface SmartLink {
  originalUrl: string;
  smartUrl: string;
  timestamp: number;
}

export interface ValidationResult {
  isValid: boolean;
  message: string;
}