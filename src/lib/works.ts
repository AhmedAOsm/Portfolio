import { getCollection, type CollectionEntry } from 'astro:content';
import { withBase } from './base';
import { imagesFor, type WorkImages } from './images';

type ProjectEntry = CollectionEntry<'projects'>;
type GalleryEntry = CollectionEntry<'gallery'>;

export type Work = {
  entry: ProjectEntry | GalleryEntry;
  images: WorkImages;
  href: string;
  kind: 'project' | 'gallery';
};

function withImages(entry: ProjectEntry | GalleryEntry, kind: Work['kind']): Work {
  const section = kind === 'project' ? 'projects' : 'gallery';
  return {
    entry,
    images: imagesFor(entry.data.folder, entry.data.title),
    href: withBase(`/${section}/${entry.id}`),
    kind,
  };
}

export async function getProjects(): Promise<Work[]> {
  const entries = await getCollection('projects');
  return entries
    .sort((a, b) => a.data.order - b.data.order)
    .map((entry) => withImages(entry, 'project'));
}

export async function getGallery(): Promise<Work[]> {
  const entries = await getCollection('gallery');
  return entries
    .sort((a, b) => a.data.order - b.data.order)
    .map((entry) => withImages(entry, 'gallery'));
}

export async function getChronology(): Promise<Work[]> {
  const [projects, gallery] = await Promise.all([getProjects(), getGallery()]);
  return [...projects, ...gallery].sort((a, b) => a.entry.data.sort - b.entry.data.sort);
}
