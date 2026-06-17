import Card from '../Card/Card';

export default function GalleryGrid({ paintings }) {
  return (
    <main className="gallery">
      <div className="gallery__grid">
        {paintings.map(p => (
          <Card key={p.id} painting={p} />
        ))}
      </div>
    </main>
  );
}