export const company = {
  name: "AgriXentris Nusantara",
  whatsapp: "6289607718976",
  phone: "0896 0771 8976",
  email: "agrixentris.nsntr@gmail.com",
  address: "Jl. Raya Rambutan, Sinarsari, Dramaga, Bogor",
};

export const categories = ["Semua produk", "Benih & bibit", "Nutrisi tanaman", "Peralatan"] as const;
export type Category = (typeof categories)[number];
export type Product = {
  sku: string;
  name: string;
  category: Exclude<Category, "Semua produk">;
  description: string;
  detail: string;
  art: "seeds" | "seedling" | "bag" | "bottle" | "tray" | "pot" | "sprayer";
  color: string;
  accent: string;
  label: string;
};

// Client-approved sample catalog. Replace with verified SKUs before publication.
// Illustrations are conceptual, not photographs of actual stock or packaging.
export const products: Product[] = [
  { sku: "AGN-001", name: "Benih Cabai", category: "Benih & bibit", description: "Awal yang baik untuk kebun cabai Anda.", detail: "Pilihan awal untuk kebutuhan budidaya cabai di pekarangan maupun lahan usaha. Diskusikan jenis, varietas, dan jumlah benih yang sesuai dengan rencana tanam Anda.", art: "seeds", color: "#e9e9d9", accent: "#a84f35", label: "CABAI" },
  { sku: "AGN-002", name: "Benih Pakcoy", category: "Benih & bibit", description: "Mulai menanam sayuran dari rumah.", detail: "Contoh pilihan benih sayuran untuk kebun rumah dan usaha tani. Hubungi tim untuk pilihan varietas, kemasan, serta kebutuhan media tanam.", art: "seeds", color: "#e5ecdf", accent: "#487644", label: "PAKCOY" },
  { sku: "AGN-003", name: "Bibit Cabai", category: "Benih & bibit", description: "Temukan bibit untuk rencana tanam Anda.", detail: "Konsultasikan kebutuhan bibit cabai berdasarkan kondisi lahan dan rencana budidaya. Umur bibit, varietas, jumlah, serta pengiriman perlu dikonfirmasi dengan tim.", art: "seedling", color: "#eee9df", accent: "#56734c", label: "CABAI" },
  { sku: "AGN-004", name: "Bibit Tomat", category: "Benih & bibit", description: "Pilihan bibit untuk kebun hortikultura.", detail: "Contoh pilihan bibit hortikultura untuk kebutuhan kebun Anda. Tim dapat membantu mendiskusikan varietas, jumlah bibit, dan kesesuaian lokasi tanam.", art: "seedling", color: "#e6e9df", accent: "#bb6948", label: "TOMAT" },
  { sku: "AGN-005", name: "Pupuk Organik", category: "Nutrisi tanaman", description: "Lengkapi kebutuhan perawatan tanah.", detail: "Pilihan pupuk untuk didiskusikan sesuai kondisi tanah dan jenis tanaman. Komposisi, dosis penggunaan, ukuran kemasan, dan ketersediaan dikonfirmasi melalui tim.", art: "bag", color: "#eee8da", accent: "#87744a", label: "ORGANIK" },
  { sku: "AGN-006", name: "Nutrisi Hidroponik", category: "Nutrisi tanaman", description: "Dukung perawatan kebun hidroponik.", detail: "Contoh kebutuhan nutrisi untuk sistem hidroponik. Diskusikan jenis tanaman, tahap pertumbuhan, dan sistem budidaya untuk menentukan pilihan yang sesuai.", art: "bottle", color: "#e1e9e3", accent: "#477966", label: "NUTRISI" },
  { sku: "AGN-007", name: "Media Tanam", category: "Nutrisi tanaman", description: "Ruang tumbuh untuk akar tanaman.", detail: "Pilihan media untuk kebutuhan penyemaian atau penanaman. Komposisi dan kemasan dapat didiskusikan sesuai kebutuhan tanaman dan cara budidaya Anda.", art: "bag", color: "#e8e3d9", accent: "#986c49", label: "MEDIA TANAM" },
  { sku: "AGN-008", name: "Tray Semai", category: "Peralatan", description: "Buat proses penyemaian lebih tertata.", detail: "Peralatan untuk mengatur bibit selama proses penyemaian. Jumlah lubang, dimensi, bahan, serta jumlah pesanan dikonfirmasi dengan tim.", art: "tray", color: "#e3e7df", accent: "#4a6356", label: "TRAY SEMAI" },
  { sku: "AGN-009", name: "Pot Tanam", category: "Peralatan", description: "Sudut hijau dimulai dari satu pot.", detail: "Contoh pilihan wadah tanam untuk pekarangan dan kebun. Tanyakan ukuran, bahan, pilihan warna, serta kesesuaian dengan jenis tanaman Anda.", art: "pot", color: "#eee3d8", accent: "#a76a4d", label: "POT TANAM" },
  { sku: "AGN-010", name: "Sprayer Manual", category: "Peralatan", description: "Teman untuk perawatan kebun harian.", detail: "Pilihan alat bantu penyemprotan untuk kebutuhan perawatan tanaman. Kapasitas, jenis nozzle, bahan, dan petunjuk pemakaian perlu dikonfirmasi sebelum pemesanan.", art: "sprayer", color: "#e8e9da", accent: "#718253", label: "SPRAYER" },
];

export function whatsappUrl(product?: Product, quantity = 1) {
  const message = product
    ? `Halo AgriXentris Nusantara, saya tertarik dengan ${product.name} (${product.sku}), jumlah ${quantity} item. Mohon informasi harga, pilihan kemasan, ketersediaan, dan pengirimannya. Terima kasih.`
    : "Halo AgriXentris Nusantara, saya ingin berkonsultasi tentang produk dan layanan pertanian. Bisa dibantu?";
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}
