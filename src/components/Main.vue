<script>
import Mouse from './Mouse'
import Cat from './Cat'
import { ref } from '@vue/composition-api'
export default {
  name: 'Main',
  methods: {
    doMouse() {
      console.log(123)
    },
  },
  setup() {
    const name = ref('name')
    const doInput = (e) => {
      name.value = e
    }
    return {
      name,
      doInput,
    }
  },
  render() {
    const Dog = () => <h3>{this.name}</h3>
    return (
      <div>
        <Dog></Dog>
        <h1>移动鼠标！</h1>
        {this.$attrs.myName}
        <Mouse
          render={(mouse) => <Cat mouse={mouse} />}
          ondo-input={this.doInput}
        ></Mouse>
      </div>
    )
  },
}
</script>

<style></style>
