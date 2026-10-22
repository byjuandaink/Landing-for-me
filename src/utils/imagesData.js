const files = import.meta.glob('../assets/images/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});

const byName = {};
for (const [path, url] of Object.entries(files)) {
  const name = path.split('/').pop().replace(/\.[^.]+$/, '');
  byName[name] = url;
}

export const getImage = (name) => byName[name];

export const images = {
  hero: byName.hero,
  skills: byName.skills,
};