export interface EditFormData {
  image?: File;
  session: string[];
  genre: string[];
  introduction: string;
}

export interface ReviewFormData {
  rating: number;
  tags: string[];
  review: string;
}
