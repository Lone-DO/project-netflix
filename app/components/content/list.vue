<script setup lang='ts'>
const items = [
  { src: 'https://occ-0-590-586.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTPfli8zUeCdlW65EUMWgGk4Af6v3c1VDMvzvcSrn19RopAZHgLdh3oZ2Sz_P7I8mgZ8lsqxbX6biPr1dAPT1GkaVJ0Mhxnb3oU7cVGxlyD2snJ48rA1MAWwnpv61GnKBziM.jpg?r=576' },
  { src: 'https://occ-0-590-586.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABUemhBMcOVz_62GFLeCoGWai7vKpovypv6hP8DiIw6r0-nyQgzuN9fXsrcd5zOGiJ9rB3rRWlLGFUyF7JJlLiFwnw2x07-xWwDm4fshkCNlNKmj6DV800ZMKf3VoC5EeNiGc.jpg?r=627' },
  { src: 'https://occ-0-590-586.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYZFFXX62JhLaodkgUXXGDk2GI0bu6xKr-3kY21TDdtFIXPcEv-rmvaL4q2Lhk1wNjwAsI13ou-aHnibgGRTu1IsbHqpth5gQ0bR3sRF7ycHZAnPhZfzaRsawoO-VMw6ttnQ.jpg?r=c16' },
];
</script>

<template>
  <section id="content-list" class="w-full flex-1">
    <div class="w-full text-left">
      <h2 class="text-lg font-medium lg:text-2xl">
        Trending Now
      </h2>
      <div class="content-grid__items flex gap overflow-x-auto overflow-y-hidden p-4">
        <ContentItem
          v-for="(item, index) in items"
          :key="index"
          :index="index + 1"
          :src="item.src"
        />
      </div>
    </div>
  </section>
</template>
