<script lang='ts' setup>
import type { DropdownItem } from '~/lib/types';

defineProps<{
  label: string;
  items: DropdownItem[];
  listClasses?: string[];
}>();

const isOpen = ref(false);
const appStore = useAppStore();
const dropdown = useTemplateRef('dropdown');
function selectAction(item?: DropdownItem) {
  dropdown.value?.removeAttribute('open');
  return item?.onClick?.();
}

function getIconName(item: DropdownItem) {
  /** WHEN Item has parsed icon name, use that, OTHERWISE use item.icon as key for appStore.icons */
  return (item.icon.includes(':')) ? item.icon : appStore.icons[item.icon as keyof object];
}

function syncAttribute() {
  /** WHEN dropdown is toggled, Manually trigger sync to update chevron icon */
  isOpen.value = Boolean(!dropdown.value?.hasAttribute('open'));
}
</script>

<template>
  <!-- https://daisyui.com/components/dropdown/#dropdown-using-details-and-summary -->
  <details ref="dropdown" class="dropdown">
    <summary class="p-0 menu" @click.stop="syncAttribute()">
      <p class="flex gap-1 items-center text-sm">
        <slot :is-open>
          {{ label }}
        </slot>
        <Icon :name="appStore.icons[isOpen ? 'chevron-up' : 'chevron-down']" />
      </p>
    </summary>
    <ul class="menu dropdown-content bg-base-200 rounded-box z-1 p-2 shadow-sm" :class="listClasses">
      <li v-for="(item, index) in items" :key="index">
        <NuxtLink
          :to="item?.to"
          @click="selectAction(item)"
        >
          <Icon
            :name="getIconName(item)"
            class="text-(--btn-fg)"
            :size="item.size || '20'"
          />
          <span class="text-(--btn-fg)">{{ item.label }}</span>
        </NuxtLink>
      </li>
    </ul>
  </details>
</template>
