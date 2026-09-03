import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function Home() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Featured Products</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px', marginTop: '1.5rem' }}>
        {products.map((p) => (
          <div key={p.id} style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', display: 'flex', flexDirection: 'column' }}>
            <img src={p.image} alt={p.name} loading="lazy" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px' }} />
            <h3 style={{ margin: '12px 0 6px', fontSize: '1.1rem' }}>{p.name}</h3>
            <p style={{ fontWeight: 'bold', color: '#2563eb', fontSize: '1.2rem', margin: '8px 0' }}>${p.price.toFixed(2)}</p>
            <Link to={`/product/${p.id}`} style={{ marginTop: 'auto', padding: '8px 12px', background: '#2563eb', color: '#fff', textDecoration: 'none', borderRadius: '4px', textAlign: 'center' }}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}