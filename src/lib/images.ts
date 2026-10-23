import type { ImageMetadata } from 'astro';

const modules = import.meta.glob<{ default: ImageMetadata }>(
  '../../Content/**/*.{webp,jpg,jpeg,png,JPG,JPEG,PNG}',
  { eager: true },
);

export type WorkImage = {
  src: ImageMetadata;
  alt: string;
};

export type WorkImages = {
  hero?: WorkImage;
  photos: WorkImage[];
  drawings: WorkImage[];
};

function toPosix(path: string) {
  return path.replace(/\\/g, '/');
}

function labelFromFile(file: string) {
  return file
    .replace(/\.[^.]+$/, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function imagesFor(folder: string, title: string): WorkImages {
  const prefix = `${toPosix(folder).replace(/\/$/, '')}/`;
  const items = Object.entries(modules)
    .map(([key, mod]) => {
      const rel = toPosix(key).replace(/^(\.\.\/)+/, '');
      return { rel, src: mod.default };
    })
    .filter((item) => item.rel.startsWith(prefix))
    .sort((a, b) => a.rel.localeCompare(b.rel, undefined, { numeric: true }));

  const photos: WorkImage[] = [];
  const drawings: WorkImage[] = [];
  let hero: WorkImage | undefined;

  for (const item of items) {
    const file = item.rel.slice(prefix.length);
    const base = file.split('/').pop() ?? file;
    const image = { src: item.src, alt: `${title} — ${labelFromFile(base)}` };

    if (/^hero\.(webp|jpe?g|png)$/i.test(base)) {
      hero = { src: item.src, alt: title };
      continue;
    }

    const drawing = /plans and sections/i.test(file) || /plan|section/i.test(base);
    if (drawing) drawings.push(image);
    else photos.push(image);
  }

  return { hero, photos, drawings };
}
