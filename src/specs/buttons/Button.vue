<template>
  <button
    class="button__control"
    :class="buttonClasses"
    data-cy-component="button-button"
    :disabled="disabled"
    type="button"
  >
    {{ properties.title }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ButtonProperties } from './ButtonProperties';

@Component({
  components: {},
})
export default class Button extends Vue {
  @Prop({ required: true })
  public properties!: ButtonProperties;

  get disabled(): boolean {
    return this.properties.disabled;
  }

  get buttonClasses(): Record<string, boolean> {
    return {
      'button__control--disabled': this.disabled,
    };
  }
}
</script>
