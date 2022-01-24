<template>
<table>
  <thead>
      <tr>
          <td>Album Id</td>
          <td>Id</td>
          <td>Title</td>
          <td>Url</td>
          <td>ThumbnailUrl</td>
      </tr>
  </thead>
  <tbody v-if="photos && photos.length">
    <tr v-for="photo in photos" :key="photo.id">
      <td>{{photo.albumId}}</td>
      <td>{{photo.id}}</td>
      <td>{{photo.title}}</td>
      <td>{{photo.url}}</td>
      <td>
          <img v-bind:src="photo.thumbnailUrl">
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  name: 'Request',
  setup() {
    const photos = ref(null);

    function fetchData() {
      return fetch('http://jsonplaceholder.typicode.com/photos', {
        method: 'get',
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(res => {
          return res.json();
        })
        .then(json => {
          photos.value = json;
        });
    }

    onMounted(() => {
      fetchData();
    });

    return { photos };
  }
}
</script>

<style></style>