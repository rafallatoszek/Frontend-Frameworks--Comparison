<template>
<table>
  <thead>
        <tr>
            <td>Id</td>
            <td>First name</td>
            <td>Last name</td>
            <td>Email</td>
        </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows" :key="row.id">
        <td>{{row.id}}</td>
        <td>{{row.first_name}}</td>
        <td>{{row.last_name}}</td>
        <td>{{row.email}}</td>
      </tr>
    </tbody>
</table>
</template>

<script>
import data from './../assets/data.json'

export default {
  name: 'BulkData',
  data(){
    return{
      rows: data
    }
  }
}
</script>

<style></style>