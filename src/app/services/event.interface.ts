import { Timestamp } from "@angular/fire/firestore";

export interface Ekintza {
  activity: string;
  date: string;
  is_multiple: boolean;
  description?: string;
  bands?: string[];
}
