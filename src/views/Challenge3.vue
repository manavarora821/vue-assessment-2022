<template>
  <div class="challenge">
    <h1>Bug Challenge 3</h1>
    <component-2 :Msg='msg' />
  </div>
</template>

<script>
  import Component2 from '@/components/Component2'

  export default {
    name: 'Challenge2',
    components: {
      Component2
    },
    data() {
      return {
        msg: [
          'Congrats you have discovered the issue',
          'Don\'t forget to commit this solution'
        ]
      }
    }
  }
</script>
