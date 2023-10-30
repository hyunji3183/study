<template>
    <h2>CLASS</h2>
    <div :class="`basic ${active}`">
        class 1 => :class="`basic ${active}`"
    </div>

    <div class="basic" :class="active">
        class 2 => class="basic" :class="active"
    </div>

    <div :class="['basic', active]">
        class 3 => :class="['basic',active]"
    </div>

    <!-- boolean 값에따라 on/off -->
    <div :class="{ active: false }">
        class 4 => :class="{active:false}" 
    </div>

    <div :class="['basic', { active: true }]">
        class 5 => :class="['basic', { active: true }]"
    </div>

    <div :class="active == 'on' ? 'active' : ''">
        class 6 => :class="active == 'on' ? 'active' : ''"
    </div>

    <div :class="true && 'active'">
        class 7 => :class="true && 'active'"
    </div>
</template>
<script>
export default {
    name: "ClassPage",
    data() {
        return {
            active: 'on'
        }
    },
    mounted() {
        console.log(this.$route);
    }
}
</script>
<style lang="">
    
</style>