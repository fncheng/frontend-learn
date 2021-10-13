<script>
import Mouse from './Mouse'
import Cat from './Cat.vue'
import { ref } from '@vue/composition-api'
import ChildVue from './Child.vue'
import UserVue from './User.vue'
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
        <UserVue obj={'this is obj1'}>
          {(props) => <h3>{props.obj}</h3>}
        </UserVue>
        <ChildVue>
          <div slot="header">this is body</div>
          <div>this is body</div>
          <div slot="footer">this is footer</div>
        </ChildVue>
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
