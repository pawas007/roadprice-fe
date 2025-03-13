<script setup lang="ts">
import {useRoute} from "vue-router";
import Loader from "~/components/Global/Loader.vue";
import {$fetch} from "ofetch";


const route = useRoute();

const {data: post, status} = await useAsyncData(
    `post-${route.params.slug}`,
    () => $fetch(`https://resthotels.it/api/listings/${route.params.slug}`)
    // Need to implement BASE url
);

useSeo(post.value.data.title, post.value.data.description)

</script>
<template>
  <UContainer>
    <BreadCrumb/>
    <Loader v-if="status ==='pending'"/>
    <div v-else>
      <div class="flex">
        <h1 class="text-2xl">{{ post.data.title }}</h1>
      </div>
      <div class="flex">
        <h3 v-if="post.data.category">category: {{ post.data.category.title }}</h3>
        <UIcon name="i-lucide-chevron-left" class="size-5"/>
        <div>4.5 (5.6K ratings)</div>
      </div>
      <ImageGallery/>
      <div class="flex gap-4">
        <div>
          <FeatureHighlights class="my-4"/>
          <p>{{ post.data.description }}</p>
        </div>
        <BookingWidget class="flex-shrink-0 p-4"/>
      </div>
    </div>
  </UContainer>
</template>
