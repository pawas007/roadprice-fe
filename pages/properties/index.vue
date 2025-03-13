<script setup>
import ListingItem from "~/components/listing-item.vue";

useHead({
    title: "Ricerca",
});
//import Filters from '~/shared/components/filters.vue';

const { status, data: posts } = useFetch('listings?per_page=500', {
  lazy: true
})
</script>

<template>
    <UContainer>

      <!-- Caricamento -->
      <div v-if="status === 'pending'" class="text-center my-4">
        Loading ...
      </div>


      <div class="mt-12 grid grid-cols-1 gap-4" v-else>
        <div v-for="post in posts.data" :key="post.id">
          <!-- <NuxtLink :to="`/properties/${post.id}`"> -->
            <ListingItem :post="post"/>
          <!-- </NuxtLink> -->
        </div>
      </div>
    </UContainer>
  </template>


