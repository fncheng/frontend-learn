<script>
import Mouse from './Mouse'
import Cat from './Cat.vue'
import { ref } from '@vue/composition-api'
import UserVue from './User.vue'
import ComponentA from './componentA.jsx'
import ComponentB from './componentB.jsx'
import ComponentC from './componentC.jsx'

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
    console.log('this', this.$store.state)
    return (
      <div>
        <Dog></Dog>
        <ComponentA name={'zs'}></ComponentA>
        <ComponentB name={'zs'}></ComponentB>
        <ComponentC name={'zs'}></ComponentC>
        <UserVue
          obj="this is obj1"
          scopedSlots={{
            default: (props) => {
              console.log('props in scopedSlots', props)
              return <div style="backgroundColor:orange">{props.obj}今年</div>
            },
          }}
        >
          <div slot="header">header</div>
        </UserVue>
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
