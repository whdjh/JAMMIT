export interface JamFormData {
  jamName: string;
  place: string;
  day: string;
  image: File;
  people: {
    electricGuitar: number;
    acousticGuitar: number;
    bass: number;
    drum: number;
    vocal: number;
    keyboard: number;
    percussion: number;
    string: number;
  };
  end: string;
  tag: string[];
  introduction: string;
}

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
