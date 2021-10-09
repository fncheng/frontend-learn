<script>
import Mouse from './Mouse'
import Cat from './Cat'
export default {
  components: {
    Mouse,
    Cat,
  },
  methods: {
    doMouse() {
      console.log(123)
    },
  },
  render() {
    return (
      <div>
        <h1>移动鼠标！</h1>
        {this.$attrs.myName}
        <Mouse render={(mouse) => <Cat mouse={mouse} />}></Mouse>
      </div>
    )
  },
}
</script>

<style></style>
