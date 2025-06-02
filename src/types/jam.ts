export interface JamFormData {
  jamName: string;
  place: string;
  day: string;
  image: File;
  session: {
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
  genre: string[];
  introduction: string;
}
