<template>
  <button
    class="be-button"
    @click="handleClick"
    :disabled="disabled"
    :class="btnClass"
  > 
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'be-button',
  data() {
    return {
    }
  },
  props: {
    size: {
      type: String,
      default: 'small'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    italic: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnClass() {
      return {
        'be-btn-disabled': this.disabled,
        ['be-btn-size-' + this.size]: true,
        'be-btn-plain': this.plain,
        'be-btn-round': this.round,
        'be-btn-italic': this.italic
      }
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>
<style>
.be-button {
  background-color: #fd9c27;
  box-sizing: border-box;
  color: #fff;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  text-shadow: none;
  text-decoration: none;
  /* border: none; */
  border: 2px solid #fd9c27;
  font-family: "Microsoft YaHei",Arial,sans-serif;
  font-weight: 400;
  cursor: pointer;
  padding: 0 15px;
}
.be-button:hover, .be-button:focus {
  border-style: solid;
  border-color: #fd9c27;
  background-color: rgba(	253, 156, 39, 0.7);
  outline: none;
}
.be-btn-size-small {
  min-width: 60px;
  height: 32px;
  font-size: 14px;
  border-radius: 3px;
  box-sizing: border-box;
}
.be-btn-size-medium {
  min-width: 96px;
  height: 40px;
  font-size: 22px;
  border-radius: 5px;
  box-sizing: border-box;
}
.be-btn-size-large {
  min-width: 196px;
  height: 68px;
  font-size: 44px;
  border-radius: 5px;
  box-sizing: border-box;
}
.be-btn-plain {
  background-color: rgba(250, 224, 193, 0.2);
  color: #fd9c27;
  border: 2px solid #fd9c27;
}
.be-btn-plain:hover, .be-btn-plain:focus {
  background-color: #fd9c27;
  color: #fff;
}
.be-btn-italic {
  transform: skewX(-10deg);
}
.be-btn-round {
  border-radius: 35px;
}
.be-btn-disabled, .be-btn-disabled:hover, .be-btn-disabled:focus {
  cursor: not-allowed;
  border-color: #e6ebf5;
  color: #b7bbc2;
  background-color: #f3f4f5;
  border-color: #e7e8eb;
}
</style>
