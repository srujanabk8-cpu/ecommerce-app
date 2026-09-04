import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>Product not found. <Link to="/">Go back</Link></div>;

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <Link to="/" style={{ color: '#2563eb', textDecoration: 'none' }}>← Back to Catalog</Link>
      <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
        <img src={product.image} alt={product.name} style={{ width: '320px', borderRadius: '8px', objectFit: 'cover' }} />
        <div style={{ flex: 1 }}>
          <h2 style={{ margin: '0 0 8px' }}>{product.name}</h2>
          <span style={{ color: '#64748b', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>{product.category}</span>
          <h3 style={{ color: '#2563eb', margin: '1rem 0', fontSize: '1.5rem' }}>${product.price.toFixed(2)}</h3>
          <p style={{ color: '#334155', lineHeight: '1.5' }}>{product.description}</p>
        </div>
      </div>
    </div>
  );
}