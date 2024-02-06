export interface Song {
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
}

export type Songs = { [id: string]: Song };