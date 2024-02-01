import {Song, Songs} from "./song";
import {db} from "../firebaseConfig";
import {collection, getDocs, addDoc, getDoc, doc, setDoc, deleteDoc} from "firebase/firestore";

export async function getSongs(): Promise<Songs> {
  const songsRef = collection(db, "songs");
  const songsSnapshot = await getDocs(songsRef);

  const tempSongs: Songs = {};

  songsSnapshot.forEach(doc => {
    tempSongs[doc.id] = doc.data() as Song;
  });

  return tempSongs;
}

export async function createSong(song: Song) : Promise<string> {
  const songsRef = collection(db, "songs");
  const newSongRef = await addDoc(songsRef, song);

  return newSongRef.id;
}

export async function getSong(id: string) : Promise<Song | undefined> {
  const songsRef = doc(db, "songs", id);
  const songSnapshot = await getDoc(songsRef);

  if (songSnapshot.exists()) {
    return songSnapshot.data() as Song;
  }

  return undefined;
}

export async function updateSong(id: string, song: Partial<Song>) : Promise<void> {
  const songsRef = doc(db, "songs", id);
  await setDoc(songsRef, song, {merge: true});

  return;
}

export async function deleteSong(id: string) : Promise<void> {
  const songsRef = doc(db, "songs", id);
  await deleteDoc(songsRef);

  return;
}