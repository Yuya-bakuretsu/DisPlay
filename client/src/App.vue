<template>
<Header></Header>
   <router-view/>
</template>

<script>
import Header from './components/header'
export default {
  name: 'App',
  component: {
    Header
  }
}
</script>