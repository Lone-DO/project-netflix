<!-- eslint-disable unicorn/prefer-number-properties -->
<script lang='ts' setup>
defineProps<{ isOpen: boolean }>();
type FieldValueType = null | number | undefined;
const form = useTemplateRef('form');
const pinCode = ref<(null | number)[]>([null, null, null, null]);
const initialValues = { 0: null, 1: null, 2: null, 3: null };
async function onSubmit(data?: any) {
  const values = data as { 0: FieldValueType; 1: FieldValueType; 2: FieldValueType; 3: FieldValueType };
  const pin = Object.keys(values).reduce((set, key) => `${set}${values[key as keyof object]}`, '');
  // eslint-disable-next-line no-console
  console.log({ values, data, pin });
}

function nextChild(element: HTMLInputElement, index: number) {
  if (isNaN(element.value as unknown as number)) {
    /** WHEN INPUT IS INVALID NUMBER, FORCE CLEAR */
    form.value?.setFieldValue(String(index), null);
  }
  else if (element.value) {
    const field = element.parentElement;
    const next = field?.nextElementSibling;
    /** WHEN NEXT SIBLING EXIST, AUTO SET FOCUS */
    if (next) {
      const nextInput = next.lastElementChild as HTMLInputElement;
      nextInput?.focus?.();
    }
    /** WHEN NO INPUT SIBLINGS REMAIN, SUBMIT FORM */
    else {
      onSubmit(form.value?.values);
    }
  }
}
</script>

<template>
  <AppDialog :is-open>
    <section id="auth-dialog" class="flex flex-col gap-4 text-center">
      <h3 class="text-neutral-300">
        Profile Lock is currently on
      </h3>
      <h1 class="text-2xl">
        Enter your PIN to access this profile.
      </h1>
      <Form
        ref="form"
        :initial-values
        class="flex gap-1 justify-center"
        @submit.prevent="onSubmit"
      >
        <AppFormField
          v-for="(_, index) in pinCode"
          :key="`pin-${index}`"
          v-model="pinCode[index]"
          :name="String(index)"
          :maxlength="1"
          required
          pattern="[0-9]"
          classes="w-10 h-10 border-2 border-white text-center text-2xl"
          @input="nextChild($event, index)"
        />
      </Form>
      <span class="text-neutral-500 cursor-not-allowed">Forgot PIN?</span>
    </section>
  </AppDialog>
</template>
