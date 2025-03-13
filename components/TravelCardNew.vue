<script setup>
const {post} = defineProps({
  post: Object
});

const labels = computed(() => {
  return [
    {key: "is_exclusive", label: "exclusive"},
    {key: "is_prime", label: "prime"},
    {key: "is_luxury", label: "luxury"},
    {key: "is_premium", label: "premium"}
  ];
});
</script>

<template>
  <UCard v-if="post" class="transform transition hover:-translate-y-1 duration-300">
    <div class="flex gap-2">
      <div class="w-1/3 h-72 relative">
        <NuxtLink :to="{name:'properties-slug',params: { slug: post.id }}">
          <img src="/public/placeholder.svg" alt="house" class="w-full h-full object-cover rounded-lg">
          <div class="absolute top-2 left-2 flex gap-1">
            <template
                v-for="item in labels"
                :key="item.key">
              <div v-if="post?.[item.key]"
                   class="bg-white text-black text-xs font-semibold px-2 py-1 rounded-xl uppercase flex items-center gap-1">
                <UIcon name="i-octicon:ruby-24" class="w-4 h-4 text-purple-700"/>
                {{ item.label }}
              </div>
            </template>
          </div>
        </NuxtLink>
      </div>
      <div class="w-2/3 py-2 flex flex-col justify-between">
        <div class="">
          <div class="flex justify-between items-center">
            <a :href="`https://maps.google.com/?q=${post.full_address}`" target="_blank"
               class="text-md text-blue-700 flex items-center gap-1">
              <UIcon name="i-material-symbols-light:location-on-outline" class="w-5 h-5"/>
              {{ post.full_address }}
            </a>
            <button>
              <UIcon name="i-material-symbols:favorite-outline" class="w-5 h-5"/>
            </button>
          </div>
          <div v-if="post.category?.title"
               class="w-fit bg-green-700 text-xs text-white font-semibold px-2 py-1 rounded-xl uppercase mt-3">
            {{ post?.category?.title }}
          </div>
          <NuxtLink :to="`/properties/${post.id}`">
            <h2 class="text-2xl font-semibold">{{ post?.title }}</h2>
          </NuxtLink>
          <div class="mt-2">
            <ul class="flex gap-4 text-lg">
              <li v-if="post.total_rooms">Locali:<span class="block font-bold">{{ post.total_rooms }}</span></li>
              <li>Mq:<span class="block font-bold">-</span></li>
              <li v-if="post.year_construction">Anno costruzione:<span
                  class="block font-bold">{{ post.year_construction }}</span></li>
              <li v-if="post.condition?.title">Stato:<span class="block font-bold">{{ post.condition.title }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex justify-between text-lg">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8">
              <img v-if="post.user.avatar" :src="post.user.last_name" alt="avatar"
                   class="w-full h-full object-cover rounded-full">
              <img v-else src="/public/placeholder.svg" alt="avatar" class="w-full h-full object-cover rounded-full">
            </div>
            {{ post?.user?.first_name }} {{ post?.user?.last_name }}
          </div>
          <div class="text-green-700 font-bold">{{ post?.pricing }} €</div>
        </div>
      </div>
    </div>
  </UCard>
</template>
