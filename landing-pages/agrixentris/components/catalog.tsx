"use client";

import { useState } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { Input } from "@base-ui/react/input";
import { ArrowUpRight, Search, X, Plus, Minus, MessageCircle, Info, SlidersHorizontal } from "lucide-react";
import { categories, products, whatsappUrl, type Category, type Product } from "@/lib/catalog";
import { Button } from "@/components/ui/button";
import { ProductArt } from "@/components/product-art";

function ProductDetails({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  return <div className="dialog-grid">
    <div className="dialog-image" style={{ backgroundColor: product.color }}><ProductArt product={product} /><span>Ilustrasi produk</span></div>
    <div className="dialog-body">
      <p className="eyebrow">{product.category} · {product.sku}</p>
      <Dialog.Title className="dialog-title">{product.name}</Dialog.Title>
      <Dialog.Description className="dialog-description">{product.detail}</Dialog.Description>
      <dl className="product-specs"><div><dt>Harga & stok</dt><dd>Konfirmasi melalui WhatsApp</dd></div><div><dt>Varian & kemasan</dt><dd>Diskusikan dengan tim kami</dd></div></dl>
      <label className="quantity-label" htmlFor="product-quantity">Jumlah yang diminati</label>
      <div className="quantity-control">
        <Button className="icon-button" aria-label="Kurangi jumlah" disabled={quantity <= 1} onClick={() => setQuantity(q => Math.max(1, q - 1))}><Minus size={17} /></Button>
        <Input id="product-quantity" aria-label="Jumlah yang diminati" type="number" min={1} max={999} value={quantity} onChange={e => setQuantity(Math.min(999, Math.max(1, Math.trunc(Number(e.target.value) || 1))))} />
        <Button className="icon-button" aria-label="Tambah jumlah" disabled={quantity >= 999} onClick={() => setQuantity(q => Math.min(999, q + 1))}><Plus size={17} /></Button>
      </div>
      <div className="dialog-actions"><Button className="button-primary" nativeButton={false} render={<a href={whatsappUrl(product, quantity)} target="_blank" rel="noopener noreferrer" />}><MessageCircle size={18} /> Tanya & pesan via WhatsApp <ArrowUpRight size={17} /></Button></div>
      <p className="draft-note">Item katalog contoh. Detail produk dan pesanan dikonfirmasi langsung bersama tim AgriXentris.</p>
    </div>
  </div>;
}

export function Catalog() {
  const [category, setCategory] = useState<Category>("Semua produk");
  const [query, setQuery] = useState("");
  const filtered = products.filter(product => (category === "Semua produk" || product.category === category) && `${product.name} ${product.sku} ${product.category}`.toLocaleLowerCase("id").includes(query.trim().toLocaleLowerCase("id")));

  return <section id="katalog" className="section catalog-section">
    <div className="container">
      <div className="catalog-heading section-heading"><div><p className="eyebrow"><span /> PILIHAN UNTUK KEBUN ANDA</p><h2 className="section-title">Dari benih kecil,<br /><em>tumbuh banyak kemungkinan.</em></h2></div><p className="section-description">Temukan kebutuhan pertanian Anda.<br />Pilih produknya, diskusikan bersama kami,<br />lalu mulai langkah pertama.</p></div>
      <div className="catalog-controls">
        <div className="category-tabs" role="group" aria-label="Filter kategori produk">{categories.map(item => <Button key={item} className="category-tab" aria-pressed={category === item} data-active={category === item} onClick={() => setCategory(item)}>{item}{item === "Semua produk" && <span>{products.length}</span>}</Button>)}</div>
        <div className="search-field"><Search size={18} /><Input aria-label="Cari produk atau SKU" value={query} onChange={e => setQuery(e.target.value)} placeholder="Cari kebutuhan Anda…" />{query && <Button className="icon-button" aria-label="Hapus pencarian" onClick={() => setQuery("")}><X size={15} /></Button>}</div>
      </div>
      <div className="catalog-status"><p role="status" aria-live="polite">Menampilkan {filtered.length} dari {products.length} produk</p><span><SlidersHorizontal size={13} /> Katalog pilihan</span></div>
      <div className="catalog-grid">
        {filtered.map(product => <Dialog.Root key={product.sku}><article className="product-card" data-sku={product.sku}>
          <div className="product-image" style={{ backgroundColor: product.color }}><span className="product-category">{product.category}</span><ProductArt product={product} /><Dialog.Trigger className="product-open" aria-label={`Lihat detail ${product.name}`}><ArrowUpRight size={21} /></Dialog.Trigger></div>
          <div className="product-meta"><p className="product-sku">{product.sku}</p><h3 className="product-title"><Dialog.Trigger>{product.name}</Dialog.Trigger></h3><p className="product-description">{product.description}</p><div className="product-footer"><span className="product-price">Tanya harga</span><Dialog.Trigger className="product-link">Lihat produk <ArrowUpRight size={15} /></Dialog.Trigger></div></div>
        </article><Dialog.Portal><Dialog.Backdrop className="dialog-backdrop" /><Dialog.Viewport className="dialog-viewport"><Dialog.Popup className="dialog-popup"><Dialog.Close className="dialog-close icon-button" aria-label="Tutup detail produk"><X size={21} /></Dialog.Close><ProductDetails product={product} /></Dialog.Popup></Dialog.Viewport></Dialog.Portal></Dialog.Root>)}
      </div>
      {filtered.length === 0 && <div className="empty-state"><Search size={30} /><h3>Produknya belum ditemukan.</h3><p>Coba kata kunci lain atau lihat semua kategori.</p><Button className="button-outline" onClick={() => {setCategory("Semua produk");setQuery("");}}>Tampilkan semua produk</Button></div>}
      <p className="catalog-note"><Info size={17} /><span>Katalog awal berisi 10 contoh produk. Ilustrasi, varian, harga, dan ketersediaan dikonfirmasi bersama tim melalui WhatsApp.</span></p>
    </div>
  </section>;
}
