<script setup>
import * as z from 'zod'

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters')
})


const state = reactive({
  email: undefined,
  password: undefined
})

const toast = useToast()
async function onSubmit(event) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}
</script>

<template>
  <UContainer>
    <UModal title="Accedi">
      <UButton label="Open" color="neutral" variant="subtle" />

      <template #body>
        <UForm :schema="schema" :state="state" class="space-y-4 !w-full" @submit="onSubmit">
          <UFormField label="Email" name="email" class="w-full">
            <UInput v-model="state.email" />
          </UFormField>

          <UFormField label="Password" name="password" class="w-full">
            <UInput v-model="state.password" type="password" />
          </UFormField>

          <UButton type="submit">
            Submit
          </UButton>
        </UForm>
      </template>
    </UModal>


  </UContainer>
</template>
