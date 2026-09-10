import { createFileRoute } from "@tanstack/react-router";
import arena from "@/assets/kite-arena.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pipa Interativa — Batalha de Pipas ao Vivo" },
      {
        name: "description",
        content:
          "Jogo de pipa interativo em live: corte, rele e puxa. Ranking em tempo real, itens e batalha de pipas na laje.",
      },
      { property: "og:title", content: "Pipa Interativa — Batalha de Pipas ao Vivo" },
      {
        property: "og:description",
        content: "Batalha de pipas ao vivo com ranking, itens e cortes em tempo real.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const items = [
  { qty: "1x", title: "PIPA NORMAL", tone: "from-[#1f6feb] to-[#0b2d6b]", emoji: "🪁" },
  { qty: "50x", title: "CURAR +15 HP", tone: "from-[#7a1020] to-[#2b060d]", emoji: "❤️" },
  { qty: "1x", title: "PIPA COM CEROL", tone: "from-[#8a1b0f] to-[#2a0703]", emoji: "🪒" },
  { qty: "1x", title: "PIPA NORMAL", tone: "from-[#1f6feb] to-[#0b2d6b]", emoji: "🪁" },
  { qty: "1x", title: "PIPA GRANDE CHILENA", tone: "from-[#123a8a] to-[#050f2e]", emoji: "⚡" },
  { qty: "1x", title: "PIPA COM CEROL FINO", tone: "from-[#6b1a9c] to-[#210634]", emoji: "🧵" },
];

const rank = [
  { pos: "1º", name: "JEANZINHO_", cuts: 193 },
  { pos: "2º", name: "VICTOR", cuts: 173 },
  { pos: "3º", name: "✦ ·ᐟ vilos", cuts: 81 },
  { pos: "4º", name: "BEH BABY 🌻", cuts: 78 },
  { pos: "5º", name: "SASAH NAMORADA", cuts: 70 },
  { pos: "6º", name: "OSECHAS", cuts: 61 },
];

function Kite({ x, y, color, rot }: { x: number; y: number; color: string; rot: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <polygon points="0,-14 11,0 0,14 -11,0" fill={color} stroke="#0b0b0b" strokeWidth="1.5" />
      <line x1="0" y1="-14" x2="0" y2="14" stroke="#0b0b0b" strokeWidth="1" />
      <line x1="-11" y1="0" x2="11" y2="0" stroke="#0b0b0b" strokeWidth="1" />
    </g>
  );
}

function Player({ x, y, ring, hp = 0.8 }: { x: number; y: number; ring: string; hp?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="-16" y="-30" width="32" height="5" rx="2.5" fill="#00000080" />
      <rect x="-16" y="-30" width={32 * hp} height="5" rx="2.5" fill="#39ff5a" />
      <circle r="14" fill="#1b1b22" stroke={ring} strokeWidth="2.5" />
      <text textAnchor="middle" y="5" fontSize="13">
        🧑
      </text>
    </g>
  );
}

