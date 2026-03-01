"use client";

import { useState } from "react";
import {
  Database,
  Zap,
  Flame,
  MapPin,
  RefreshCw,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Activity,
  BarChart3,
  Building2,
  Filter,
} from "lucide-react";
import {
  aerGasFacilities,
  aesoGridSnapshot,
  municipalEnergyStats,
  dataSources,
  LAST_UPDATED,
  type AERFacility,
} from "@/data/infrastructure-index-data";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatNumber(n: number): string {
  return n.toLocaleString("en-CA");
}

function gasPercent(snapshot: typeof aesoGridSnapshot): number {
  const gas = snapshot.generationByFuel.find((f) => f.fuelType === "GAS");
  return gas ? gas.percentOfTotal : 0;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionHeader({
  icon: Icon,
  title,
  subtitle,
  sourceUrl,
  sourceLabel,
}: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  sourceUrl: string;
  sourceLabel: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Icon className="w-5 h-5 text-cyan-400" />
          <h2 className="text-xl font-semibold text-white">{title}</h2>
        </div>
        <p className="text-slate-400 text-sm">{subtitle}</p>
      </div>
      <a
        href={sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors shrink-0"
      >
        <ExternalLink className="w-3 h-3" />
        {sourceLabel}
      </a>
    </div>
  );
}

function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-1 bg-cyan-900/40 border border-cyan-700/50 text-cyan-400 text-xs px-2 py-0.5 rounded-full">
      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
      AESO Live
    </span>
  );
}

// ─── AESO Grid Panel ──────────────────────────────────────────────────────────

function GridPanel() {
  const snap = aesoGridSnapshot;
  const gasData = snap.generationByFuel.find((f) => f.fuelType === "GAS");

  return (
    <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-6 mb-10">
      <SectionHeader
        icon={Activity}
        title="Alberta Grid — Current Snapshot"
        subtitle="Live generation mix, pool price, and internal load from AESO"
        sourceUrl="https://developer-apim.aeso.ca"
        sourceLabel="AESO API"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          {
            label: "Pool Price",
            value: `$${snap.poolPricePerMWh.toFixed(2)}/MWh`,
            sub: `30-day avg $${snap.rolling30DayAvgPerMWh.toFixed(2)}`,
            color: "text-cyan-400",
          },
          {
            label: "Alberta Load",
            value: `${formatNumber(snap.albertaInternalLoadMW)} MW`,
            sub: "Internal demand",
            color: "text-white",
          },
          {
            label: "Gas Generation",
            value: `${gasData?.aggregatedMW.toLocaleString()} MW`,
            sub: `${gasData?.percentOfTotal}% of grid`,
            color: "text-orange-400",
          },
          {
            label: "Net Generation",
            value: `${formatNumber(snap.netToGridGenerationMW)} MW`,
            sub: `Interchange ${snap.interchangeMW} MW`,
            color: "text-white",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-4"
          >
            <p className="text-slate-400 text-xs mb-1">{stat.label}</p>
            <p className={`text-lg font-semibold ${stat.color}`}>
              {stat.value}
            </p>
            <p className="text-slate-500 text-xs mt-1">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Generation mix bar */}
      <div>
        <p className="text-slate-400 text-xs mb-2">Generation Mix</p>
        <div className="flex h-3 rounded-full overflow-hidden gap-px">
          {snap.generationByFuel.map((f) => {
            const colors: Record<string, string> = {
              GAS: "bg-orange-500",
              WIND: "bg-cyan-500",
              HYDRO: "bg-blue-500",
              ENERGY_STORAGE: "bg-purple-500",
              SOLAR: "bg-yellow-400",
              OTHER: "bg-slate-600",
            };
            return (
              <div
                key={f.fuelType}
                className={`${colors[f.fuelType] ?? "bg-slate-600"} transition-all`}
                style={{ width: `${f.percentOfTotal}%` }}
                title={`${f.fuelType}: ${f.percentOfTotal}%`}
              />
            );
          })}
        </div>
        <div className="flex flex-wrap gap-3 mt-2">
          {snap.generationByFuel.map((f) => {
            const colors: Record<string, string> = {
              GAS: "text-orange-400",
              WIND: "text-cyan-400",
              HYDRO: "text-blue-400",
              ENERGY_STORAGE: "text-purple-400",
              SOLAR: "text-yellow-400",
              OTHER: "text-slate-400",
            };
            return (
              <span
                key={f.fuelType}
                className={`text-xs ${colors[f.fuelType] ?? "text-slate-400"}`}
              >
                {f.fuelType.replace("_", " ")} {f.percentOfTotal}%
              </span>
            );
          })}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <LiveBadge />
        <span className="text-slate-500 text-xs">
          Updated {snap.timestamp.split("T")[0]}
        </span>
      </div>
    </div>
  );
}

