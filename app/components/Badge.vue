<template>
  <span class="badge">
    <span v-if="$slots.leading || leadingIcon" class="badge-leading">
      <slot name="leading">
        <Icon v-if="leadingIcon" :name="leadingIcon" />
      </slot>
    </span>
    <span class="badge-content">
      <slot>
        {{ text }}
      </slot>
    </span>
    <span v-if="$slots.trailing || trailingIcon" class="badge-trailing">
      <slot name="trailing">
        <Icon v-if="trailingIcon" :name="trailingIcon" />
      </slot>
    </span>
  </span>
</template>

<script setup lang="ts">
const { text } = defineProps<{
  text?: string;
  leadingIcon?: string;
  trailingIcon?: string;
}>();
</script>

<style scoped>
.badge {
  color: inherit;
  display: flex;
  border: 2px solid currentColor;
  margin-right: var(--space-1);
}

.badge-content {
  display: block;
  padding: var(--space-1) var(--space-2);
}

.badge-leading {
  display: flex;
  align-items: center;
  padding: var(--space-1) var(--space-2);
  border-right: 2px solid currentColor;
}

.badge-trailing {
  display: flex;
  align-items: center;
  padding: var(--space-1) var(--space-2);
  border-left: 2px solid currentColor;
}
</style>
