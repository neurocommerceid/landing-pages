import type { Product } from "@/lib/catalog";

function Plant({ fruit = false }: { fruit?: boolean }) {
  return <g>
    <path d="M160 187 Q154 135 165 73" stroke="#416444" strokeWidth="5" fill="none" />
    <path d="M160 143 C111 145 106 109 111 103 C144 102 160 119 160 143Z" fill="#62834a" />
    <path d="M161 121 C192 120 213 94 204 78 C177 81 163 99 161 121Z" fill="#396647" />
    <path d="M163 97 C138 91 137 69 142 58 C163 65 170 78 163 97Z" fill="#769653" />
    <path d="M157 158 C181 160 195 145 197 134 C178 132 163 142 157 158Z" fill="#7f9a57" />
    <path d="M163 81 C180 76 185 61 180 49 C164 54 159 68 163 81Z" fill="#416e46" />
    {fruit && <><circle cx="133" cy="134" r="9" fill="#b95e42" /><circle cx="184" cy="118" r="8" fill="#c87546" /></>}
  </g>;
}

export function ProductArt({ product }: { product: Product }) {
  return <svg viewBox="0 0 320 270" role="img" aria-label={`Illustration de ${product.name}`.replace("Illustration de", "Ilustrasi")}>
    <ellipse cx="160" cy="237" rx="74" ry="9" fill="#193c2d" opacity=".08" />
    {product.art === "seeds" && <g transform="rotate(-7 160 140)">
      <path d="M101 40H219V232H101Z" fill="#faf8ed" stroke="#d6d2bf" />
      <path d="M101 40H219V54H101ZM101 218H219V232H101Z" fill="#ddd9c6" />
      <path d="M108 47H212M108 224H212" stroke="#c0baa4" strokeDasharray="2 3" />
      <text x="160" y="77" textAnchor="middle" fill="#395b40" fontFamily="sans-serif" fontSize="9" letterSpacing="2">AGRIXENTRIS</text>
      <circle cx="160" cy="133" r="37" fill={product.color} />
      {product.label === "CABAI" ? <g><path d="M162 104Q157 119 145 130Q125 151 154 165Q142 148 166 136Q180 120 167 109Z" fill={product.accent} /><path d="M164 110Q166 99 178 97" fill="none" stroke="#4e6a40" strokeWidth="5" strokeLinecap="round" /></g> : <g><path d="M158 158Q137 132 144 111Q161 102 166 130Q171 109 182 113Q191 134 163 160" fill={product.accent} /><path d="M160 160L161 125" stroke="#adc183" strokeWidth="5" /></g>}
      <text x="160" y="191" textAnchor="middle" fill="#2e4d35" fontFamily="sans-serif" fontWeight="bold" fontSize="13" letterSpacing="2">{product.label}</text>
      <text x="160" y="205" textAnchor="middle" fill="#7e8575" fontFamily="sans-serif" fontSize="7" letterSpacing="1">BENIH PILIHAN</text>
    </g>}
    {product.art === "seedling" && <g><Plant fruit={product.label === "TOMAT"} /><path d="M121 179H198L188 235H132Z" fill="#363f33" /><ellipse cx="159" cy="180" rx="38" ry="8" fill="#524335" /><path d="M139 192L144 228M178 192L174 228" stroke="#66705b" strokeWidth="2" /><path d="M158 183V166" stroke="#416444" strokeWidth="4" /></g>}
    {product.art === "bag" && <g><path d="M115 43Q160 51 205 43L216 224Q161 240 104 224Z" fill="#cfb890" /><path d="M115 43Q161 51 205 43L205 60Q160 67 114 60Z" fill="#b79e75" /><path d="M111 98H210L213 202H107Z" fill="#f4efde" /><path d="M144 146Q140 128 129 123Q152 117 160 140Q164 114 186 116Q188 137 162 148V162" fill={product.accent} /><text x="160" y="184" textAnchor="middle" fill="#435238" fontFamily="sans-serif" fontSize="10" fontWeight="bold" letterSpacing="1">{product.label}</text><path d="M119 213Q160 225 200 213" fill="none" stroke="#a48d64" /></g>}
    {product.art === "bottle" && <g><path d="M143 46H179V75Q204 81 205 104V226Q177 237 119 226V104Q121 82 143 75Z" fill="#f3f0dd" stroke="#d8d8c8" /><rect x="140" y="37" width="42" height="28" rx="4" fill={product.accent} /><path d="M143 42V60M150 42V60M157 42V60M164 42V60M171 42V60M178 42V60" stroke="#b5c0a3" /><path d="M120 116H204V195H120Z" fill={product.accent} /><path d="M162 128Q144 149 151 158Q166 170 175 154Q178 146 162 128Z" fill="#dce7ba" /><text x="162" y="180" textAnchor="middle" fill="#fffbed" fontFamily="sans-serif" fontSize="10" letterSpacing="2">NUTRISI</text></g>}
    {product.art === "tray" && <g><path d="M71 143L220 116L265 186L110 226Z" fill="#2d4337" /><path d="M110 226V237L264 196V186Z" fill="#1d3026" /><path d="M71 143V156L110 237V226Z" fill="#49624d" />{Array.from({length:12},(_,i)=>{const row=Math.floor(i/4),col=i%4;const x=95+col*34+row*12,y=151-col*6+row*23;return <g key={i}><ellipse cx={x} cy={y} rx="11" ry="7" fill="#172d23" /><path d={`M${x} ${y}v-18m0 12q-15-5-10-14q12 0 10 14m0-7q6-14 13-11q2 10-13 11`} fill="#809952" stroke="#6f8a45" strokeWidth="2" /></g>})}</g>}
    {product.art === "pot" && <g><Plant /><path d="M108 166H211L194 231Q160 246 126 231Z" fill={product.accent} /><path d="M108 166H211V184Q160 196 108 184Z" fill="#bd805e" /><ellipse cx="159" cy="166" rx="52" ry="10" fill="#d19a78" /><ellipse cx="159" cy="166" rx="43" ry="6" fill="#594536" /><path d="M160 169V157" stroke="#416444" strokeWidth="4" /></g>}
    {product.art === "sprayer" && <g><path d="M143 100H186L198 137V225Q153 239 112 225V140Z" fill={product.accent} /><path d="M142 82H187V112H142Z" fill="#344d38" /><path d="M154 81V58H164V81M132 54H186" stroke="#344d38" strokeWidth="9" strokeLinecap="round" /><path d="M184 117Q227 109 227 150Q228 176 198 174" fill="none" stroke="#344d38" strokeWidth="11" /><path d="M143 90H111L103 99H89V84H141Z" fill="#344d38" /><path d="M126 151H184V203H126Z" fill="#dce6b9" /><path d="M149 187V169Q129 164 139 154Q153 154 153 169Q158 154 170 158Q172 170 153 174" fill="#5d7947" /></g>}
  </svg>;
}
