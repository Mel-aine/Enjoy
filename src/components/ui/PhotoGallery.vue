<template>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 rounded overflow-hidden">
        <div v-for="(photo, index) in displayedPhotos" :key="index" class="relative">
            <img :src="photo.src" :alt="`Photo ${index + 1}`" class="object-cover w-full h-32 rounded-md" />
            <div v-if="index === displayedPhotos.length - 1 && hasMorePhotos"
                class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md">
                <span class="text-white font-bold text-lg">+{{ remainingCount }} autres photos</span>
            </div>
        </div>
    </div>
</template>

<script setup>
const allPhotos = [
    { src: 'https://cf.bstatic.com/xdata/images/hotel/max300/449339374.jpg?k=93461db30b05d9de175107aa3569b9162306710b3065ea6f7a1c074d00586437&o=' },
    { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/449339374.jpg?k=93461db30b05d9de175107aa3569b9162306710b3065ea6f7a1c074d00586437&o=&hp=1' },
    { src: 'https://cf.bstatic.com/xdata/images/hotel/max300/602487419.jpg?k=c8b9d14d356904aba595548ae46e426e006d69317f670d7e3cf05ee6f7e031c1&o=' },
    { src: 'https://cf.bstatic.com/xdata/images/hotel/max300/449340121.jpg?k=153ef5154a37dab8a771e7c5dd4ffefba9edaa907aeb5a051878ed05fea41724&o=' },
    { src: 'https://cf.bstatic.com/xdata/images/hotel/max300/449340121.jpg?k=153ef5154a37dab8a771e7c5dd4ffefba9edaa907aeb5a051878ed05fea41724&o=' },
    { src: 'https://cf.bstatic.com/xdata/images/hotel/max300/449340121.jpg?k=153ef5154a37dab8a771e7c5dd4ffefba9edaa907aeb5a051878ed05fea41724&o=' },
    // ...more
];

const displayedPhotos = allPhotos.slice(0, 5);
const remainingCount = allPhotos.length - displayedPhotos.length;
const hasMorePhotos = remainingCount > 0;
</script>
