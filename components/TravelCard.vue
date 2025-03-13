<template>
    <UCard class="transform transition hover:-translate-y-1 duration-300">
              <template #header>
                <!-- <h2 class="text-lg font-semibold">{{ post.title }}</h2> -->
                <img class="w-full rounded-t-xl" src="https://ui.shadcn.com/placeholder.svg" alt="Sunset in the mountains" />
              </template>
                          <!-- <img src="https://ui.shadcn.com/placeholder.svg" :alt="post.title" class="w-full h-auto object-cover" /> -->
              <template #footer>
                <section class="basis-full p-3 lg:p-4 flex flex-col gap-1 justify-between">
                    <div class="space-y-1">
                      <ul class="truncate text-xs uppercase font-medium text-ink-300 tracking-wider m-auto p-0">
                        <li class="inline after:mx-2 after:text-ink-300 last:after:hidden">Parigi</li>                                           
                      </ul>
                      <a href="#" class="stretched-click-overlay no-underline outline-none block" target="_blank">
                        <h4 class="text-heading-xs line-clamp-3 font-bold max-lg:line-clamp-2 my-auto">
                          Centro Pompidou Parigi 
                        </h4>          
                      </a>
                      <div class="text-xs lg:text-sm m-auto text-ink-300 line-clamp-2">
                              Scopri Picasso, Dalí, Matisse e altri ancora nel museo di Parigi che si trova all'interno della città.
                      </div>
                    </div>

                    <footer class="flex items-end justify-between">
                          
                      <div class="flex items-center text-ink-300 font-normal">
                        <span></span>
                        <div class="text-xs text-ink-500">
                          <span class="mr-1 font-medium">4,4</span>
                                  <span class="text-ink-300">
                              (7.278)
                            </span>
                        </div>
                      </div>

                      <div class="text-ink-300 leading-tight text-right ml-auto">
                        <span class="text-xs">Da</span>
                        <br>
                        <span class="Price text-sm lg:text-lg font-medium leading-tight text-ink-500">17,00 €</span>
                      </div>
                  </footer>
                </section>
              </template>
            </UCard>
</template>

<script setup>
</script>

<style lang="scss" scoped>

</style>