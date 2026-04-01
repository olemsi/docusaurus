<script setup lang="ts">
const props = defineProps<{
  variant?: 'gate' | 'pp' | 'full'
}>()

const middleLabel = props.variant === 'gate' ? 'Host-to-host API' : props.variant === 'pp' ? 'Payment Widget' : null
</script>

<template>
  <div class="diagram-wrap">
    <svg class="diagram" viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow-fwd" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
        </marker>
        <marker id="arrow-back" markerWidth="8" markerHeight="6" refX="0" refY="3" orient="auto-start-reverse">
          <path d="M0,0 L8,3 L0,6" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
        </marker>
      </defs>

      <!-- Column backgrounds -->
      <rect x="0" y="0" width="160" height="220" rx="0" fill="#111" opacity="0.5"/>
      <rect x="160" y="0" width="160" height="220" rx="0" fill="#0d0d0d" opacity="0.5"/>
      <rect x="320" y="0" width="160" height="220" rx="0" fill="#111" opacity="0.5"/>
      <rect x="480" y="0" width="160" height="220" rx="0" fill="#0d0d0d" opacity="0.5"/>
      <rect x="640" y="0" width="160" height="220" rx="0" fill="#111" opacity="0.5"/>

      <!-- Node: Your customers -->
      <g transform="translate(80, 50)">
        <rect x="-28" y="-28" width="56" height="56" rx="12" fill="#1a1a1a" stroke="#2a2a2a"/>
        <svg x="-12" y="-12" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1.5">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
        </svg>
        <text y="48" text-anchor="middle" class="label">Your</text>
        <text y="62" text-anchor="middle" class="label">customers</text>
      </g>

      <!-- Node: Your web service -->
      <g transform="translate(240, 50)">
        <rect x="-28" y="-28" width="56" height="56" rx="12" fill="#1a1a1a" stroke="#2a2a2a"/>
        <svg x="-12" y="-12" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
        </svg>
        <text y="48" text-anchor="middle" class="label">Your</text>
        <text y="62" text-anchor="middle" class="label">web service</text>
      </g>

      <!-- Node: Host-to-host API / Payment Widget -->
      <g transform="translate(400, 50)">
        <!-- PP badge (top) -->
        <g v-if="!variant || variant === 'full'">
          <rect x="-40" y="-75" width="80" height="30" rx="8" fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.2)"/>
          <text y="-55" text-anchor="middle" class="badge-text">Payment Widget</text>
        </g>
        <g v-if="variant === 'pp'">
          <rect x="-50" y="-75" width="100" height="30" rx="8" fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.2)"/>
          <text y="-55" text-anchor="middle" class="badge-text">Payment Widget</text>
        </g>
        <!-- Main icon -->
        <rect x="-28" y="-28" width="56" height="56" rx="12" :fill="'rgba(59,130,246,0.1)'" :stroke="'rgba(59,130,246,0.3)'"/>
        <svg x="-12" y="-12" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.5">
          <path v-if="variant === 'pp'" d="M2 3h20v18H2zM2 9h20"/>
          <path v-else d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
        <!-- Label -->
        <text v-if="variant === 'gate'" y="48" text-anchor="middle" class="label label--accent">Host-to-host API</text>
        <text v-else-if="variant === 'pp'" y="48" text-anchor="middle" class="label label--accent">Payment Widget</text>
        <text v-else y="48" text-anchor="middle" class="label label--accent">Host-to-host API</text>
      </g>

      <!-- Node: Payment platform -->
      <g transform="translate(560, 50)">
        <rect x="-28" y="-28" width="56" height="56" rx="12" fill="#1a1a1a" stroke="#2a2a2a"/>
        <svg x="-12" y="-12" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1.5">
          <circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2"/>
        </svg>
        <text y="48" text-anchor="middle" class="label">Payment</text>
        <text y="62" text-anchor="middle" class="label">platform</text>
      </g>

      <!-- Node: Payment system -->
      <g transform="translate(720, 50)">
        <rect x="-28" y="-28" width="56" height="56" rx="12" fill="#1a1a1a" stroke="#2a2a2a"/>
        <svg x="-12" y="-12" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1.5">
          <rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>
        </svg>
        <text y="48" text-anchor="middle" class="label">Payment</text>
        <text y="62" text-anchor="middle" class="label">system</text>
      </g>

      <!-- Forward arrows (request flow) -->
      <line x1="120" y1="140" x2="200" y2="140" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow-fwd)"/>
      <line x1="280" y1="140" x2="355" y2="140" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow-fwd)"/>
      <line x1="440" y1="140" x2="520" y2="140" stroke="#3b82f6" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#arrow-fwd)"/>
      <line x1="600" y1="140" x2="680" y2="140" stroke="#3b82f6" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#arrow-fwd)"/>

      <!-- U-turn at payment system -->
      <path d="M750,140 Q780,140 780,160 Q780,180 750,180" fill="none" stroke="#3b82f6" stroke-width="2"/>

      <!-- Return arrows (callback flow — right to left) -->
      <line x1="120" y1="180" x2="200" y2="180" stroke="#3b82f6" stroke-width="2" marker-start="url(#arrow-back)"/>
      <line x1="280" y1="180" x2="355" y2="180" stroke="#3b82f6" stroke-width="2" stroke-dasharray="6,4" marker-start="url(#arrow-back)"/>
      <line x1="440" y1="180" x2="520" y2="180" stroke="#3b82f6" stroke-width="2" stroke-dasharray="6,4" marker-start="url(#arrow-back)"/>
      <line x1="600" y1="180" x2="680" y2="180" stroke="#3b82f6" stroke-width="2" stroke-dasharray="6,4" marker-start="url(#arrow-back)"/>

      <!-- Dashboard row -->
      <rect v-if="!variant || variant === 'full' || variant === 'gate'" x="160" y="230" width="160" height="50" rx="0" fill="#0d0d0d" opacity="0.5"/>
      <rect v-if="!variant || variant === 'full' || variant === 'gate'" x="320" y="230" width="160" height="50" rx="0" fill="#111" opacity="0.5"/>
      <g v-if="!variant || variant === 'full' || variant === 'gate'" transform="translate(240, 255)">
        <text text-anchor="middle" class="label-sm">Your employees</text>
      </g>
      <g v-if="!variant || variant === 'full' || variant === 'gate'" transform="translate(400, 255)">
        <text text-anchor="middle" class="label-sm label--accent">Dashboard</text>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.diagram-wrap {
  margin: 1.5rem 0;
  background: #0a0a0a;
  border: 1px solid #1a1a1a;
  border-radius: 12px;
  padding: 1rem;
  overflow: hidden;
}

.diagram {
  width: 100%;
  height: auto;
  display: block;
}

.label {
  font-size: 12px;
  font-weight: 500;
  fill: #666;
  font-family: 'Inter', -apple-system, sans-serif;
}

.label--accent {
  fill: #60a5fa;
  font-weight: 600;
}

.label-sm {
  font-size: 11px;
  font-weight: 500;
  fill: #555;
  font-family: 'Inter', -apple-system, sans-serif;
}

.badge-text {
  font-size: 10px;
  font-weight: 600;
  fill: #60a5fa;
  font-family: 'Inter', -apple-system, sans-serif;
}
</style>
