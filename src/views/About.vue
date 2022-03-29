<script>
import { Button } from 'element-ui'
import Main from '../components/Main.vue'
import router from '@/router'

const handleClick = () => {
  console.log('router.push')
  router.push('/third')
  // router.replace('/third')
}

export default {
  name: 'About',
  render() {
    return (
      <div class="about">
        <Button onClick={handleClick}>router.push</Button>
        <Main nice={132} myName={'this is myName'} />
      </div>
    )
  },
}
</script>

<style></style>
