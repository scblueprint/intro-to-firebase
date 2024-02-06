import {Song, Songs} from "./song";

export async function getSongs(): Promise<Songs> {
  // Your logic here

  return {};
}

export async function createSong(song: Song) : Promise<string> {
  // Your logic here

  return "";
}

export async function createSong(song: Song) : Promise<void> {
  // Your logic here

  return;
}

export async function updateSong(id: string, song: Song) : Promise<void> {
  // Your logic here

  return;
}

export async function deleteSong(id: string) : Promise<void> {
  // Your logic here

  return;
}