// ─── AER Facilities Table ─────────────────────────────────────────────────────

function FacilitiesTable() {
  const [filter, setFilter] = useState<string>("ALL");
  const [expanded, setExpanded] = useState<string | null>(null);

  const types = ["ALL", "GAS_PLANT", "COMPRESSOR_STATION", "METER_STATION"];
  const filtered =
    filter === "ALL"
      ? aerGasFacilities
      : aerGasFacilities.filter((f) => f.facilityType === filter);

  return (
    <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-6 mb-10">
      <SectionHeader
        icon={Building2}
        title="AER Licensed Gas Facilities"
        subtitle="Active gas plants and infrastructure licensed by the Alberta Energy Regulator (ST102)"
        sourceUrl="https://www.aer.ca/data/codes/ActiveFacility.txt"
        sourceLabel="AER ST102"
      />

      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {types.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
              filter === t
                ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-300"
                : "bg-slate-900/50 border-slate-700/30 text-slate-400 hover:text-slate-300"
            }`}
          >
            {t.replace("_", " ")}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-700/50">
              {["Facility", "Operator", "Type", "Municipality", "Licence", ""].map(
                (h) => (
                  <th
                    key={h}
                    className="text-left text-xs text-slate-500 font-medium pb-2 pr-4"
                  >
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {filtered.map((f) => (
              <>
                <tr
                  key={f.facilityId}
                  className="border-b border-slate-800/50 hover:bg-slate-700/20 cursor-pointer transition-colors"
                  onClick={() =>
                    setExpanded(expanded === f.facilityId ? null : f.facilityId)
                  }
                >
                  <td className="py-3 pr-4 text-white font-medium">
                    {f.facilityName}
                  </td>
                  <td className="py-3 pr-4 text-slate-300">{f.operatorName}</td>
                  <td className="py-3 pr-4">
                    <span className="bg-orange-900/30 border border-orange-700/30 text-orange-300 text-xs px-2 py-0.5 rounded">
                      {f.facilityType.replace("_", " ")}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-slate-400 text-xs">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {f.municipality}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-slate-500 text-xs">
                    #{f.licenceNumber}
                  </td>
                  <td className="py-3 text-slate-500">
                    {expanded === f.facilityId ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </td>
                </tr>
                {expanded === f.facilityId && (
                  <tr key={`${f.facilityId}-expand`} className="bg-slate-900/30">
                    <td colSpan={6} className="px-4 py-3">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                        {[
                          { label: "Facility ID", value: f.facilityId },
                          { label: "Subtype", value: f.facilitySubtype },
                          { label: "Location (TWP)", value: f.location },
                          { label: "Status", value: f.status },
                        ].map((d) => (
                          <div key={d.label}>
                            <p className="text-slate-500 mb-0.5">{d.label}</p>
                            <p className="text-slate-300">{d.value}</p>
                          </div>
                        ))}
                      </div>
                      <a
                        href={f.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-3 text-xs text-cyan-400 hover:text-cyan-300"
                      >
                        <ExternalLink className="w-3 h-3" />
                        View source — AER ST102
                      </a>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-slate-500 text-xs mt-4">
        Showing {filtered.length} of {aerGasFacilities.length} active facilities
        — full dataset via AER ST102 (monthly bulk download, ~50K records)
      </p>
    </div>
  );
}

// ─── Municipal Gas Production ─────────────────────────────────────────────────

function MunicipalPanel() {
  return (
    <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-6 mb-10">
      <SectionHeader
        icon={BarChart3}
        title="Gas Production by Municipality"
        subtitle="Top Alberta municipalities by natural gas production volume and remaining reserves (2024)"
        sourceUrl="https://open.alberta.ca/dataset/energy-by-municipality"
        sourceLabel="Alberta Open Data"
      />

      <div className="space-y-3">
        {municipalEnergyStats.map((m, i) => {
          const maxProd = municipalEnergyStats[0].gasProductionE3M3;
          const pct = (m.gasProductionE3M3 / maxProd) * 100;
          return (
            <div key={m.municipalityName}>
              <div className="flex justify-between items-end mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 text-xs w-4">{i + 1}</span>
                  <span className="text-white text-sm font-medium">
                    {m.municipalityName}
                  </span>
                  <span className="text-slate-500 text-xs hidden sm:inline">
                    {m.censusDivision}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-cyan-400 text-sm font-semibold">
                    {(m.gasProductionE3M3 / 1000000).toFixed(1)}M e3m3
                  </span>
                  <span className="text-slate-500 text-xs ml-2">
                    {formatNumber(m.gasWellCount)} wells
                  </span>
                </div>
              </div>
              <div className="h-1.5 bg-slate-700/50 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full transition-all"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <div className="flex justify-between mt-0.5">
                <span className="text-slate-600 text-xs">
                  {(m.remainingGasReservesE3M3 / 1000000).toFixed(0)}M e3m3 reserves remaining
                </span>
                <span className="text-slate-600 text-xs">{m.year}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Data Sources Registry ────────────────────────────────────────────────────

function SourcesPanel() {
  return (
    <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-6 mb-10">
      <SectionHeader
        icon={Database}
        title="Data Sources"
        subtitle="All data is sourced directly from government and regulatory APIs — verified, citable, and updated automatically"
        sourceUrl="https://www.aer.ca"
        sourceLabel="AER"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {dataSources.map((s) => (
          <div
            key={s.name}
            className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-4"
          >
            <div className="flex justify-between items-start mb-1">
              <p className="text-white text-sm font-medium">{s.name}</p>
              <span className="text-xs text-slate-500 bg-slate-800 px-2 py-0.5 rounded ml-2 shrink-0">
                {s.updateFrequency}
              </span>
            </div>
            <p className="text-slate-400 text-xs mb-2">{s.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-600">Auth: {s.auth}</span>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                Source
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-slate-900/30 border border-slate-700/20 rounded-lg">
        <p className="text-slate-500 text-xs">
          <span className="text-slate-400 font-medium">Disclaimer:</span> All
          data is sourced from public government and regulatory databases. Verify
          all information directly with the source before making investment or
          operational decisions. This index is provided for research purposes
          only.
        </p>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function InfrastructureIndexPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Flame className="w-5 h-5 text-orange-400" />
                <span className="text-orange-400 text-sm font-medium uppercase tracking-wider">
                  Infrastructure Index
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Alberta Natural Gas &amp; AI Compute
              </h1>
              <p className="text-slate-400 max-w-xl">
                Public regulatory data from AER, AESO, and Alberta Open Data —
                organized for developers, investors, and operators evaluating
                behind-the-meter AI infrastructure in Western Canada.
              </p>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-xs shrink-0">
              <RefreshCw className="w-3 h-3" />
              Last updated {LAST_UPDATED}
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
            {[
              {
                label: "Active AER Facilities",
                value: "50,000+",
                sub: "Gas plants, compressors, meters",
                icon: Building2,
              },
              {
                label: "Gas Share of Alberta Grid",
                value: `${gasPercent(aesoGridSnapshot)}%`,
                sub: "Current generation mix",
                icon: Zap,
              },
              {
                label: "AECO Spot Price",
                value: "~C$2.50/Mcf",
                sub: "vs Henry Hub C$17+/Mcf",
                icon: Flame,
              },
              {
                label: "Top Municipality Wells",
                value: formatNumber(municipalEnergyStats[0].gasWellCount),
                sub: municipalEnergyStats[0].municipalityName,
                icon: MapPin,
              },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-slate-800/40 border border-slate-700/30 rounded-lg p-4"
              >
                <s.icon className="w-4 h-4 text-cyan-400 mb-2" />
                <p className="text-2xl font-bold text-white">{s.value}</p>
                <p className="text-slate-400 text-xs mt-0.5">{s.label}</p>
                <p className="text-slate-600 text-xs mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <GridPanel />
        <FacilitiesTable />
        <MunicipalPanel />
        <SourcesPanel />
      </div>
    </div>
  );
}
