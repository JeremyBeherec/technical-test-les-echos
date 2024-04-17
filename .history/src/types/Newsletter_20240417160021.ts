import type { NewsletterAccessType } from './NewsletterAccessType';

export interface Newsletter {
  title: string;
  description: string;
  accessType: NewsletterAccessType;
}
