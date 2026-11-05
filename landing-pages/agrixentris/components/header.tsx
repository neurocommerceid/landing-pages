"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/catalog";

export function Header() {
  const [open, setOpen] = useState(false);
  const links = [["Tentang kami", "#tentang"], ["Layanan", "#layanan"], ["Katalog produk", "#katalog"], ["Kontak", "#kontak"]];
  return <header className="site-header"><div className="container header-inner">
    <a className="brand" href="#beranda" aria-label="AgriXentris Nusantara — beranda"><img src="/images/logo.png" alt="AgriXentris Nusantara" width="105" height="76" style={{ objectFit: "contain" }} /><span className="brand-tagline">BERTUMBUH BERSAMA<br />ALAM & NUSANTARA</span></a>
    <nav className="desktop-nav" aria-label="Navigasi utama">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
    <div className="header-actions"><Button className="button-primary button-sm" nativeButton={false} render={<a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" />}>Mari berdiskusi <ArrowUpRight size={16} /></Button><Button className="icon-button mobile-toggle" aria-label={open ? "Tutup menu" : "Buka menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(v => !v)}>{open ? <X /> : <Menu />}</Button></div>
  </div>{open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Navigasi seluler" onKeyDown={event => { if (event.key === "Escape") { setOpen(false); document.querySelector<HTMLButtonElement>(".mobile-toggle")?.focus(); } }}>{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={17} /></a>)}</nav>}</header>;
}
