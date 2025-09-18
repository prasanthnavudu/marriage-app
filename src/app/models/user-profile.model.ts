export interface UserProfile {
  id: string;
  fullName: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  email: string;
  phone?: string;
  location: string;
  profession?: string;
  bio?: string;
  photoUrl?: string;
}