function Index() {
  return (
    <div className="flex min-h-screen justify-center bg-black">
      <div className="relative w-full max-w-[430px] bg-[#12040f] text-white">
        {/* status bar */}
        <div className="flex items-center justify-between px-4 pt-3 pb-1 text-[13px] text-white/90">
          <div className="flex items-center gap-2">
            <span className="font-medium">15:35</span>
            <span className="opacity-80">🌙 🔕 🎧</span>
          </div>
          <div className="flex items-center gap-1.5 opacity-90">
            <span>📶</span>
            <span>📡</span>
            <span className="rounded-[4px] border border-white/60 px-1 text-[10px]">43</span>
          </div>
        </div>

        {/* header */}
        <div className="flex items-center gap-2 px-3 py-2">
          <div className="relative">
            <div className="h-11 w-11 overflow-hidden rounded-full bg-[#2a2a33] ring-2 ring-white/20">
              <div className="flex h-full w-full items-center justify-center text-lg">🐼</div>
            </div>
          </div>
          <div className="min-w-0">
            <div className="truncate text-[17px] font-extrabold leading-tight">Loskampos</div>
            <div className="text-[12px] text-white/80">🤍 101.5K</div>
          </div>
          <button className="ml-1 rounded-full bg-[#fe2c55] px-4 py-1.5 text-[15px] font-semibold">
            + Seguir
          </button>
          <div className="ml-auto flex items-center gap-2">
            <div className="flex -space-x-2">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#e0a24a] text-[10px] ring-2 ring-[#12040f]">
                10+
              </span>
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#4a7fe0] text-[10px] ring-2 ring-[#12040f]">
                8
              </span>
            </div>
            <span className="text-[15px] font-semibold">148</span>
            <button aria-label="Fechar" className="pl-1 text-2xl leading-none text-white/90">
              ✕
            </button>
          </div>
        </div>

        {/* chips */}
        <div className="flex gap-2 px-3 pb-2 text-[13px]">
          <div className="flex flex-1 items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5">
            <span>💎</span>
            <span className="truncate">Top 20% da Liga D1</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5">
            <span>🪐</span>
            <span>x100</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5">
            <span className="truncate">Batalha de…</span>
            <span>🎀</span>
          </div>
        </div>

        {/* item cards */}
        <div className="grid grid-cols-6 gap-1.5 px-2">
          {items.map((it, i) => (
            <div key={i} className="text-center">
              <div className="mb-0.5 text-[10px] font-bold text-white/90">{it.qty}</div>
              <div
                className={`relative aspect-square overflow-hidden rounded-lg bg-gradient-to-b ${it.tone} ring-1 ring-white/40`}
              >
                <div className="absolute inset-x-0 top-0 bg-black/45 px-0.5 py-[1px] text-[6px] font-extrabold leading-[7px] tracking-tight">
                  {it.title}
                </div>
                <div className="grid h-full place-items-center pt-2 text-xl">{it.emoji}</div>
              </div>
            </div>
          ))}
        </div>

        {/* reaction row */}
        <div className="grid grid-cols-6 gap-1.5 px-2 py-2 text-center text-2xl">
          <span className="opacity-60">👤</span>
          <span>❤️</span>
          <span className="opacity-70">🔗</span>
          <span className="relative">
            💬
            <span className="absolute inset-x-0 bottom-0 text-[8px] font-bold">relo</span>
          </span>
          <span>🌹</span>
          <span>🌹</span>
        </div>

        {/* ticker */}
        <div className="overflow-hidden whitespace-nowrap bg-[#2a0a1f] py-1 text-[12px] font-semibold text-white/90">
          rtes) ⭐ 2º VICTOR (173 Cortes) ⭐ 3º ✦·ᐟ vilos (81 Cortes) ⭐ 4º BEH BABY 🌻 (78 Cortes) ⭐
          5º SASA
        </div>

        {/* game arena */}
        <div className="relative border-y-2 border-[#ff2d78]">
          <img
            src={arena}
            alt="Laje na favela com céu azul, palco da batalha de pipas"
            width={1024}
            height={768}
            className="block h-[430px] w-full object-cover"
          />
          <svg viewBox="0 0 430 430" className="absolute inset-0 h-full w-full">
            {/* lines from spools */}
            {[
              ["#ff2fa0", 40, 430, 60, 20],
              ["#ffe000", 205, 430, 155, 60],
              ["#ff2fa0", 300, 430, 355, 70],
              ["#ffffff", 120, 430, 260, 40],
              ["#ffffff", 260, 430, 120, 50],
            ].map(([c, x1, y1, x2, y2], i) => (
              <line
                key={i}
                x1={x1 as number}
                y1={y1 as number}
                x2={x2 as number}
                y2={y2 as number}
                stroke={c as string}
                strokeWidth="2"
                opacity="0.9"
              />
            ))}
            {/* rele curves with beads */}
            <path
              d="M20 200 C 90 90, 170 260, 250 120 S 400 90, 415 200"
              fill="none"
              stroke="#111"
              strokeWidth="1.6"
            />
            <path
              d="M30 300 C 120 250, 180 330, 300 250 S 400 300, 420 330"
              fill="none"
              stroke="#111"
              strokeWidth="1.6"
            />
            {Array.from({ length: 26 }).map((_, i) => (
              <circle
                key={i}
                cx={16 * i + 12}
                cy={200 + Math.sin(i / 1.7) * 70}
                r="3"
                fill={i % 3 === 0 ? "#ff2020" : "#fff"}
              />
            ))}
            <Kite x={70} y={35} color="#ff5a2d" rot={-20} />
            <Kite x={158} y={55} color="#39c15b" rot={12} />
            <Kite x={355} y={60} color="#2dd4ff" rot={-8} />
            <Player x={78} y={130} ring="#ffe000" hp={0.9} />
            <Player x={132} y={195} ring="#ffffff" hp={0.6} />
            <Player x={205} y={155} ring="#ff2d55" hp={1} />
            <Player x={330} y={175} ring="#39ff5a" hp={0.5} />
            <Player x={368} y={200} ring="#ffe000" hp={0.75} />
            <Player x={392} y={125} ring="#ffffff" hp={0.85} />
            <Player x={62} y={252} ring="#ffffff" hp={0.4} />
          </svg>
          <div className="absolute bottom-1 left-3 text-[13px] font-semibold text-white/70">
            @olivyz_azz
          </div>
        </div>

        {/* ranking */}
        <div className="bg-[#dff3ff] p-2 text-[#101418]">
          <div className="px-1 pb-1 text-[11px] font-extrabold">FICAÇÃO TOP 6 DA LIVE:</div>
          <div className="grid grid-cols-3 gap-1.5">
            {rank.map((r) => (
              <div
                key={r.pos}
                className="flex items-center gap-1 rounded-full bg-white/80 px-1.5 py-1 shadow-sm"
              >
                <span className="text-[11px] font-black text-[#0f6bcf]">{r.pos}</span>
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#ffd25a] text-[11px]">
                  🧑
                </span>
                <span className="min-w-0 flex-1 truncate text-[10px] font-bold">{r.name}</span>
                <span className="rounded bg-[#1fa14a] px-1 text-[9px] font-bold text-white">
                  {r.cuts} C
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* chat */}
        <div className="space-y-2 px-3 py-2 text-[14px]">
          <div className="flex items-start gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#7b3ff2] font-bold">
              M
            </span>
            <div>
              <div className="text-white/70">pvd_maria</div>
              <div className="font-medium">pipa</div>
            </div>
          </div>
          <div className="text-white/80">
            <span className="text-white/60">Vitor Nº 3</span> compartilhou o vídeo da LIVE
          </div>
        </div>

        {/* bottom bar */}
        <div className="flex items-center gap-2 px-3 pb-4 pt-1">
          <div className="flex flex-1 items-center rounded-full bg-white/12 px-4 py-2.5 text-white/60">
            Tipo...
            <span className="ml-auto">🙂</span>
          </div>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white/12">👥</span>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white/12">🌹</span>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white/12">🎁</span>
          <span className="relative grid h-10 w-10 place-items-center rounded-full bg-white/12">
            ↪️
            <span className="absolute -bottom-1 text-[10px] font-bold">392</span>
          </span>
        </div>
      </div>
    </div>
  );
}
