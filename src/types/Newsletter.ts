import type { NewsletterAccessType } from './NewsletterAccessType';

export interface Newsletter {
  id: number;
  title: string;
  description: string;
  note?: string;
  accessType: NewsletterAccessType;
}
